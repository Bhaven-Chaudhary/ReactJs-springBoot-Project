import './App.css';
import Home from './Component/Home';
import { ToastContainer, toast } from 'react-toastify';

import AllCourses from './Component/AllCourses';

function App() {
  return (
    <>
      <Home />
      <AllCourses />
    </>
  );
}

export default App;
