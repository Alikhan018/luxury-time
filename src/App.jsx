import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Auth from './pages/Auth';
import AdminPanel from './pages/AdminPanel';
import AddWatchForm from './pages/AddWatch';
import EditWatchForm from './pages/EditWatch';
import ManageBrands from './pages/ManageBrands';
import ManageCollections from './pages/ManageCollections';
import ManageWatches from './pages/ManageWatches';
import AddBrandForm from './pages/AddBrands';
import AddCollectionForm from './pages/AddCollections';
import EditBrandForm from './pages/EditBrand';
import EditCollectionForm from './pages/EditCollection';
import Brands from './pages/Brands';
import BrandDetail from './pages/BrandDetails';
import Collections from './pages/Collections';
import CollectionDetail from './pages/CollectionDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import OrderHistory from './pages/Orders';
import MyAccount from './pages/MyAccount';
import Wishlist from './pages/Wishlist';
import OrderManagement from './pages/OrderManagement';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/brands/:id" element={<BrandDetail />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/collections/:id" element={<CollectionDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/admin/brands" element={<ManageBrands />} />
                <Route path="/admin/brands/add" element={<AddBrandForm />} />
                <Route path="/admin/brands/edit/:id" element={<EditBrandForm />} />
                <Route path="/admin/collections" element={<ManageCollections />} />
                <Route path="/admin/collections/add" element={<AddCollectionForm />} />
                <Route path="/admin/collections/edit/:id" element={<EditCollectionForm />} />
                <Route path="/admin/watches" element={<ManageWatches />} />
                <Route path="/admin/watches/add" element={<AddWatchForm />} />
                <Route path="/admin/watches/edit/:id" element={<EditWatchForm />} />
                <Route path="/admin/order-management" element={<OrderManagement />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/orders" element={<OrderHistory />} />
                <Route path="/account" element={<MyAccount />} />
                <Route path="/wishlist" element={<Wishlist />} />
              </Routes>
            </main>
            <Footer />
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#363636',
                  color: '#fff',
                },
                success: {
                  style: {
                    background: '#10B981',
                  },
                },
                error: {
                  style: {
                    background: '#EF4444',
                  },
                },
              }}
            />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;