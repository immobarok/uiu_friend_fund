import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Register = () => {

  const { emailSignIn, user } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    //password validatiion
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;


    if (password.length < 6) {
      return toast.error('Password should be minimum 6 characters')
    }

    else if (!passwordRegex.test(password)) {
      return toast.error('Password should contain one upperCase letter, number and a special character');
    }

    emailSignIn(email, password)
      .then(result => {
        console.log(result.user);
        toast.success('User created successfully, Go to Login!');
        form.reset();
        updateProfile(result.user,{
          displayName: name,
          photoURL: photoURL
        })
      })
      .catch(error => {
        console.log(error.message);
        toast.error('Something Wrong try again')
      })

  }


  return (
    <div className="bg-base-100 py-12">
      <h1 className="text-5xl text-center font-extrabold mb-12 ">Register</h1>
      <div className="max-w-md mx-auto bg-base-100 shadow-2xl p-10 rounded custom-gradient " >

        <form onSubmit={handleRegister}>
          <div className="mb-6">
            <label className="block mb-2 font-light text-sm  text-gray-900 dark:text-white">Your Name</label>
            <input type="text" name="name" className="shadow-sm rounded bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light" placeholder="name" required />

          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-light text-gray-900 dark:text-white">Photo URL</label>
            <input type="text" name="photoURL" className="shadow-sm rounded  bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light" placeholder="URL" required />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-light text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" className="shadow-sm rounded bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light" placeholder="email" required />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-light text-gray-900 dark:text-white">Your password</label>
            <input type="password" name="password" className="shadow-sm rounded bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light" placeholder="password" required />
          </div>

          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input id="terms" type="checkbox" value="" className="w-4 h-4 border rounded border-gray-300  bg-gray-50 focus:ring-3 focus:ring-orange-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-orange-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
            </div>
            <label className="ml-2 text-sm font-light text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-orange-500 hover:underline dark:text-orange-500">terms and conditions</a></label>
          </div>

          <div className="text-center mt-10">
            <button type="submit" className=" text-white rounded bg-orange-400 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-light  text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Register new account</button>
          </div>
          <h1 className="text-center font-light mt-5 text-sm">Already have an acoount? <Link className="underline text-orange-500" to={'/login'} >LogIn</Link></h1>
        </form>


      </div>
    </div>
  );
};

export default Register;