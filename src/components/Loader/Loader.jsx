import { Dna } from 'react-loader-spinner';
import { Spinner } from './Loader.styled';
export const Loader = () => {
  return (
    <Spinner>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{ width: '100%' }}
        wrapperClass="dna-wrapper"
      />
    </Spinner>
  );
};
