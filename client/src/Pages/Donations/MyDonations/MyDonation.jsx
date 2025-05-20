import React from 'react';

const MyDonation = ({myDonation}) => {
    const {name, img, email, amount, interest, duration} = myDonation;
    return (
        <div className="max-w-4xl mx-auto px-5 bg-orange-600 text-white">
  <table className="table">
    {/* head */}
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
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              
            </div>
          </div>
        </td>
        <td>
          {email}
        </td>
        <td>{amount}$</td>
        <td>{interest}</td>
        <td>{duration} Month</td>
        
      </tr>
    </tbody>
    {/* foot */}
    <tfoot>
      
    </tfoot>
    
  </table>
</div>
    );
};

export default MyDonation;