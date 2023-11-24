import { RotatingLines } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <RotatingLines
        strokeColor="#f1c40f"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
        style={{
          margin: 'auto',
          display: 'block',
        }}
      />
    </LoaderContainer>
  );
};
