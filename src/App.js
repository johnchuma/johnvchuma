import logo from './logo.svg';
import './App.css';
import './Marquee.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home_page';
import MainLayout from './layout/main_layout';
import { Children } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<MainLayout/>,
      children:[{
        path:'/',
        index:true,
        element:<HomePage/>
      }]
    }
  ])
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
