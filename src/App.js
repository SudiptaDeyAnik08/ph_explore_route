import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Main from './components/Layout/Main';
import UserDetail from './components/UserDetail/UserDetail';
import Post from './components/Post/Post';

function App() {

  const router = createBrowserRouter([
    {path:'/', element: <Main></Main> , children:[


      {path:'/about', element: <About></About>},
      {path:'/home',element: <Home></Home>},
      {
        path:'/Products',
        loader: async()=>{
          return fetch('https://jsonplaceholder.typicode.com/users');
        },
        element: <Products></Products>
      },
      {
        path:'/user/:a',
        loader:async({params})=>{
          
          console.log(params);
          return  fetch(`https://jsonplaceholder.typicode.com/users/${params.a}`);
        },
        element:<UserDetail></UserDetail>
      },
      {
        path:'/post',
        loader:async()=>{
          return fetch('https://jsonplaceholder.typicode.com/posts')
        },
        element:<Post></Post>
      },
      
    ]  },
    {path:'*', element: <div>This Page is not found.Error 404...!</div>}




  ])

  return (
    <div className="App">
     
     <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
