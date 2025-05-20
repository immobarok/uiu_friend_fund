import { useEffect, useState } from "react";
import FundingCard from "./FundingCard/FundingCard";

const HelplessFunding = () => {
    const [fundings, setFundings] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5500/naturalFundraisers')
        .then(res => res.json())
        .then(data => setFundings(data))
    },[])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ml-5 p-10">
            {
                fundings?.map((funding, idx)=><FundingCard
                
                key={idx}
                funding ={funding}
                
                ></FundingCard>)
                              
            }
           
        </div>
    );
};

export default HelplessFunding;