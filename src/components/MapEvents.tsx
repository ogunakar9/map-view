import { useMap } from "react-leaflet";
import { useEffect } from "react";
import { dataPoints, convertEastingNorthingToLatLong } from "../utility";

const MapEvents = (props: any) => {
  const { activePoint } = props;
  //TODO: usememo
  const convertedCoordinatesArray = dataPoints.map((point: any) => {
    const { easting, northing } = point;
    return convertEastingNorthingToLatLong(easting, northing);
  });

  console.log("convertedCoordinatesArray:", convertedCoordinatesArray);

  const map = useMap();
  const handleMapError = (error: any) => {
    console.error("Error during map interaction:", error);
    // Handle the error, display a message, or provide a fallback
  };

  useEffect(() => {
    const handleError = (error: any) => {
      // Handle initialization errors here
      handleMapError(error);
    };

    // Use the 'error' event to catch errors during runtime
    map.on("error", handleError);

    return () => {
      map.off("error", handleError);
    };
  }, [map]);

  useEffect(() => {
    const handleDrawerBtnClick = () => {
      // map.flyTo(e.latlng, map.getZoom());
      const lat = convertedCoordinatesArray[activePoint]?.latitude as number;
      const long = convertedCoordinatesArray[activePoint]?.longitude as number;

      map.flyTo([lat, long], map.getZoom());
    };

    handleDrawerBtnClick();
  }, [activePoint]);

  return null;
};

export default MapEvents;
