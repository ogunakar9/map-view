import proj4 from "proj4";

// Define the projection details for your data
// proj4.defs(
//   "EPSG:YOUR_DATA_EPSG_CODE",
//   "+proj=your_projection +datum=your_datum +units=m +no_defs"
// );

// Helper function to convert easting and northing to latitude and longitude
// Define the projection details for UTM Zone 33N (replace with your actual zone if different)
proj4.defs("EPSG:32633", "+proj=utm +zone=33 +datum=WGS84 +units=m +no_defs");

// Helper function to convert easting and northing to latitude and longitude
export const convertEastingNorthingToLatLong = (
  easting: number,
  northing: number
) => {
  try {
    // Assuming UTM Zone 33N as an example
    const [longitude, latitude] = proj4("EPSG:32633", "EPSG:4326", [
      easting,
      northing,
    ]);
    return { latitude, longitude };
  } catch (error) {
    console.error("Error converting easting/northing to lat/long:", error);
    return null;
  }
};

export const apiCall = async (url: string, method: string, body: any) => {
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};
