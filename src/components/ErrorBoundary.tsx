import { useState, FC, useEffect } from "react";
import { Map } from ".";

const withErrorBoundary = (WrappedComponent: FC) => {
  return (props: any) => {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
      const errorHandler = (error: ErrorEvent) => {
        setHasError(true);
        console.error("Error caught by error boundary:", error);
      };

      window.addEventListener("error", errorHandler);

      return () => {
        window.removeEventListener("error", errorHandler);
      };
    }, []);

    if (hasError) {
      return <div>Something went wrong!</div>; // TODO: Render a fallback UI
    }

    return <WrappedComponent {...props} />;
  };
};

const ErrorWrapper = withErrorBoundary(Map);

export default ErrorWrapper;
