const mongoose=require('mongoose')
const express=require('express');
const app=express();
const cors=require('cors');
const bloodGroupModel=require('./models/bloodgroups')
const RequestModel=require('./models/request')

app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://127.0.0.1:27017/bloodmanagement').then(()=>console.log('connected'));
app.get('/getInventory',(req,res)=>{
    bloodGroupModel.find({},(err,result)=>{
        if(err){
            res.json(err);
            console.log(err);
        }
        else{
            res.json(result);
        }
    })
})

app.put('/updateInventory',async (req,res)=>{
    const group=req.body.bloodtype;
    const quantity=req.body.quantity;
    const doc = await bloodGroupModel.findOne({bloodType:group})
    const newVal=Number(doc.quantity)+quantity;
    await doc.updateOne({quantity:newVal})
    res.json(doc);
})

app.get('/getRequest',(req,res)=>{
    RequestModel.find({},(err,result)=>{
        if(err){
            res.json(err);
            console.log(err);
        }
        else{
            res.json(result);
        }
    })
})
app.post('/createRequest',async (req,res)=>{
    try {
        const { requestType, bloodType, quantity, name, email } = req.body;
        console.log(req.body);
        // Create a new request object
        const request = new RequestModel({
          requestType,
          bloodType,
          quantity,
          name,
          email,
          status: 'pending', // Set initial status to 'pending'
        });
    
        // Save the request to the database
        const savedRequest = await request.save();
        
        res.json(savedRequest);
      } catch (error) {
        res.json({ error: 'Error creating request' });
      }

})
app.get('/getPending',async (req,res)=>{
    const doc=await RequestModel.find({status:'pending'});
    res.json(doc);
})
app.put('/clearPending',async (req,res)=>{
    const id=req.body.id;
    console.log(id);
    const status=req.body.status;
    console.log(status);
    const doc=RequestModel.findOne({_id:id},async (err,doc)=>{
        console.log(doc);
        const group=doc.bloodType;
        const quantity=doc.quantity;
        console.log(quantity);
        if(status=='approved'){
            if(doc.requestType==='donor'){
                const document = await bloodGroupModel.findOne({bloodType:group})
                const newVal=Number(document.quantity)+quantity;
                await document.updateOne({quantity:newVal})
                doc.status='rejected';
                await doc.save();
                res.json(doc);
            }
            else if(doc.requestType==='recipient'){
                const document=await bloodGroupModel.findOne({bloodType:group})
                console.log(document);
                const currentAvailable=Number(document.quantity)-quantity;
                console.log(currentAvailable);
                if(currentAvailable>=0){
                    await document.updateOne({quantity:currentAvailable});
                    doc.status='approved';
                    await doc.save();
                    console.log(document);
                    res.json(doc);
                }
                else{
                    doc.status='rejected';
                    await doc.save();
                    res.json(doc);
                }
            }
        }else if(status=='rejected'){
            doc.status='rejected';
            await doc.save();
            res.json();
        }
        
    });
})
app.get('/getRejected',async (req,res)=>{
    const doc=await RequestModel.find({status:'rejected'});
    res.json(doc);
})
app.get('/getApproved',async (req,res)=>{
    const doc=await RequestModel.find({status:'approved'});
    res.json(doc);
})
app.listen(3001,()=>{
    console.log('server is running');
})