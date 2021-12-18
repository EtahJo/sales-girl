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
import Login from "./components/Login";
import {useEffect} from "react";
import {useStateValue} from './components/StateProvider';
import { onAuthStateChanged} from 'firebase/auth';
import {auth} from "./firebase"


function App() {
  const[{},dispatch] = useStateValue();
  useEffect(() => {
  onAuthStateChanged(auth,(currentUser)=>{
    console.log(currentUser)
    if(currentUser){
      dispatch({
        type:'SET_USER',
        user:currentUser
      })
    }else{
      dispatch({
        type:'SET_USER',
        user:null
      })
    }
  })
  }, [])
  return (
    <Router>
    <div className="app">
      <Routes>
      <Route path='/login' element={<><Preheader/><Header/><Login/><Footer/></>}/>
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
