import { Component } from 'react';

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
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="input"
            type="text"
            value={query}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
        </form>
      </header>
    );
  }
}
