import './App.css';
import Home from './Component/Home';
import { ToastContainer, toast } from 'react-toastify';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import AllCourses from './Component/AllCourses';
import AddCourse from './Component/AddCourse';

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<><Home /> <AllCourses /></>} />

          <Route path='/addCourse' element={<AddCourse />} />
        </Routes>
      </Router>





    </>
  );
}

export default App;
