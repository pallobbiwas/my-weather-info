/* select button and click handler */
const buttonClickHandeler = () => {
    const detailsontainer = document.getElementById('display-container')
    detailsontainer.textContent = ''
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
    showDetailes(datas.next_days);
    // console.log(datas.next_days);
  const displayAfter = document.getElementById("display-afer");
  displayAfter.innerHTML = `
    <div class="text-center py-5 box">
            <h1>Name: ${datas.region}</h1>
            <h2 class="">teamparatur : ${datas.currentConditions.temp.c} deg</h2>
            <img class="w-25 img-fluid image bg-info" src="${datas.currentConditions.iconURL}" alt="">
            <h3 class=" py-3">Status : ${datas.currentConditions.comment}</h3>
        </div>
    `;
    
};
const showDetailes = (values) => {
    const detailsontainer = document.getElementById('display-container')
    for(const value of values){
        console.log(value);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card text-center">
                <h3>name: ${value.day}</h3>
                <div class="text-center">
                    <img src="${value.iconURL}" class="w-50 img-fluid " alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title">max-tem: ${value.max_temp.c}</h5>
                    <h5 class="card-text">min-tam: ${value.min_temp.c}</h5>
                </div>
            </div>
        `;
        detailsontainer.appendChild(div);

    }
}
