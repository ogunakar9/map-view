import { CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import "./styles.scss";

const Markers = lazy(() => import("./Markers"));

const LazyLoadWrapper = () => {
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

export default LazyLoadWrapper;
