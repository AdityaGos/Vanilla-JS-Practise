let SearchedMovieResult = [];

document.addEventListener("DOMContentLoaded", () => {

  const movieContainer = document.querySelector(".movie-result-container");
  const searchBox = document.getElementById("search-input");

  const resetMovieList = () => {
    movieContainer.innerHTML = "";
  };

  const renderMovieList = (title, poster, year) => {
    return `
        <div class="movie-wrapper">
            <img src="./src/resource/${poster}.jpg" alt="imgur" class="movie-poster">
            <span class="movie-title">${title}</span>
            <span class="movie-title">${year}</span>
         </div>
    `
  }
  const debounce = (fnc, delay = 500) => {
    let timer;
    return function (...args) {
      clearInterval(timer);
      timer = setTimeout(() => {
        fnc.apply(this,args);
      }, delay);
    };
  };
  let abortController;
  const handleInput = async (event) => {
    const keyword = event.target.value;
    const trimKeyword = keyword.trim();
    if (trimKeyword.length === 0) {
     resetMovieList();
     return;
    }
    if (abortController) {
      abortController.abort();
    }

    // Create a new AbortController for the current request
    abortController = new AbortController();

    try {
      const result = await fetch("http://localhost:3000/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ searchVal: trimKeyword }),
        signal:abortController.signal
      });
      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);
      }
      const data = await result.json();
      SearchedMovieResult = data.result;

      if (SearchedMovieResult.length > 0) {
        resetMovieList();

        for (const movie of SearchedMovieResult) {
          const html = renderMovieList(movie.title, movie.poster, movie.year);
          movieContainer.insertAdjacentHTML("beforeend", html);
        }
      }
    } catch {
      (error) => console.log(error);
    }
    // const res = await res.json()lt.json()
  };
  searchBox.addEventListener("input", debounce(handleInput));
});
