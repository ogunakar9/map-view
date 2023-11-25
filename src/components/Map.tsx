import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayerGroup,
  LayersControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  initialLatitude,
  initialLongitude,
  initialZoom,
  dataPoints,
} from "../utility";

const Map = (props: any) => {
  // const { dataPoints, selectedPoint, onSelectPoint } = props;

  return (
    <MapContainer
      center={[initialLatitude, initialLongitude]}
      zoom={initialZoom}
      style={{ height: "100vh", width: "100%" }}
    >
      <LayersControl>
        <LayersControl.BaseLayer checked name="Google Map">
          <TileLayer
            attribution="Google Maps"
            url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
          />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Google Map Satellite">
          <LayerGroup>
            <TileLayer
              attribution="Google Maps Satellite"
              url="https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
            />
            <TileLayer url="https://www.google.cn/maps/vt?lyrs=y@189&gl=cn&x={x}&y={y}&z={z}" />
          </LayerGroup>
        </LayersControl.BaseLayer>
      </LayersControl>
      {/* {dataPoints.map((point) => (
        <Marker
          key={point.id}
          position={[point.latitude, point.longitude]}
          onClick={() => onSelectPoint(point.id)}
        >
          <Popup>{point.name}</Popup>
        </Marker>
      ))} */}
    </MapContainer>
  );
};

export default Map;
