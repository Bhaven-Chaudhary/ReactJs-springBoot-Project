import './App.css';
import Home from './Component/Home';
import { ToastContainer, toast } from 'react-toastify';

import AllCourses from './Component/AllCourses';
import AddCourse from './Component/AddCourse';

function App() {
  return (
    <>
      {/* <Home />
      <AllCourses /> */}
      <AddCourse />
    </>
  );
}

export default App;
