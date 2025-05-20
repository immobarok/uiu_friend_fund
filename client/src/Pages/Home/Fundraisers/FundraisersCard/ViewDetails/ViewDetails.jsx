import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const fundraiser = useLoaderData();
    const {_id, student_id,name, img, short_description, amount, department, purpose} = fundraiser;
    console.log(_id);
    
    return (
        <div className='max-w-4xl  mx-auto  gap-10 items-center mb-24 mt-12 shadow-2xl p-10 border-8 border-b-orange-300 border-l-orange-300'>
            <img className='w-full h-full mb-5 rounded ' src={img} alt="" />
            <div className='space-y-3'>
                
                <h2 className="text-md  text-2xl">
                <span className="text-orange-600  py-4">Name: </span>{name}

                </h2>
                <h2 className="text-md text-2xl">
                <span className="text-orange-600  py-4">Id: </span>{student_id}

                </h2>
                <h2 className="text-md  text-2xl">
                <span className="text-orange-600  py-4">Department: </span>{department}

                </h2>
                <h2 className="text-md  mb-5 text-2xl">
                <span className="text-orange-600  py-4">Donate For: </span>{purpose}

                </h2>
                <h2 className="text-md  mb-5 text-2xl">
                <span className="text-orange-600  py-4">Amount: </span>{amount}$

                </h2>
                <p className='font-light mb-5'>{short_description}</p>
                
            </div>
            <br />
            <Link to={`/confirmForm/${_id}`}><button className="btn btn-warning w-full rounded font-light hover:bg-orange-600 text-white">Donate</button></Link>
        </div>
    );
};

export default ViewDetails;