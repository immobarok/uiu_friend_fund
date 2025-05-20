import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogIn from './SocialLogin/SocialLogin';
import './style.css'
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import axios from 'axios';


const Login = () => {

    const {login} = useContext(AuthContext);
    const location = useLocation();
    const  navigate = useNavigate();
    
    const handleLogin = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
        .then(result=>{
            console.log(result);
            //const user = {email};
            toast.success('Logged In SuccessFully');
            navigate(location?.state? location?.state : '/');

            // axios.post('http://localhost:5500/jwt', user, {withCredentials: true})
            // .then(res=>{
            //     console.log(res.data);
            //     if(res.data.status){
            //         navigate(location?.state? location?.state : '/');
            //     }

            // })
            form.reset();
            
        })
        .catch(error=>{
            console.log(error.message);
            toast.error('Something went wrong, try again!!')
        })
        
    }
    return (
        <div className="bg-base-100 pb-24 pt-12">
            <h1 className='text-5xl font-extrabold text-center '>Login</h1>

            <div className="max-w-md mx-auto my-12 bg-base-100 shadow-2xl p-10 rounded custom-gradient ">

                <form onSubmit={handleLogin}>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-light text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" className="shadow-sm rounded bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="email" required />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-light text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" className="shadow-sm bg-gray-50 border rounded border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="password" required />
                        {/* {
                            error ? <p className="p-2 text-red-800">{error}</p> : ''
                        } */}
                    </div>



                    <div className="flex items-start mb-6">

                        <label className="ml-2 text-sm font-light text-gray-900 dark:text-gray-300"><a href="#" className="underline text-orange-600 hover:underline dark:text-blue-500">Forgot Password?</a></label>
                    </div>

                    <div className="text-center mt-12">
                        <button type="submit" className=" w-full text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-blue-800">LogIn</button>
                    </div>
                    <h1 className="text-center mt-5 text-sm font-light mb-5">New User? <Link className="underline text-orange-500" to={'/register'}>Register here</Link></h1>

                    <div>
                        <h1 className="mb-5 orStyle font-light">or</h1>
                        <SocialLogIn></SocialLogIn>
                    </div>

                </form>

            </div>

        </div>
    );
};

export default Login;