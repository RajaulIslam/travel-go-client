import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddElement from './Pages/AddElement/AddElement';
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import About from './Pages/About/About';
import Service from './Pages/Home/Service/Service';
import MyOrder from './Pages/Home/MyOrder/MyOrder';
import AllOrder from './Pages/AllOrder/AllOrder';
import Register from './Pages/Register/Register';
import Footer from './Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/service/:id'>
              <Service></Service>
            </PrivateRoute>
            <PrivateRoute path='/addElement'>
              <AddElement></AddElement>
            </PrivateRoute>
            <PrivateRoute path='/myOrder'>
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path='/allOrder'>
              <AllOrder></AllOrder>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
