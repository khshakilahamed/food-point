import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './Pages/About/About';
import AllStoresFood from './Pages/AllStoresFood/AllStoresFood';
import AutoScrollToTop from './Pages/AutoScrollToTop/AutoScrollToTop';
import BackToTop from './Pages/BackToTop/BackToTop';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import MyOrders from './Pages/MyOrders/MyOrders';
import NotFound from './Pages/NotFound/NotFound';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import RestaurantFoods from './Pages/RestaurantFoods/RestaurantFoods';
import SignUp from './Pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute/PrivateRoute';


function App() {
  return (
      <div>
        <AuthProvider>
          <BackToTop></BackToTop>
          <Router>
            <AutoScrollToTop></AutoScrollToTop>
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
              <PrivateRoute path="/placeOrder/:id">
                <PlaceOrder></PlaceOrder>
              </PrivateRoute>
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
        </AuthProvider>
      </div>
  );
}

export default App;
