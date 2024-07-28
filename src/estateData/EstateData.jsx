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
            <div className="text-2xl text-center m-6">
            <h1>residential building</h1>
            <p>you can buy and rent any house which you like or choose</p>
            </div>
            <div className="md:grid grid-cols-3 gap-4">
            {
                showData.map(showDatum=><ShowEstateDate key={showDatum.id} showDatum={showDatum}></ShowEstateDate>)
            }
            </div>
            
        </div>
    );
};

export default EstateData;