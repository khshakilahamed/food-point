import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './Pages/About/About';
import AddNewFood from './Pages/AddNewFood/AddNewFood';
import AllStoresFood from './Pages/AllStoresFood/AllStoresFood';
import AutoScrollToTop from './Pages/AutoScrollToTop/AutoScrollToTop';
import BackToTop from './Pages/BackToTop/BackToTop';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import ManageOrders from './Pages/ManageOrders/ManageOrders';
import Manage from './Pages/MyOrders/Manage';
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
              <PrivateRoute path="/myOrders">
                <MyOrders></MyOrders>
              </PrivateRoute>
              <PrivateRoute path="/manageOrders">
                <ManageOrders></ManageOrders>
              </PrivateRoute>
              <PrivateRoute path="/addNewFood">
                <AddNewFood></AddNewFood>
              </PrivateRoute>
              <PrivateRoute path="/manage/:id">
                <Manage></Manage>
              </PrivateRoute>
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
