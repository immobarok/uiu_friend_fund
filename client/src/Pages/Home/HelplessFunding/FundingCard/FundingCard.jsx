import { Link } from "react-router-dom";


const FundingCard = ({funding}) => {
    const {_id, img, category, title, short_description} = funding;
    return (
        <div>
            
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
    <a href="#">
        <img className="rounded-t-lg h-72 w-full" src={img} alt="" />
    </a>
    <div className="p-5">
    <h5 className="mb-2 text-orange-500 text-center font-extrabold text-md border rounded  py-4 px-3  tracking-tight dark:text-white">{category}</h5>
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold my-5 tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3  text-gray-700 dark:text-gray-400 font-light">{short_description}</p>
        <div className="flex justify-center items-center mt-7">
                <Link to={`/confirmForm/${_id}`}><button className="btn bg-orange-500 w-full rounded hover:bg-orange-400 text-white font-light">Donate</button></Link>
            </div>
    </div>
</div>

        </div>
    );
};

export default FundingCard;