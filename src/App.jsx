import "./App.css";
import About from "./componets/about/About";
import Contact from "./componets/contact/Contact";
import Home from "./componets/home/Home";
import Layout from "./componets/mainlayout/Layout";
import Portfolio from "./componets/portfolio/Portfolio";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children:[
        { index: true, element: <Home/> },
        {path:'home', element:<Home/>},
        {path:'about', element:<About/>},
        {path:'contact', element:<Contact/>},
        {path:'portfolio', element:<Portfolio/>},
      ]
    },
  ]);
  
  return <RouterProvider router={routes}></RouterProvider>;

}



export default App;
