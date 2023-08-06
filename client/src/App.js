import './App.css';
import Admin from './pages/Admin';
import PendingRequests from './pages/PendingRequests';
import Form from './components/Form';
import ApprovedRequests from './pages/ApprovedRequests';
import RejectedRequests from './pages/RejectedRequests';
import {Routes,Route,Link} from 'react-router-dom'
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Inventory</Link>
          </li>
          <li>
            <Link to='/form'>Form</Link>
          </li>
          <li>
            <Link to='/pendingRequests'>Pending Requests</Link>
          </li>
          <li>
            <Link to='/approvedRequests'>Approved Requests</Link>
          </li>
          <li>
            <Link to='/rejectedRequests'>Rejected Requests</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Admin/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/pendingRequests' element={<PendingRequests/>}/>
        <Route path='/approvedRequests' element={<ApprovedRequests/>}/>
        <Route path='/rejectedRequests' element={<RejectedRequests/>}/>
      </Routes>
    </>
  );
}

export default App;
