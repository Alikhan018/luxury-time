import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, HeadphonesIcon, Star, Clock } from 'lucide-react';
import { getProducts } from '../firebase/firestore';
import ProductCard from '../components/product/ProductCard';
import Button from '../components/common/Button';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const [featured, newProducts] = await Promise.all([
          getProducts({ featured: true }, 'rating', 6),
          getProducts({ isNew: true }, 'createdAt', 6)
        ]);

        setFeaturedProducts(featured);
        setNewArrivals(newProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1034054/pexels-photo-1034054.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Luxury Watches"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in">
            Timeless
            <span className="text-luxury-gold block">Elegance</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-slide-up">
            Discover the world's finest luxury timepieces, crafted with precision and passion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button size="lg" asChild>
              <Link to="/products">
                Explore Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">Learn Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Featured Timepieces
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hand-selected luxury watches that represent the pinnacle of horological craftsmanship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/products">
              View All Watches
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-luxury-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Four Decades of Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since 1985, LuxuryTime has been the premier destination for discerning collectors and enthusiasts.
                Our curated collection features the world's most prestigious watchmakers, from Swiss masters to
                innovative modern artisans.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Every timepiece in our collection is authenticated by our expert team and comes with our
                guarantee of authenticity and quality.
              </p>
              <Button variant="primary" size="lg" asChild>
                <Link to="/about">Our Heritage</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Watchmaker crafting"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <Clock className="w-8 h-8 text-luxury-gold" />
                  <div>
                    <p className="font-semibold text-gray-900">40+ Years</p>
                    <p className="text-sm text-gray-600">Of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            New Arrivals
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The latest additions to our prestigious collection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              The LuxuryTime Promise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your satisfaction is our commitment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                <Shield className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Authenticity Guaranteed</h3>
              <p className="text-gray-600">Every watch is authenticated by our expert team</p>
            </div>

            <div className="text-center group">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                <Truck className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-gray-600">Complimentary shipping on all orders worldwide</p>
            </div>

            <div className="text-center group">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                <HeadphonesIcon className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">Dedicated concierge service for all customers</p>
            </div>

            <div className="text-center group">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                <Star className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lifetime Warranty</h3>
              <p className="text-gray-600">Comprehensive coverage for your investment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-luxury-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Stay in Time
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Subscribe to receive updates on new arrivals, exclusive offers, and horological insights
          </p>

          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
            />
            <Button type="submit" size="lg">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;