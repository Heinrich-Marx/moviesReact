import React from "react";
export default class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };
  key = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };
  filter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <div className="input-field col s12" />
        <input
          type="search"
          className="validate"
          placeholder="search"
          value={this.state.search}
          onChange={(event) => this.setState({ search: event.target.value })}
          onKeyDown={this.key}
        />
        <button
          className="btn"
          onClick={() =>
            this.props.searchMovies(this.state.search, this.state.type)
          }
        >
          Search
        </button>
        <div className="filters">
          <p>
            <label>
              <input
                type="radio"
                name="type"
                data-type="all"
                onChange={this.filter}
                checked={this.state.type === "all"}
              />
              <span>All</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type="radio"
                name="type"
                data-type="movie"
                onChange={this.filter}
                checked={this.state.type === "movie"}
              />
              <span>Movie</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type="radio"
                name="type"
                data-type="series"
                onChange={this.filter}
                checked={this.state.type === "series"}
              />
              <span>Series</span>
            </label>
          </p>
        </div>
      </div>
    );
  }
}
