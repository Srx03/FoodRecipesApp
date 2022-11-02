const randomMealImg = document.getElementById('img-random');
const randomMealName = document.getElementById('random-name');



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
            const popularElement = document.createElement('div');
            popularElement.setAttribute('img-seafood', 'col-3');
            popularElement.src = element.strMealThumb;
            console.log(popularElement);
       });

    })
    