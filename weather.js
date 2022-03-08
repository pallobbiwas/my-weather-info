/* select button and click handler */
const buttonClickHandeler = () => {
  const searchInput = document.getElementById("search-input");
  const searchInputValue = searchInput.value;
  if (!searchInputValue) {
    return;
  }
  getSearch(searchInputValue);

  /* clear value */
  searchInput.value = "";
};
//get api function
const getSearch = (name) => {
  fetch(`https://weatherdbi.herokuapp.com/data/weather/${name}`)
    .then((res) => res.json())
    .then((data) => display(data));
};
// display data
const display = (datas) => {
    const displayData = document.getElementById('display-container');
    

}

