
import './App.css';
import Home from './components/screen/Home';
import Login from './components/screen/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Myorder from './components/screen/Myorder';
import { CartProvider } from './components/Contextreducer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/screen/Signup';
function App() {
  return (<CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
       
        </Route>
        <Route path="/Login" element={<Login/>}>
       
       </Route>
       <Route path="/Createuser" element={<Signup/>}>
       
       </Route>
       
       <Route path="/myOrder" element={<Myorder/>}>
       
       </Route>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
