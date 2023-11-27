import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import {
  MapContainer,
  TileLayer,
  LayerGroup,
  LayersControl,
} from "react-leaflet";
import {
  // initialLatitude,
  // initialLongitude,
  initialZoom,
  dataPoints,
  convertEastingNorthingToLatLong,
} from "../utility";
import "./styles.scss";
import MarkerWrapper from "./MarkerWrapper";

const Map = () => {
  const convertedCoordinates = convertEastingNorthingToLatLong(
    dataPoints[0].easting,
    dataPoints[0].northing
  );

  return (
    <>
      {convertedCoordinates ? (
        <MapContainer
          // center={[initialLatitude, initialLongitude]}
          center={[
            convertedCoordinates.latitude,
            convertedCoordinates.longitude,
          ]}
          zoom={initialZoom}
          className="map-container"
        >
          <LayersControl>
            <LayersControl.BaseLayer checked name="Street View - Google Map">
              <TileLayer
                attribution="Google Maps"
                url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
              />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer name="Earth View - Google Map Satellite">
              <LayerGroup>
                <TileLayer
                  attribution="Google Maps Satellite"
                  url="https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
                />
                <TileLayer url="https://www.google.cn/maps/vt?lyrs=y@189&gl=cn&x={x}&y={y}&z={z}" />
              </LayerGroup>
            </LayersControl.BaseLayer>
          </LayersControl>
          <MarkerWrapper />
        </MapContainer>
      ) : null}
    </>
  );
};

export default Map;
