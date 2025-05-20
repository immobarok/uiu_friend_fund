import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';



const SocialLogIn = () => {
    const {googleSignIn} = useContext(AuthContext);

    const handleGooleSignIn= ()=>{
        return googleSignIn();
    }
    return (
        <div>
            <div className=" dark:bg-gray-900 custom-gradient ">
    
    <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
        <button onClick={handleGooleSignIn}  className='text-6xl '>
             
                <FcGoogle></FcGoogle>

              <span className="sr-only">Google page</span>
          </button>
          <button className='text-5xl '>
              <BsFacebook></BsFacebook>
              <span className="sr-only">Facebook community</span>
          </button>
        
          <button className='text-5xl '>
              <BsGithub></BsGithub>
              <span className="sr-only">GitHub account</span>
          </button>
          
    </div>
</div>
            
        </div>
    );
};

export default SocialLogIn;