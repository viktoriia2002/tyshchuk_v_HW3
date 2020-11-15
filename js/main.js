import { fetchData } from "./modules/TheDataMiner.js";

(() => {
    console.log('it is working');
    
    function popErrorWindow(message) {
        alert("Something has gone horribly, horribly wrong");
    }


    function handleDataSet(data) {
        //here will be a lightbox with this data
        //let dishesSection = document.querySelector('.dishes-section'),
        //dishesTemplate = document.querySelector('#dishes-template').content;
        //here will be a lightbox with this data
    //     let lightboxSection = document.querySelector('.lightbox-section'),
    //         lightboxTemplate = document.querySelector('#lightbox-template').content;
        
    //     for (let lightbox in data) {
    //         let lightboxDishes = lightboxTemplate.cloneNode(true),
    //             lightboxDishesText = lightboxDishes.querySelector('.lightbox').children;

    //         lightboxDishesText[2].textContent = data[lightbox].name;
    //         lightboxDishesText[3].textContent = data[lightbox].description;
    //         lightboxDishesText[4].textContent = data[lightbox].recipe;
    //         lightboxSection.appendChild(lightboxDishes);
    // }
    // lightboxSection.addEventListener("click", retrieveProjectInfo);


        for (let dishes in data) {
            let currentDishes = dishesTemplate.cloneNode(true),
                currentDishesText = currentDishes.querySelector('.dishes').children;

            currentDishesText[2].textContent = data[dishes].name;
            currentDishesText[3].textContent = data[dishes].description;
            currentDishesText[4].textContent = data[dishes].recipe;

            dishesSection.appendChild(currentDishes);
        }
    }
    function retrieveProjectInfo(event){
        
        if(!event.target.id) {return}

        fetchData(`./includes/index.php?id=${event.target.id}`).then(data => console.log(data)).catch(err => console.log(err));
    }

    function renderDishesThumbnails(thumbs){
        let dishesSection = document.querySelector('.dishes-section'),
            dishesTemplate = document.querySelector('#dishes-template').content;

        // loop through the JavaScript object and for each user, make a copy of the user template we find at the bottom of index.html, populate it with the user's data, and put that fresh copy in the users section in index.html

        for (let dishes in thumbs) {
            let currentDishes = dishesTemplate.cloneNode(true),
                currentDishesText = currentDishes.querySelector('.dishes').children;

            currentDishesText[1].src = `images/${thumbs[dishes].photo}`;
            currentDishesText[1].id = thumbs[dishes].id;

            dishesSection.appendChild(currentDishes);
        }
        dishesSection.addEventListener("click", retrieveProjectInfo);
    }

    fetchData("./includes/index.php").then(data => renderDishesThumbnails(data)).catch(err => {console.log(err); popErrorWindow(err);});

})();
