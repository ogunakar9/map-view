import { CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import "./styles.scss";

const Markers = lazy(() => import("./Markers"));

const MarkerWrapper = () => {
  return (
    <Suspense
      fallback={
        <div className="suspense-loader">
          <CircularProgress />
        </div>
      }
    >
      <Markers />
    </Suspense>
  );
};

export default MarkerWrapper;
