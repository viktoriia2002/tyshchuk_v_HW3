import { fetchData } from "./modules/TheDataMiner.js";

(() => {
    // this receives the data payload from our AJAX request, parses it (turns the returned JSON object back into a plain JavaScript object) and renders the data to our view (the markup in index.html)
    function handleDataSet(data) {
        let dishesSection = document.querySelector('.dishes-section'),
            dishesTemplate = document.querySelector('#dishes-template').content;

        // loop through the JavaScript object and for each user, make a copy of the user template we find at the bottom of index.html, populate it with the user's data, and put that fresh copy in the users section in index.html

        for (let dishes in data) {
            let currentDishes = dishesTemplate.cloneNode(true),
                currentDishesText = currentDishes.querySelector('.dishes').children;

            currentDishesText[1].src = `images/${data[dishes].photo}.jpg`;
            currentDishesText[2].textContent = data[dishes].name;
            currentDishesText[3].textContent = data[dishes].description;
            currentDishesText[4].textContent = data[dishes].recipe;

            // add this new user to the view
            dishesSection.appendChild(currentDishes);
        }

        console.log(data);
    }

    fetchData("./DataSet.json").then(data => handleDataSet(data)).catch(err => { console.log(err); });

})();
