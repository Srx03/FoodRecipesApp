const randomMealImg = document.getElementById('img-random');
const randomMealName = document.getElementById('random-name');
const listElement = document.querySelector("#seafoods");
const mealDetailsContent = document.querySelector('.meal-details-content');



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

    

    function getMealRecipe(e){
        e.preventDefault();
        if(e.target.classList.contains('recipe-btn')){
            let mealItem = e.target.parentElement.parentElement;
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
            .then(response => response.json())
            .then(data => mealRecipeModal(data.meals));
        }
    }

    function mealRecipeModal(meal){
        console.log(meal);
        meal = meal[0];
        let html = `
            <h2 class = "recipe-title">${meal.strMeal}</h2>
            <p class = "recipe-category">${meal.strCategory}</p>
            <div class = "recipe-instruct">
                <h3>Instructions:</h3>
                <p>${meal.strInstructions}</p>
            </div>
            <div class = "recipe-meal-img">
                <img src = "${meal.strMealThumb}" alt = "">
            </div>
            <div class = "recipe-link">
                <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
            </div>
        `;
        mealDetailsContent.innerHTML = html;
        mealDetailsContent.parentElement.classList.add('showRecipe');
    }