import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyDonation from './MyDonations/MyDonation';

// ... (your imports)

const Donations = () => {
    const [myDonations, setMyDonations] = useState([]);
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;

    useEffect(() => {
        fetch(`http://localhost:5500/confirmDonations/${userEmail}`,{credentials:'include'})
            .then(res => res.json())
            .then(data => setMyDonations(data))
    }, []);

    return (
        <div className="max-w-4xl mx-auto overflow-x-auto my-24 px-5 shadow-2xl border-8 border-b-orange-500">
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Donate to</th>
                        <th>Doner Email</th>
                        <th>Donated Amount</th>
                        <th>Interest</th>
                        <th>Loan repay duration</th>
                    </tr>
                </thead>
                <tbody>
                    {myDonations.map((donation, idx) => (
                        <tr key={idx}>
                            <td>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            {/* Replace 'img' with the actual image source */}
                                            <img src={donation.img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{donation.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{donation.email}</td>
                            <td>{donation.amount}$</td>
                            <td>{donation.interest}</td>
                            <td>{donation.duration} Month</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Donations;
