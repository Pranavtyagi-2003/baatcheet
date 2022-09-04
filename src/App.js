import './App.css';
import NavbarPage from './Components/NavbarPage';
import Meetingtable from './Components/Meetingtable';
import ScheduleMeeting from './Components/ScheduleMeeting';
import Section1 from './Components/Section1';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import AdminPortal from './Components/AdminPortal';

function App() {
  return (
    <div className="App">
      {/* <NavbarPage/>
      <AdminPortal/> */}
      <Router>
        <Routes>
          <Route path="/" element={<NavbarPage/>}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<Section1/>}></Route>
        </Routes>
        <Routes>
          <Route path="/scheduleMeeting" element={<ScheduleMeeting/>}></Route>
        </Routes>
        <Routes>
          <Route path="/meetingtable" element={<Meetingtable/>}></Route>
        </Routes>
        <Routes>
          <Route path="/adminportal" element={<AdminPortal/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
