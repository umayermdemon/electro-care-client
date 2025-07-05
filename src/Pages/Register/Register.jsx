/* eslint-disable react/no-unescaped-entities */
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import registerImg from "/register.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";


const Register = () => {
  const {createUser,signInWithGoogle}=useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleLogin=()=>{
    signInWithGoogle()
    .then((result) => {
      console.log(result.user);
      navigate(location?.state ? location.state : "/");
      toast.success("Login successful!",{
        position: "top-left"
      })
    })
    .catch(error=>{
      console.error(error)
    })
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photoUrl = form.get("photoUrl");
    const password = form.get("password");
    console.log(name, email, password, photoUrl);

     if (password.length < 6) {
      toast.warn("Invalid password format")
      return;
    }
    else if (!/[A-Z]/.test(password)) {
      toast.warn("Invalid password format")
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.warn("Invalid password format")
      return;
    }

      
   
     
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Registration successful!");
        updateProfile(result.user,{
          displayName:name, photoURL:photoUrl
        })
        .then(
            navigate('/')
        )
        .catch(error=>{
          console.error(error)
        })
      })
      .catch((error) => {
        console.error(error);
        toast.error("You are already registered. Please Login")
      });

      
      
  };
  return (
    <div>
      <Helmet>
        <title>ElectroCare | Register</title>
      </Helmet>
      <Card className="container mx-auto pl-48 md:pl-36 lg:pl-36 min-h-[calc(100vh-310px)] items-center justify-center shadow-none gap-48  flex-row">
        <div>
          <div className="space-y-4 mt-4">
            <Typography className="text-xl text-center ml-2 md:ml-0 lg:mr-0 md:text-2xl lg:text-3xl font-rubik font-bold text-[#30416D]">
              Register
            </Typography>
          </div>

          <form
            onSubmit={handleRegister}
            className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              <Input
                size="lg"
                type="text"
                label="Name"
                variant="outlined"
                name="name"
              />
              <Input
                size="lg"
                type="email"
                label="Email"
                variant="outlined"
                name="email"
              />
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  size="lg"
                  label="password"
                  variant="outlined"
                  name="password"
                  required
                />
                <span
                  className="absolute right-2 top-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <Input
                size="lg"
                type="text"
                label="Photo Url"
                variant="outlined"
                name="photoUrl"
              />
            </div>

            <Button
              size="lg"
              type="submit"
              className="mt-4  text-white rounded-lg  bg-gradient-to-r from-indigo-500 flex mx-auto"
            >
              Register
            </Button>
            
          </form>
          <p className="my-6 text-black text-center">Or Register With Email</p>
          <div>
            <Button
              onClick={handleGoogleLogin}
              size="lg"
              variant="outlined"
              color="blue-gray"
              className="flex items-center justify-center text-black gap-3 w-full lg:w-96 "
            >
              <img
                src="https://docs.material-tailwind.com/icons/google.svg"
                alt="metamask"
                className="h-4 w-6 text-black"
              />
              Continue with Google
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link to="/login">
                <span className="font-medium text-red-900">Login</span>
              </Link>
            </Typography>
          </div>
        </div>
        <div>
          <img
            src={registerImg}
            alt="card-image"
            className="h-[500px] w-full object-cover"
          />
        </div>
      </Card>
    </div>
  );
};

export default Register;