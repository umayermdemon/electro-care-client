/* eslint-disable react/no-unescaped-entities */
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "/login.png";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

  const {signInUser,signInWithGoogle}=useContext(AuthContext)
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

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
        toast.success("Login successful!",{
          position: "top-left"
        })
      })
      .catch((error) => {
        console.error(error);
        toast.error("Please provide valid email & password");
      });
  };
  return (
    <div>
      <Card className="container mx-auto pl-44 md:pl-36 lg:pl-36 min-h-[calc(100vh-310px)] items-center justify-center shadow-none gap-48  flex-row">
        <div>
          <div className="space-y-4 mt-4">
            <Typography className="text-xl text-center md:text-2xl lg:text-3xl font-rubik font-bold text-[#30416D]">
              Login
            </Typography>
          </div>

          <form
            onSubmit={handleLogin}
            className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
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
            </div>

            <Button
              size="lg"
              type="submit"
              className="mt-4  text-white rounded-lg  bg-gradient-to-r from-indigo-500 flex mx-auto"
            >
              Login
            </Button>
            
          </form>
          <p className="my-6 text-black text-center">Or Login With Email</p>
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
             Are you new?{" "}
              <Link to="/register">
                <span className="font-medium text-red-900 underline">Create an account</span>
              </Link>
            </Typography>
          </div>
        </div>
        <div>
          <img
            src={loginImg}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </div>
      </Card>
    </div>
  );
};

export default Login;
