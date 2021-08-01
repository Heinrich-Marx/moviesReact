import React from "react";
import Movies from "../components/Movies";
import Search from "../components/Search";
class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=972ff75a&s=matrix&&=`)
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }

  searchMovies = (str, type = "all") => {
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?apikey=972ff75a&s=${str}${
        type !== "all" ? `&Type=${type}&=` : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <main className="container main">
        <Search searchMovies={this.searchMovies} />
        {loading ? (
          <div class="progress">
            <div class="indeterminate"></div>
          </div>
        ) : (
          <Movies movies={this.state.movies} />
        )}
      </main>
    );
  }
}

export { Main };
