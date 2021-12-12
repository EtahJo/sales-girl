import Header from "./components/Header";
import Preheader from "./components/Preheader";
import {
  BrowserRouter as
  Router,
  Routes,
  Route
} from "react-router-dom"
import Home from "./components/Home";
import Fashion from "./components/Fashion";
import Kitchen from "./components/Kitchen";
import Tech from "./components/Tech";
import Furniture from "./components/Furniture";
import Book from "./components/Book";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";


function App() {
  return (
    <Router>
    <div className="app">
      <Routes>
      <Route path='/checkout' element={<><Preheader/><Header/><Checkout/><Footer/></>}/>
      <Route path='/fashion' element={<><Preheader/><Header/><Fashion/><Footer/></>}/>
      <Route path='/kitchen-utensils' element={<><Preheader/><Header/><Kitchen/><Footer/></>}/>
      <Route path='/tech' element={<><Preheader/><Header/><Tech/><Footer/></>}/>
      <Route path='/furniture' element={<><Preheader/><Header/><Furniture/><Footer/></>}/>
      <Route path='/books' element={<><Preheader/><Header/><Book/><Footer/></>}/>
      <Route path='/' element={<><Preheader/><Header/><Home/><Footer/></>}/>
      
      </Routes>
        
    </div>
    </Router>
  );
}

export default App;
