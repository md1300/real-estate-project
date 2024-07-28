import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../Share/Footer";
import Navber from "../Share/Navber";


const Details = () => {
    const showDetails=useLoaderData([])
    const {id}=useParams()
    const loadDetail=showDetails.find(detail=>detail.id===id)
    const {estate_title,description,segment_name,price,status,area,location,facilities,year_built,parking_spaces,nearby_schools,image_url}=loadDetail;
    
    return (
        <div>
            <Navber></Navber>
            <div className="p-4 grid grid-cols-3 gap-3">
                <div className="col-span-2">
                    <img className="w-full "  src={image_url} alt="photo of house"  />
                </div>
                <div className="col-span-1">
                    <h1 className="text-2xl">{estate_title} </h1>
                    <h2 className="text-xl">segment: {segment_name} </h2>
                    <p>{description}</p>
                    <h3><span className="text-xl">facilities : </span>{
                        facilities.map((facility,index)=><li  key={index}>{facility} </li>)
                        }</h3>
                    <div className="flex justify-between gap-3">
                        <p><span className="text-xl">location</span> : {location}</p>
                        <p><span className="text-xl">area</span> : {area} </p>
                        </div> 
                    <div  className="flex justify-between gap-3"> 
                          <p><span className="text-xl">year_built : </span>{year_built} </p>
                          <p><span className="text-xl">parking_spaces : </span>{parking_spaces} car</p>
                        </div>
                    <p><span className="text-xl">nearby_schools : </span>{nearby_schools} </p>
                    <div className="flex flex-row-reverse justify-between">
                        <p><span className="text-xl">price : </span>{price} </p>
                        <p><span className="text-xl">status : </span>{status} </p>
                        </div> 
                    <div className="text-center mt-5">
                      <button className="btn btn-primary">Order Now</button> 
                    </div>
                           
                </div>
               
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Details;