import React from 'react';
import Nav from '../../Nav/Nav';
import Banner from './Banner/Banner';
import Fundraisers from './Fundraisers/Fundraisers';
import Why from './WhyUIUFF/Why';
import HelplessFunding from './HelplessFunding/HelplessFunding';
import SuccessStories from './SuccessStories/SuccessStories';
import MeetTeam from '../../Components/MeetTeam/MeetTeam';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <h1 className='text-5xl font-bold text-center mt-60 mb-5  text-[#1C1C1C]'>Making a World of Difference Together?</h1>
           <p className='text-[#777] text-center font-light mb-24'>At its best, philanthropy saves and empowers millions of lives. As shown in the recent report by Longview</p>
           <HelplessFunding></HelplessFunding>
           <h1 className='text-5xl font-bold text-center mt-36 mb-5 text-[#1C1C1C]'>Fundraisers</h1>
           <p className='text-[#777] text-center font-light'>View the fundraisers that are most active right now</p>
          <Fundraisers></Fundraisers>
          <h1 className='text-5xl font-bold text-center mt-36 mb-5 text-[#1C1C1C]'>Why UIU Friends Fund?</h1>
         <Why></Why>
         <h1 className='text-5xl font-bold text-center mt-36 mb-5 text-[#1C1C1C]'>Success Stories</h1>
         <SuccessStories></SuccessStories>
         <MeetTeam></MeetTeam>
         
        </div>
    );
};

export default Home;