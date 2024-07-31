import { Link } from "react-router-dom";
import LogIn from "../LogIn/LogIn";


const ShowEstateDate = ({showDatum}) => {
    const {image_url,estate_title,segment_name,id}=showDatum ;
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl ">
      <figure >
        <img
            className="w-full h-48 object-cover"
          src={image_url}
          alt="Shoes"/>
      </figure>
      <div className="card-body">
    <div className="w-full h-16 object-cover">
    <h2 className="card-title ">{estate_title}</h2>
    <p>{segment_name}</p>
    </div>
    
    <div className="card-actions justify-end ">
      <Link to={`/details/${id}`}>
      <button className="btn btn-primary">view details</button> 
      </Link>
      
    </div>
      </div>
 </div>
 
        </div>
       
    );
};

export default ShowEstateDate;
