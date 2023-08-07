import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const icon = L.icon({
	iconUrl: "/mapImages/marker-icon.png",
	iconSize: [25, 41],
	iconAnchor: [12, 41],
});

const Map = () => {
	return (
		<MapContainer
			center={[52.22, 20.916]}
			style={{ height: "100vh" }}
			zoom={13}>
			<TileLayer
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			/>
			<Marker position={[52.233, 20.916]} icon={icon}>
				<Popup style={{ backgroundColor: "#000" }}>
					<div>
						<p className='font-bold text-center text-lg'>We are here!</p>
						<p className='text-center'>Angel St. 45</p>
						<p className='font-bold bg-orange-400 p-2 text-white text-center'>
							Join us!
						</p>
					</div>
				</Popup>
			</Marker>
		</MapContainer>
	);
};

export default Map;
