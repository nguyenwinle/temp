import * as React from "react";
import {
  ErrorBoundary as RebErrorBoundary,
  FallbackProps,
} from "react-error-boundary";

const ErrorFallback: React.FC<FallbackProps> = ({
  error,
  componentStack,
  resetErrorBoundary,
}) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <pre>{componentStack}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const ErrorBoundary: React.FC = ({ children }) => (
  <RebErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      // reset the state of your app so the error doesn't happen again
    }}
  >
    {children}
  </RebErrorBoundary>
);

export default ErrorBoundary;
