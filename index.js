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
    