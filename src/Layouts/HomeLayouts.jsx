import React, { useEffect, useContext } from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { LoadingContext } from '../context/LoadingContext';
import Loading from '../Components/Loading';

const HomeLayouts = () => {
  const location = useLocation();
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // 0.5 second delay
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div>
      {loading && <Loading />}

      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayouts;
