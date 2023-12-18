import React from "react";

export default function WithLoading(WrappedComponent) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
}
