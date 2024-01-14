import css from './Searchbar.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

class Searchbar extends Component {
  state = {
    inputData: '',
  };

  onChangeInput = e => {
    this.setState({ inputData: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputData);
    this.setState({ inputData: '' });
  };

  render() {
    const { inputData } = this.state.inputData;
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <FaSearch></FaSearch>
          </button>

          <input
            className={css.SearchFormInput}
            name="inputData"
            value={inputData}
            onChange={this.onChangeInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
