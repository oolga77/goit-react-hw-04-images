import { Component } from 'react';
import {
  SearchbarConteiner,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  onInputCange = evt => {
    this.setState({ value: evt.currentTarget.value });
  };

  onFormSumit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <SearchbarConteiner onSubmit={this.onFormSumit}>
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
              value={this.state.value}
              onChange={this.onInputCange}
            />
          </SearchForm>
        </header>
      </SearchbarConteiner>
    );
  }
}
