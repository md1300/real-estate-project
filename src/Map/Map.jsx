

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";


const Map = () => {
  

  const position = [ 25.744860, 89.275589]

  return( 
    <div>
    <MapContainer center={position} 
    zoom={13}
    style={{ height: "50vh", width: "50%" }}
     scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          use this map <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>,
    </div>
  )
     
  
   
}
  
 

   



export default Map;