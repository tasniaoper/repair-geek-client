import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import AuthProvider from "./context/AuthProvider";
import AddService from "./components/Dashboard/Admin/AddService/AddService";
import MakeAdmin from "./components/Dashboard/Admin/MakeAdmin/MakeAdmin";
import ManageServices from "./components/Dashboard/Admin/ManageServices/ManageServices";
import AppointmentList from "./components/Dashboard/Admin/AppointmentList/AppointmentList";
import BookList from "./components/Dashboard/User/BookList/BookList";
import Review from "./components/Dashboard/User/Review/Review";
import Book from "./components/Dashboard/User/Book/Book";
import { Toaster } from "react-hot-toast";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <AuthProvider>
      <Toaster/>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />}> </Route>
          <Route exact path="/" element={<Home />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
          <Route path="/contact" element={<ContactUs />}> </Route>
          <Route path="/about" element={<AboutUs />}> </Route>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}> </Route>
          <Route path="/addService" element={<PrivateRoute><AddService /></PrivateRoute>}> </Route>
          <Route path="/makeAdmin" element={<PrivateRoute><MakeAdmin /></PrivateRoute>}> </Route>
          <Route path="/manageServices" element={<PrivateRoute><ManageServices /></PrivateRoute>}> </Route>
          <Route path="/appointmentList" element={<PrivateRoute><AppointmentList /></PrivateRoute>}> </Route>
          <Route path="/bookList" element={<PrivateRoute><BookList /></PrivateRoute>}> </Route>
          <Route path="/review" element={<PrivateRoute><Review /></PrivateRoute>}> </Route>
          <Route path="/book" element={<PrivateRoute><Book /></PrivateRoute>}> </Route>
          <Route path="/book/:id" element={<PrivateRoute><Book /></PrivateRoute>}> </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
