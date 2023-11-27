import { lazy, Suspense } from "react";
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
// import { Markers } from "../components/";

const Markers = lazy(() => import("./Markers"));

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
          style={{ height: "100vh", width: "100%" }}
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
          <Suspense fallback={<div>Loading...</div>}>
            <Markers />
          </Suspense>
        </MapContainer>
      ) : null}
    </>
  );
};

export default Map;
