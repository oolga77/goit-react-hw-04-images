import { useState } from 'react';
import {
  SearchbarConteiner,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const onInputCange = evt => {
    setValue(evt.currentTarget.value.toLowerCase());
  };

  const onFormSumit = e => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <SearchbarConteiner onSubmit={onFormSumit}>
      <header>
        <SearchForm>
          <SearchFormButton type="submit">
            <span className="button-label">Search</span>
          </SearchFormButton>
          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={onInputCange}
          />
        </SearchForm>
      </header>
    </SearchbarConteiner>
  );
};
