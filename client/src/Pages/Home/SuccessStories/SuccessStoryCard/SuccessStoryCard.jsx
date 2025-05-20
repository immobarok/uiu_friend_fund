

const SuccessStoryCard = ({story}) => {
    const {name, img, institute, successStory } = story;
    return (

<div className='w-full px-24 mb-48'>
            <div className='flex-start'>
           <div className='w-full flex  items-center justify-center gap-7 my-36'>
            <img className='w-[300px] h-[300px] rounded' src={img} alt="" />
             <div className='flex flex-col space-y-7 w-[60%]'>
             <h1 className='text-left font-bold text-6xl text-orange-500 opacity-90'>{name}</h1>
                 <p className="font-light w-48 text-left text-orange-600">{institute}</p>
                 <p className='font-light text-left text-sm'>{successStory} <a className="font-bold text-orange-400">Read More</a> </p>
              
            </div>
        </div>
       </div>
</div>


    
    );
};

export default SuccessStoryCard;