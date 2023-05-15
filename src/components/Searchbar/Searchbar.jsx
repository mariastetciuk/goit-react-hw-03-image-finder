import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = ({ target: { value } }) => this.setState({ query: value });

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSearch(this.state.query);
  };

  render() {
    const { query } = this.state;
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <input
            className={css.input}
            type="text"
            value={query}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={css.btn}>
            <span className={css.buttonLabel}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
