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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard';
import MyAppointment from './pages/Dashboard/MyAppointment';
import MyReviews from './pages/Dashboard/MyReviews';
import Users from './pages/Dashboard/Users';
import RequireAdmin from './pages/Login/RequireAdmin';

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
            <PropagateLoader color={'#36D7B7'} loading={loading} size={25} />
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

              <Route path='/dashboard' element={
                <RequireAuth>
                  <Dashboard></Dashboard>
                </RequireAuth>
              }>
                <Route index element={<MyAppointment></MyAppointment>}></Route>
                <Route path='reviews' element={<MyReviews></MyReviews>}></Route>
                <Route path='users' element={
                  <RequireAdmin>
                    <Users></Users>
                  </RequireAdmin>
                }></Route>
              </Route>

            </Routes>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
          </>
      }
    </div>
  );
}

export default App;
