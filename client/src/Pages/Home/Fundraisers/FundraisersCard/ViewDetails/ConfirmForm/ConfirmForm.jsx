import React, { useContext } from 'react';
import img from '../../../../../../assets/donate.jpg'
import { AuthContext } from '../../../../../../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const ConfirmForm = () => {
    const {user} = useContext(AuthContext);
    const userData = useLoaderData();
    const handleSubmit =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = user.email;
        const amount = form.amount.value;
        const interest = form.interest.value;
        const duration = form.duration.value;

        const name = userData.name; //donation seeker name
        const img = userData.img; //donation seeker img

        const consfiramtionDetails = {name, img, email, amount, interest, duration}
        console.log(consfiramtionDetails);
        axios.post('http://localhost:5500/confirmDonations', consfiramtionDetails)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Donated successfully',
                    showConfirmButton: false,
                    timer: 2000
                  })
                
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }
    
  return (
    <div>
        
      <div className="hero min-h-screen bg-white">
       
        <div className="hero-content flex-col lg:flex-row max-w-4xl mx-auto gap-10">
          <div className="text-center lg:text-left">
            <img className='w-full' src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" defaultValue={user.email} placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Amount</span>
                </label>
                <input type='number' placeholder="Amount" defaultValue={userData.amount} name='amount' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Interest Rate</span>
                </label>
                <select name='interest' className="select select-bordered">
                  <option value="5%">5%</option>
                  <option value="10%">10%</option>
                  <option value="15%">15%</option>
                 
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Loan Duration (Months)</span>
                </label>
                <select name='duration' className="select select-bordered">
                  <option value="6">6 months</option>
                  <option value="12">12 months</option>
                  <option value="24">24 months</option>
                  {/* Add more duration options as needed */}
                </select>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning font-light">Confirm Donation</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmForm;
