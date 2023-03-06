
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import MainImg from './components/MainImg';
import MainContext from './components/MainContext';
import Footer from './components/Footer';
import Register from './components/Register'
import Login from './components/Login';
import Message from './components/Message';
import Board from './components/Board';
import BoardList from './components/BoardList';
import BoardBox from './components/BoardBox';
import {createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import BoardListContent from './components/BoardListContent';

const Layout = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <MainImg/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children: [
      {
        path:'/',
        element: <MainContext/>
      },
      {
        path:'/login',
        element: <Login/>
      },
      {
        path:'/register',
        element: <Register/>
      },
      {
        path:'/message',
        element: <Message/>
      },
      {
        path: '/board',
        element: <Board/>
      },
      {
        path: '/boardlist/:page',
        element: <BoardList/>
      },
      {
        path: '/boardlist/:page/:num',
        element: <BoardBox/>
      },
      
    ]
  }
])







function App() {
  return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
