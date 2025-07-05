import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Services from "../Pages/Services/Services";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AddService from "../Pages/AddService/AddService";
import ManageService from "../Pages/ManageServices/ManageServices";
import BookedServices from "../Pages/BookedServices/BookedServices";
import ServiceToDo from "../Pages/ServiceToDos/ServiceToDos";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import BookedForm from "../Pages/BookedForm/BookedForm";
import UpdateForm from "../Pages/UpdateForm/UpdateForm";

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/services',
        element:<Services/>,
        loader: ()=>fetch('https://electro-care-server.vercel.app/services')
      },
      {
        path:'/addService',
        element:<PrivateRoute><AddService/></PrivateRoute>
      },
      {
        path:'/manageServices',
        element:<PrivateRoute><ManageService/></PrivateRoute>
      },
      {
        path:'/bookedServices',
        element:<PrivateRoute><BookedServices/></PrivateRoute>
      },
      {
        path:'/serviceToDo',
        element:<PrivateRoute><ServiceToDo/></PrivateRoute>
      },
      {
        path:'/viewDetails/:id',
        element:<PrivateRoute><ViewDetails/></PrivateRoute>,
        loader:({params})=>fetch(`https://electro-care-server.vercel.app/services/${params.id}`)
      },
      {
        path:'/bookedForms/:id',
        element:<PrivateRoute><BookedForm/></PrivateRoute>,
        loader:({params})=>fetch(`https://electro-care-server.vercel.app/services/${params.id}`)
      },
      {
        path:'/updateForm/:id',
        element:<PrivateRoute><UpdateForm/></PrivateRoute>,
        loader:({params})=>fetch(`https://electro-care-server.vercel.app/services/${params.id}`)
      },
    ]
  }
])

export default router