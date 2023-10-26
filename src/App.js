import logo from './logo.svg';
import './App.css';
import { Routes , Route} from 'react-router-dom';
import { Header } from './Components/Header';
import { NavBar } from './Components/NavBar';
import { Home } from './Components/Home';
// import { AboutUs } from './Components/About.Us';
import { Contact } from './Components/Contact';
import NoMatch from './Components/NoMatch';
import { Cart } from './Components/Cart';
import { Checkout } from './Components/Checkout';
import { Ordered } from './Components/Ordered';
import ProductDetails from './Components/ProductDetails';
import React from 'react';
import Login from './Components/Login';
import { AuthProvider } from './Components/Auth';
import Profile from './Components/Profile';
import { RequireAuth } from './Components/RequireAuth';
const About = React.lazy(() => import('./Components/About.Us'));

function App() {
  return (
    <>
      <AuthProvider>
        <Header></Header>
        <NavBar /><br /> <br />
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='about' element={
            <React.Suspense fallback='...Loading'>
              <About></About>
            </React.Suspense>
          } />
          <Route path='contact' element={<Contact></Contact>} />
          <Route path='*' element={<NoMatch></NoMatch>} />
          <Route path='cart' element={<Cart></Cart>} >
              <Route index element={<Checkout></Checkout>} />
              <Route path='checkout' element={<Checkout></Checkout>} >
                <Route path=':productId' element={<ProductDetails></ProductDetails>} />
              </Route>
              <Route path='ordered' element={<Ordered></Ordered>} />
          </Route>
          <Route path='profile' element={
            <RequireAuth> 
              <Profile></Profile>
            </RequireAuth> 
            } />
          <Route path='login' element={<Login></Login>}/>
        </Routes>
      </AuthProvider>


      
    </>
    

  );
}

export default App;
