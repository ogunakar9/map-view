import { Marker, Popup } from "react-leaflet";
import { dataPoints, convertEastingNorthingToLatLong } from "../utility";

const Markers = () => {
  return (
    <>
      {dataPoints.map((point: any) => {
        const convertedCoordinates = convertEastingNorthingToLatLong(
          point.easting,
          point.northing
        );

        if (convertedCoordinates) {
          const { latitude, longitude } = convertedCoordinates;

          return (
            <Marker key={point.id} position={[latitude, longitude]}>
              <Popup>
                <span style={{ fontWeight: "bold" }}> Dept: </span>
                {point.depth}m <br />
                <span style={{ fontWeight: "bold" }}> Layer Amount: </span>
                {point.layerAmount}
              </Popup>
            </Marker>
          );
        } else {
          return <></>;
        }
      })}
    </>
  );
};

export default Markers;
