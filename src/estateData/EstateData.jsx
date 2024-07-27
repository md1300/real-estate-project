import { useEffect, useState } from "react";
import ShowEstateDate from "../ShowEstateData/ShowEstateDate";



const EstateData = () => {
    const [showData,setShowData]=useState([])
    useEffect(()=>{
   fetch('estateData.json')
   .then(res=>res.json())
   .then(data=>setShowData(data))
    },[])

    
    return (
        <div>
            <h1>this is estate properties {showData.length} </h1>
            <div className="md:grid grid-cols-3 gap-4">
            {
                showData.map(showDatum=><ShowEstateDate key={showDatum.id} showDatum={showDatum}></ShowEstateDate>)
            }
            </div>
            
        </div>
    );
};

export default EstateData;