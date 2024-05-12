/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import errorImg from '/404.avif'

const ErrorPage = () => {
  return (
    <div className="w-full mt-24 lg:mt-0  flex flex-col items-center justify-center">
      <img src={errorImg} alt="" className='md:h-[450px] lg:h-[550px]'/>
      <p className='text-5xl text-red-400 font-rubik font-extrabold'>Oops!!!!! </p>
      <p className='text-2xl mt-2 font-medium text-red-400'>Page not found. </p>
      <p className='text-xl font-rubik font-medium mt-2 text-gray-500'>Please go to <Link to='/' className='text-blue-900 underline'>Home</Link> </p>
    </div>
  );
};

export default ErrorPage;