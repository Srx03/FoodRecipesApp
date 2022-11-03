const randomMealImg = document.getElementById('img-random');
const randomMealName = document.getElementById('random-name');
const listElement = document.querySelector("#seafoods");



    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => {
        return res.json();
    })
    .then(data => {
        randomMealImg.src = data.meals[0].strMealThumb;
        randomMealName.innerText = data.meals[0].strMeal;

    })
    

    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then(res => {
        return res.json();
    })
    .then(data => {
       data.meals.forEach(element => {
            const popularElement = document.createElement('img');
            popularElement.classList.add('img-seafood', 'col-3');
            popularElement.setAttribute("src", element.strMealThumb);
            console.log(popularElement);
            listElement.appendChild(popularElement);
       });

    })
    