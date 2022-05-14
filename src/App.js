import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Footer from './pages/Shared/Footer/Footer';
import { useEffect, useState } from 'react';
import { PropagateLoader } from 'react-spinners';
import Appoinment from './pages/AppoinmentPage/Appoinment/Appoinment';
import Signup from './pages/Login/Signup';
import RequireAuth from './pages/Login/RequireAuth';

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  }, [])

  return (
    <div className="">
      {
        loading ?
          <div className='flex justify-center items-center h-screen'>
            <PropagateLoader color={'#36D7B7'} loading={loading} size={40} />
          </div>
          :

          <>
            <Navbar></Navbar>
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/about' element={<About></About>}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/signup' element={<Signup></Signup>}></Route>

              <Route path='/appointment' element={
                <RequireAuth>
                  <Appoinment></Appoinment>
                </RequireAuth>
              }></Route>

            </Routes>
            <Footer></Footer>
          </>
      }
    </div>
  );
}

export default App;
