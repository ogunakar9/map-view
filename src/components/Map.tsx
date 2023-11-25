import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayerGroup,
  LayersControl,
} from "react-leaflet";
import {
  initialLatitude,
  initialLongitude,
  initialZoom,
  dataPoints,
  convertEastingNorthingToLatLong,
} from "../utility";

const Map = (props: any) => {
  // const { dataPoints, selectedPoint, onSelectPoint } = props;

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

          {dataPoints.map((point) => {
            const convertedCoordinates = convertEastingNorthingToLatLong(
              point.easting,
              point.northing
            );

            if (convertedCoordinates) {
              const { latitude, longitude } = convertedCoordinates;

              return (
                <Marker key={point.id} position={[latitude, longitude]}>
                  <Popup>
                    Dept: {point.depth}m <br /> Layer Amount[-]:{" "}
                    {point.layerAmount}
                  </Popup>
                </Marker>
              );
            } else {
              return null;
            }
          })}
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
      ) : null}
    </>
  );
};

export default Map;
