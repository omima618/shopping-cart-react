import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Cart from './components/Shop/Cart';
import Wishlist from './components/Shop/Wishlist';
import Support from './components/Home/Support';
import ProductDetails from './components/Shop/ProductDetails';
function App() {
    return (
        <BrowserRouter>
            <Navbar />
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
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
