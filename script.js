const query = "beef";
const api = `https://www.themealdb.com/api/json/v1/1/categories.php`;

fetch(api)
.then((result) => result.json())
.then((json) => console.log(json))
.catch((error) => console.log(error));
