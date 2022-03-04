import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AllStoresFood from './Pages/AllStoresFood/AllStoresFood';
import BackToTop from './Pages/BackToTop/BackToTop';
import CustomerAddress from './Pages/CustomerAddress/CustomerAddress';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import MyOrders from './Pages/MyOrders/MyOrders';
import NotFound from './Pages/NotFound/NotFound';
import RestaurantFoods from './Pages/RestaurantFoods/RestaurantFoods';
import SignUp from './Pages/SignUp/SignUp';


function App() {
  return (
      <div>
        <BackToTop></BackToTop>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/restaurantFood/:id">
              <RestaurantFoods></RestaurantFoods>
            </Route>
            <Route path="/customerAddress/:id">
              <CustomerAddress></CustomerAddress>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="/allFoods">
              <AllStoresFood></AllStoresFood>
            </Route>
            <Route path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
