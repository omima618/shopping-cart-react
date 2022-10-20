import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Cart from './components/Shop/Cart';
import Wishlist from './components/Shop/Wishlist';
import Support from './components/Home/Support';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import ProductDetails from './components/Shop/ProductDetails';
import AuthAlert from './components/Auth/AuthAlert';
import NotFound from './components/Home/NotFound';
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <AuthAlert />
            <Routes>
                <Route path="/" element={<Shop />} />
                <Route
                    path="/productdetails/:id"
                    element={<ProductDetails />}
                />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/home" element={<Home />} />
                <Route path="/support" element={<Support />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
