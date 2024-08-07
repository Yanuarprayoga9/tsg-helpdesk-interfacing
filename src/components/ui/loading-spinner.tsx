import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { CSSProperties } from 'react';

type LoadingSpinnerProps = {
  loading: boolean;
  color?: string;
  size?: number;
  cssOverride?: CSSProperties;
};

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  loading,
  color = '#ffffff',
  size = 150,
  cssOverride = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
  },
}) => {
  return (
    <PropagateLoader
      color={color}
      loading={loading}
      cssOverride={cssOverride}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default LoadingSpinner;
