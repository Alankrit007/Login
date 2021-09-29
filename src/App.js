// import logo from './logo.svg';
import './App.css';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import Bg from './Component/Bg';

function App() {
  return (
    <>
    <Navbar/>
   <div className ="Container"  my-3>
   <Login/>
     </div> 
    <Bg/>
    </>
  );
}

export default App;
