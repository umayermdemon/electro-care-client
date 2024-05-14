import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Spinner } from "@material-tailwind/react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'

const PrivateRoute = ({children}) => {

  const {user,loader}=useContext(AuthContext);
  const location=useLocation()

  if(loader){
    return <Spinner/>
  }

  if(user){
    return children
  }

  return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateRoute.propTypes={
  children:PropTypes.node
}
export default PrivateRoute;