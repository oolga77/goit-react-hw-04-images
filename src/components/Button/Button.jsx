import { ButtonLoadMore } from './Buttun.styled';

export const BTNLoadMore = ({ onClick }) => {
  return (
    <ButtonLoadMore type="button" onClick={onClick}>
      Load more
    </ButtonLoadMore>
  );
};
