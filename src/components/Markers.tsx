import { Marker, Popup } from "react-leaflet";
import { dataPoints, convertEastingNorthingToLatLong } from "../utility";
import Metadata from "./Metadata";

const Markers = () => {
  return (
    <>
      {dataPoints.map((point: IPointProps) => {
        const { depth, layerAmount, id, easting, northing } = point;

        const convertedCoordinates = convertEastingNorthingToLatLong(
          easting,
          northing
        );

        if (convertedCoordinates) {
          const { latitude, longitude } = convertedCoordinates;

          return (
            <Marker key={id} position={[latitude, longitude]}>
              <Popup>
                <Metadata depth={depth} layerAmount={layerAmount} />
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

interface IPointProps {
  id: number;
  easting: number;
  northing: number;
  depth: number;
  layerAmount: number;
}
