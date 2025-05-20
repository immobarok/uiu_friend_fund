import axios from 'axios';
import img from '../../assets/apply.jpg'
import Swal from 'sweetalert2';

const ApplyNow = () => {
    const handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const img = form.url.value;
        const name = form.name.value;
        const student_id = form.id.value;
        const amount = form.amount.value;
        const purpose = form.loanFor.value;
        const department = form.dept.value;
        const short_description = form.shortDescription.value;
        
       
       
        const data = {img, name, student_id, amount, purpose, department, short_description};
       axios.post('http://localhost:5500/fundraisers', data)
       .then(res=>{
        if(res.data.insertedId){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Donation Request Added',
                showConfirmButton: false,
                timer: 2000
              })
        }
        form.reset();
       })
       .catch(error=>{
        console.log(error);
       })

        
    }

    return (
        <div className="hero min-h-screen bg-white pb-36 pt-12 px-12">
  <div className="hero-content flex-row">
    <div className="text-center lg:text-left">
      <img className='w-[80%]' src={img} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-light">Name</span>
          </label>
          <input type="name" placeholder="name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-light">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-light">Student Id</span>
          </label>
          <input type="text" placeholder="id" name="id" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-light">Department</span>
          </label>
          <input type="text" placeholder="department" name="dept" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-light">Loan For</span>
          </label>
          <input type="text" placeholder="Loan For" name="loanFor" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-light">Amount</span>
          </label>
          <input type="text" placeholder="amount" name="amount" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-light">PhotoURL</span>
          </label>
          <input type="text" placeholder="URL" name="url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-light">Short Description</span>
          </label>
          <input type="text" placeholder="Short Description" name="shortDescription" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-warning font-light">Apply Now</button>
        </div>
      </form>
    </div>
  </div>
</div>
            

       
    );
};

export default ApplyNow;