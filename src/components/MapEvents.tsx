import { useMap } from "react-leaflet";
import { useEffect } from "react";

const MapEvents = () => {
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

  return null;
};

export default MapEvents;
