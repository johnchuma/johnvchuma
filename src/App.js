import logo from './logo.svg';
import './App.css';
import './Marquee.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home_page';
import MainLayout from './layout/main_layout';
import { Children } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimationPage from './pages/animation_page';

function App() {
  return (
    <BrowserRouter basename='/johnvchuma' >
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/animation" index element={<AnimationPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
