const Fetch = async (inputValue, page) => {
  const json = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${inputValue}&page=${page}`
  );
  const data = await json.json();
  return data;
};

export default Fetch;
