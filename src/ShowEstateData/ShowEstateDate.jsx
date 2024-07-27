

const ShowEstateDate = ({showDatum}) => {
    const {image_url,estate_title,segment_name}=showDatum ;
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img     
      src={image_url}
      alt="Shoes"/>
  </figure>
  <div className="card-body">
    <div>
    <h2 className="card-title ">{estate_title}</h2>
    <p>{segment_name}</p>
    </div>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary">view details</button>
    </div>
  </div>
             </div>
        </div>
       
    );
};

export default ShowEstateDate;