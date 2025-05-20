import { useEffect, useState } from "react";
import FundraisersCard from "./FundraisersCard/FundraisersCard";
import { Link } from "react-router-dom";

const Fundraisers = () => {
    const [fundraisers, setFundraisers] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5500/fundraisers')
        .then(res => res.json())
        .then(data => setFundraisers(data))

    },[])


   
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-5 my-24">
            {
                fundraisers.slice(0,6).map((fundraiser, idx) => <FundraisersCard
                key={idx}
                fundraiser={fundraiser}
                
                ></FundraisersCard>)
            }
           
            
        </div>
        <div className="w-full flex justify-center items-center text-center">
            <Link to={'/fundraisers'}><button  className="btn btn-warning text-white font-light px-5">Show All</button></Link>
            </div>
        </div>
    );
};

export default Fundraisers;