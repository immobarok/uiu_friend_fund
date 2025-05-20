import banner from '../../../assets/banner.jpg'
import { BiSolidDonateHeart } from 'react-icons/bi';
import headerBg from '../../../assets/headerBg.jpg'

const Banner = () => {
    return (
        <div>
            <img className='opacity-30 relative' src={headerBg} alt="" />
            <div className='max-w-4xl mx-auto absolute top-[25%] left-[20%]'>
                <h1 className='font-light text-8xl opacity-80  text-orange-500'>Building your kindness Through
                    Social Giving</h1>
                <div className="relative w-[90%]">
                    <input type="search" className="block mt-12 h-14 p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-full border-orange-500 border " placeholder="Search by category" required />
                    <button type="submit" className="absolute top-0 right-0 h-full p-2.5 text-sm font-medium text-white bg-orange-500 rounded-r-full border border-orange-500 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-500 dark:bg-orange-500 dark:hover:bg-orange-500 dark:focus:ring-orange-500">
                        <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
            <div className='max-w-3xl mx-auto shadow-2xl p-5 flex items-center gap-5 absolute -bottom-[17%] left-[20%] bg-white rounded'>
                <button className='text-sm px-4 w-36 text-white py-2 rounded bg-orange-400 font-light'>Donate Now</button>
                <h2 className='text-orange-400 font-light'>Your today’s donation can save thousands of helpless life, Just one step ahead for donation!</h2>
                <BiSolidDonateHeart className='text-8xl text-orange-400'></BiSolidDonateHeart>
            </div>
        </div>
    );
};

export default Banner;