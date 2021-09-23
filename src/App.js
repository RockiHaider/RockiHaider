import Home from './Components/Home';
// import './Foodma.css';
import './App.css'
import Profile from './Components/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Item from './Components/Item';
// import Footer from './Components/Footer';
import Register from './Components/Register';
import MyOrder from './Components/MyOrder';
import Wishlist from './Components/Wishlist';
import Login from './Components/Login';


function App() {
  return (
    <>
      <Router>        
        <Item/>
        {/* <Footer/> */}
        <Switch>
        <Route path='/profile' component={Profile} />
        <Route path='/register' component={Register} />
        <Route path='/myorder' component={MyOrder} />
        <Route path='/wishlist' component={Wishlist} />
        <Route path='/login' component={Login} />
        <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </>


  );
}
export default App;
