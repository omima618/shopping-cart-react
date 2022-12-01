import { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Shop/Shop';
import Cart from './components/Shop/Cart';
import Wishlist from './components/Shop/Wishlist';
import Support from './components/Home/Support';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import ProductDetails from './components/Shop/ProductDetails';
import AuthAlert from './components/Auth/AuthAlert';
import NotFound from './components/NotFound/NotFound';

import preloader from '../src/assets/preloader.gif';

const Loader = () => {
    return (
        <div className="container">
            <div className="preloader d-flex justify-content-center">
                <img src={preloader} alt="loading" />
            </div>
        </div>
    );
};
const HomeComponent = lazy(() => import('./components/Home/Home'));
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <AuthAlert />
            <Routes>
                <Route
                    path="/productdetails/:id"
                    element={<ProductDetails />}
                />
                <Route
                    path="/"
                    element={
                        <Suspense fallback={Loader()}>
                            <HomeComponent />
                        </Suspense>
                    }
                />
                <Route path="/shop" element={<Shop />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/support" element={<Support />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
