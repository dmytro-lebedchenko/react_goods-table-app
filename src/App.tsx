import { useEffect } from 'react';
import { Outlet } from 'react-router';

import { useAppDispatch } from './app/hooks';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { productsInit } from './features/productsSlice';
import './App.scss';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(productsInit());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />

      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};
