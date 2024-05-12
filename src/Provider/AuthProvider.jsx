import { createContext, useState } from "react";
import PropTypes from 'prop-types'

export const AuthContext=createContext()
const AuthProvider = ({children}) => {

  const [user,setUser]=useState(null)

  const AuthInfo={
    user
  }
  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider >
  );
};

AuthProvider.propTypes={
  children:PropTypes.node
}

export default AuthProvider;