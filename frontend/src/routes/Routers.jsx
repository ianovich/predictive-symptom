import Home from "../pages/Home"
import Services from '../pages/Services'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Contact from '../pages/Contact'
import Doctors from '../pages/Doctors/Doctors'
import DoctorDetails from '../pages/Doctors/DoctorDetails'
import SymptomChecker from '../pages/SymptomChecker'


import { Routes, Route } from 'react-router-dom'
const Routers = () => {
  return  <Routes>
<Route path="/" element={<Home/>} />
<Route path="/home" element={<Home/>} />
<Route path="/doctors" element={<Doctors/>} />
<Route path="/doctors/:id" element={<DoctorDetails/>} />
<Route path="/login" element={<Login/>} />
<Route path="/register" element={<SignUp/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/services" element={<Services/>} />
<Route path="/symptomchecker" element={<SymptomChecker/>} />



    </Routes>
  
};

export default Routers;