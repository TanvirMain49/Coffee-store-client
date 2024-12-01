import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AddCoffey from "../Pages/AddCoffey";
import UpdatedCoffee from "../Pages/UpdatedCoffee";
import CoffeeDetails from "../Pages/CoffeeDetails";
import SignIn from "../Pages/SignIn";
import Users from "../Pages/Users";
import LogIn from "../Pages/LogIn";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path:'/',
            element:<Home></Home>,
            loader:()=> fetch('http://localhost:5000/coffee')
        },
        {
            path:'/addCoffee',
            element:<AddCoffey></AddCoffey>
        },
        {
            path:'/updatedCoffee/:id',
            element:<UpdatedCoffee></UpdatedCoffee>,
            loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
        },
        {
            path:'/coffee/:id',
            element:<CoffeeDetails></CoffeeDetails>,
            loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
        },
        {
            path:'/coffee/signIn',
            element:<SignIn></SignIn>,
        },
        {
            path:'/users',
            element:<Users></Users>,
            loader: ()=> fetch('http://localhost:5000/users')
        },
        {
            path:'/coffee/logIn',
            element:<LogIn></LogIn>,
        }
      ]
    },
  ]);

export default router;