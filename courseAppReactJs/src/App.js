import './App.css';
import Home from './Component/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import AllCourses from './Component/AllCourses';
import AddCourse from './Component/Forms/AddCourse';


function App() {

  const refresh = () => {
    console.log("Inside refresh")
    window.location.reload(false);
  }

  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<><Home /> <AllCourses refresh={refresh} /></>} />

          <Route path='/addCourse' element={<AddCourse />} />

        </Routes>

      </Router>




    </>
  );
}

export default App;
