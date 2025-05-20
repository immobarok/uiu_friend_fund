import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FundraisersCard from '../Home/Fundraisers/FundraisersCard/FundraisersCard';
import Carousel from '../../Components/Carousel/Carousel';


const AllFundraisers = () => {
    const fundraisers = useLoaderData();
    return (
        
        <div>
            <Carousel></Carousel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-5 my-24">
            {
                fundraisers.map((fundraiser, idx) => <FundraisersCard
                key={idx}
                fundraiser={fundraiser}
                
                ></FundraisersCard>)
            }
           
            
        </div>
        </div>
    );
};

export default AllFundraisers;