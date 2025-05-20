import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SuccessStoryCard from './SuccessStoryCard/SuccessStoryCard';
import { useEffect, useState } from 'react';


const SuccessStories = () => {
    const [stories, setStories] = useState([]);


    useEffect(()=>{
        fetch('/successStories.json')
        .then(res => res.json())
        .then(data => setStories(data))
    },[])

    return (
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       
        {stories.map(story=> <SwiperSlide><SuccessStoryCard story={story}></SuccessStoryCard></SwiperSlide>)}
            
        
    
      </Swiper>
    //     <div className='w-full p-10 mb-48'>
    //         <div className='flex-start'>
    //         <div className='w-[70%] flex  items-center justify-center gap-7 my-36'>
    //         <img className='w-[500px] h-[500px] rounded' src={img1} alt="" />
    //         <div className='flex flex-col space-y-5'>
    //            <h1 className='text-left font-bold text-5xl text-orange-500 opacity-90'>You are the reason Jordan get’s to live his dream</h1>
    //            <p className='font-light text-left text-sm'>“Thank you for supporting our son's treatment. We will always be indebted to you for your kindness. After 2.5 years of chemo therapy, our son's cancer had returned, and we knew we couldn't afford his life-saving treatment. Thanks to your donation and prayers...</p>
    //            <button className='btn btn-warning font-light text-right '>Read More</button>
    //        </div>
    //     </div>
    //         </div>
    //     <div className='ml-[25%]'>
    //     <div className='w-[100%] flex flex-en  items-center justify-end gap-10'>
           
    //        <div className='flex flex-col space-y-5'>
    //            <h1 className='text-right font-bold text-5xl text-orange-500 opacity-90'>You are the reason Jordan get’s to live his dream</h1>
    //            <p className='font-light text-right text-sm'>“Thank you for supporting our son's treatment. We will always be indebted to you for your kindness. After 2.5 years of chemo therapy, our son's cancer had returned, and we knew we couldn't afford his life-saving treatment. Thanks to your donation and prayers...</p>
    //            <button className='btn btn-warning font-light text-right '>Read More</button>
    //        </div>
    //        <img className='w-[490px] h-[500px] rounded' src={img2} alt="" />
    //    </div>
    //     </div>
    //     </div>
    );
};

export default SuccessStories;