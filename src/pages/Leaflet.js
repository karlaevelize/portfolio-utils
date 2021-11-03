import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Title } from "../styled/Title.style" 
//just some mock data, but remember you'll always need latitude and longitude
import { amsterdamMuseums } from '../data/data'

//Step 1. https://leafletjs.com/examples/quick-start/
//Step 2. https://react-leaflet.js.org/docs/start-setup/

export default function Leaflet(){

  return(
    <>
      <Title>What about displaying your cool stuff in a map?</Title>
       {/* to see your map, you need to add height property */}
       {/* center is where the map will get started */}
      <MapContainer style={{border: "2px solid", borderRadius: "10px", height: "50vw", width: "60vw", maxWidth: "1000px", maxHeight: "800px", margin: "0px 18%"}} center={[52.36994, 4.90600]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {amsterdamMuseums.map(museum => (
          // the marker is every pointer you see on the map
          <Marker key={museum.name} position={[museum.latitude, museum.longitude]}>
            {/* when we click on the marker, we see the popup */}
            <Popup>
              <img alt={museum.name} style={{width: "100px", borderRadius: "0.5em"}} src={museum.imageUrl}/>
              <p>{museum.name}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  )
}