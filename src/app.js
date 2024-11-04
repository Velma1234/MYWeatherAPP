
function SearchSubmitButton(event){
    event.preventDefault();
    let searchInput = document.querySelector("#searchFormInput");

    let cityElement = document.querySelector("#city");

    cityElement.innerHTML= searchInput.value;
};

let weatherSearchForm = document.querySelector("#searchForm");

weatherSearchForm.addEventListener("submit", SearchSubmitButton);