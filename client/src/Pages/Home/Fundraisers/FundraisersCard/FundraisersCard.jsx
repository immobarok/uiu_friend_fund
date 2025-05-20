import { Link } from 'react-router-dom';

const FundraisersCard = ({ fundraiser }) => {

    const { _id, img, name, student_id, amount, purpose, department , verified} = fundraiser;

    console.log(_id);
    return (
        <div className="card w-96 bg-base-100 shadow-xl space-y-2 relative h-full">
            <figure><img src={img} alt="user_img" /></figure>
            <div className="card-body h-full">
                
                <div className="card-actions items-center gap-5 mb-2">
                    <img className="w-12 h-12 rounded-full border shadow-xl" src={img} alt="" />
                   
                   <h1 className=" font-light border rounded py-1 px-3 ">{name}</h1> 
                    
                </div>
                <div>
                <h2 className="font-extrabold text-lg border rounded  py-4 px-3 text-center mb-5">
                <span className="text-orange-600 py-4">Donate for: </span>{purpose}

                </h2>
                <h2 className="font-extrabold text-lg border rounded  py-4 px-3 text-center mb-5">
                <span className="text-orange-600 py-4">Amount: </span>{amount}$

                </h2>
                {/* <p className="font-semibold"><span className="text-orange-600">Student Id:</span> {student_id}</p>
                <p className="font-semibold"><span className="text-orange-600">Department:</span> {department}</p> */}
                </div>
                <div className="flex justify-center items-center mt-7">
                <Link to={`/viewDetails/${_id}`}><button className="btn btn-warning w-full rounded font-light hover:bg-orange-600 text-white">View Details</button></Link>
            </div>
            
            </div>
            
        </div>
    );
};

export default FundraisersCard;