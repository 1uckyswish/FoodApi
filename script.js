const cardImg = document.querySelectorAll(".menu_image img");
const cardHeader = document.querySelectorAll(".menu_info h2");
const galleryImgs = document.querySelectorAll(".gallary_image img");
const galleryHeader = document.querySelectorAll(".gallary_image h3");
const galleryText = document.querySelectorAll(".gallary_image p");
const arrayOfMeals = [fetchMeal(53010), fetchMeal(52777), fetchMeal(53039), fetchMeal(52951), fetchMeal(52779), fetchMeal(52773), fetchMeal(52912), fetchMeal(52982), fetchMeal(52859), fetchMeal(52854), fetchMeal(52897), fetchMeal(52924)];
const arrayOfMeats = ["Beef", "Chicken", "Lamb", "Pork", "Seafood", "Tofu"];
const arrayOfMeatsIndex = [0, 1, 3, 6, 7, 10];
function fetchMeal(id) {
  const api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  return fetch(api)
    .then((result) => result.json())
    .then((json) => json.meals[0]);
}

function updateCard(food, index) {
  cardImg[index].setAttribute("src", food.strMealThumb);
  cardHeader[index].innerText = food.strMeal;
}

function allCards(foods){
    for(let i = 0; i < cardImg.length; i++){
        updateCard(foods[i], i);
    }
}

Promise.all(arrayOfMeals)
  .then((foods) => {
    allCards(foods);
  })
  .catch((error) => console.log(error));

function fetchMeats(){
    const api = `https://www.themealdb.com/api/json/v1/1/categories.php`;
    return fetch(api)
    .then((result) => result.json())
    .then((json) => {
        const cat = json.categories;
        console.log(cat);
        UpdateGallery(cat);
    })
    .catch((error) => console.log(error));
}

function UpdateGallery(meats){
    for(let i = 0; i < arrayOfMeats.length; i++){
        galleryHeader[i].innerText = meats[arrayOfMeatsIndex[i]].strCategory;
        galleryImgs[i].setAttribute("src", meats[arrayOfMeatsIndex[i]].strCategoryThumb)
        galleryText[i].innerText = meats[arrayOfMeatsIndex[i]].strCategoryDescription.slice(0, 76);
    }
}

fetchMeats()



