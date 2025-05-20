import like from '../../../assets/subway_like.png'
import dashboard from '../../../assets/monitor-mobbile.png'
import money from '../../../assets/money-send.png'
import card from '../../../assets/convert-card.png'
import layer from '../../../assets/layer.png'
import star from '../../../assets/star.png'
import support from '../../../assets/24-support.png'
import wallet from '../../../assets/empty-wallet-add.png'


const Why = () => {
    return (
        <div className='grid grid-cols-3 lg:grid-cols-4 gap-5 ml-20 my-24'>
            <div className='w-48 text-center flex flex-col items-center '>
                <img className='w-14' src={like} alt="" />
               <div className='border-2 border-orange-400 w-full rounded-full my-4'></div>
                <h1 className='font-light'>University best fundraising
                    success rate</h1>
            </div>
            <div className='w-48 text-center flex flex-col items-center '>
                <img className='w-14' src={dashboard} alt="" />
               <div className='border-2 border-orange-400 w-full rounded-full my-4'></div>
                <h1 className='font-light'>A Dedicated Smart-Dashboard</h1>
            </div>
            <div className='w-48 text-center flex flex-col items-center '>
                <img className='w-14' src={money} alt="" />
               <div className='border-2 border-orange-400 w-full rounded-full my-4'></div>
                <h1 className='font-light'>Withdraw Funds Without Hassle</h1>
            </div>
            <div className='w-48 text-center flex flex-col items-center '>
                <img className='w-14' src={card} alt="" />
               <div className='border-2 border-orange-400 w-full rounded-full my-4'></div>
                <h1 className='font-light'>International Payment Support</h1>
            </div>
            <div className='w-48 text-center flex flex-col items-center '>
                <img className='w-14' src={layer} alt="" />
               <div className='border-2 border-orange-400 w-full rounded-full my-4'></div>
                <h1 className='font-light'>Easy-To-Manage Tools To Boost Results</h1>
            </div>
            <div className='w-48 text-center flex flex-col items-center '>
                <img className='w-14' src={star} alt="" />
               <div className='border-2 border-orange-400 w-full rounded-full my-4'></div>
                <h1 className='font-light'>Supported By 55,00+ Donors</h1>
            </div>
            <div className='w-48 text-center flex flex-col items-center '>
                <img className='w-14' src={support} alt="" />
               <div className='border-2 border-orange-400 w-full rounded-full my-4'></div>
                <h1 className='font-light'>Get Expert Support 24/7</h1>
            </div>
            <div className='w-48 text-center flex flex-col items-center '>
                <img className='w-14' src={wallet} alt="" />
               <div className='border-2 border-orange-400 w-full rounded-full my-4'></div>
                <h1 className='font-light'>Receive donations via all popular payment modes</h1>
            </div>
        </div>
    );
};

export default Why;