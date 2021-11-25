import {
     BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AuthProvider from "./Context/AuthProvider";
import AllProducts from "./Pages/AllProducts/AllProducts/AllProducts";
import PurchesProduct from "./Pages/AllProducts/PurchesProduct/PurchesProduct";
import Contact from "./Pages/Contact/Contact";
import Dashboard from "./Pages/Dashborad/Dashboard/Dashboard";
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login/Login";
import Registration from "./Pages/Login/Registration/Registration";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
   <AuthProvider>
     <Router>
     <Switch>
     <Route exact path = "/">
            <Home></Home>
       </Route>
       <Route exact path = "/home">
            <Home></Home>
       </Route>
       <Route exact path = "/allproducts">
            <AllProducts></AllProducts>
       </Route>
       <Route  path = "/dashboard">
            <Dashboard></Dashboard>
       </Route>
       <Route exact  path = "/login">
            <Login></Login>
       </Route>
       <Route exact  path = "/registration">
            <Registration></Registration>
       </Route>
       <PrivateRoute exact  path = "/productPurches/:productID">
            <PurchesProduct></PurchesProduct>
       </PrivateRoute>
       <Route exact path ="/contact">
          <Contact></Contact>
       </Route>
     </Switch>
   </Router>
   </AuthProvider>
  );
}

export default App;
