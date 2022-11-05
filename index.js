const randomMealImg = document.getElementsByClassName('img-random')[0];
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
        randomMealImg.setAttribute("id", data.meals[0].idMeal);

    })
    

    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then(res => {
        return res.json();
    })
    .then(data => {
       data.meals.forEach(element => {
            const popularElement = document.createElement('img');
            popularElement.classList.add('img-seafood', 'col-lg-3', 'col-md-6', 'col-sm-12');
            popularElement.setAttribute("src", element.strMealThumb);
            popularElement.setAttribute("id",element.idMeal);
            // console.log(popularElement);
            listElement.appendChild(popularElement);
       });

    });


    listElement.addEventListener('click',  getMealRecipe)
    randomMealImg.addEventListener('click',  getMealRecipe)

    

    function getMealRecipe(e){

       // console.log("test1")

           // console.log("test")
            let mealItem = e.path[0].id;
            console.log(mealItem)
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem}`)
            .then(response => response.json())
            .then(data => mealRecipeModal(data.meals));
            // console.log(data.meals)
        
    }

    function mealRecipeModal(meal){
        //console.log(meal);
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
    }