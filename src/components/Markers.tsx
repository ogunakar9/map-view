import { Marker, Popup } from "react-leaflet";
import { dataPoints, convertEastingNorthingToLatLong } from "../utility";
import Metadata from "./Metadata";

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
                <Metadata selectedPoint={point} />
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
