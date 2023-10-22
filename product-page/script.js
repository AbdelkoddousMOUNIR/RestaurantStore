let icons = document.querySelectorAll(".icon");
let plate = document.getElementById("plate")
let heading = document.getElementById("heading");
let paragraph = document.getElementById("paragraph");
let price = document.getElementById("price");
let menu = document.querySelectorAll("ul li");
let iconsImg = document.querySelectorAll(".icons img");
let iconsHeading = document.querySelectorAll(".icons h3");


menu.forEach(element => {
    element.addEventListener("click", () => {
        if (element == menu[0]) {
            heading.innerText = "Pepperoni Pizza";
            price.innerText = "price : $8";
            paragraph.innerText = "Pepperoni pizza consists of pizza dough, tomato sauce, mozzarella cheese, and sliced pepperoni. It's a classic and beloved pizza variety in the United States. Some people may choose to add additional toppings, but the combination of the spicy pepperoni, creamy cheese, and tangy tomato sauce is always delicious.";
            plate.src = "pepperoni-pizza.png"
            iconsImg[0].src = "pepperoni-pizza.png";
            iconsHeading[0].innerText = "pepperoni pizza";
            iconsImg[1].src = "salami pizza.png";
            iconsHeading[1].innerText = "salami pizza";
            iconsImg[2].src = "sausages pizza.png"
            iconsHeading[2].innerText = "sausages pizza"
            icons.forEach(elem => {
                elem.addEventListener("click", () => {
                    if (elem == icons[0]) {
                        plate.src = "pepperoni-pizza.png"
                        heading.innerText = "pepperoni pizza"
                        paragraph.innerText = "Pepperoni pizza consists of pizza dough, tomato sauce, mozzarella cheese, and sliced pepperoni. It's a classic and beloved pizza variety in the United States. Some people may choose to add additional toppings, but the combination of the spicy pepperoni, creamy cheese, and tangy tomato sauce is always delicious."
                        price.innerText = "price : $8"
                    } else if (elem == icons[1]) {
                        plate.src = "salami pizza.png"
                        heading.innerText = "salami pizza"
                        paragraph.innerText = "Salami pizza features pizza dough, tomato sauce, mozzarella cheese, and sliced salami as its main topping. The combination of the savory salami, tangy tomato sauce, and creamy cheese make for a delicious and satisfying pizza. Additional toppings can also be added to customize the pizza to your liking."
                        price.innerText = "price : $9"
                    } else if (elem == icons[2]) {
                        plate.src = "sausages pizza.png"
                        heading.innerText = "sausages pizza"
                        paragraph.innerText = "Sausage pizza features pizza dough, tomato sauce, mozzarella cheese, and sliced sausages. The sausages can be made with various types of meat and are spiced with herbs and seasonings. This pizza variety is completed with a simple tomato sauce and creamy mozzarella cheese. Additional toppings like peppers, onions, or mushrooms can also be added."
                        price.innerText = "price : $12"
                    }
                })
            })
        }else if (element == menu[1]) {
            heading.innerText = "Carne Asada Tacos";
            price.innerText = "price : $7.5";
            paragraph.innerText = "These tacos are made with grilled steak, usually cut into thin slices and seasoned with spices such as cumin, garlic, and chili powder. They are often topped with diced onions, cilantro, and lime juice.";
            plate.src = "Carne Asada Tacos.png"
            iconsImg[0].src = "Carne Asada Tacos.png";
            iconsHeading[0].innerText = "Carne Asada Tacos";
            iconsImg[1].src = "Fish Tacos.png";
            iconsHeading[1].innerText = "Fish Tacos";
            iconsImg[2].src = "Vegetarian Tacos.png"
            iconsHeading[2].innerText = "Vegetarian Tacos"
            icons.forEach(elem => {
                elem.addEventListener("click", () => {
                    if (elem == icons[0]) {
                        plate.src = "Carne Asada Tacos.png"
                        heading.innerText = "Carne Asada Tacos"
                        paragraph.innerText = "These tacos are made with grilled steak, usually cut into thin slices and seasoned with spices such as cumin, garlic, and chili powder. They are often topped with diced onions, cilantro, and lime juice."
                        price.innerText = "price : $7.5"
                    } else if (elem == icons[1]) {
                        plate.src = "Fish Tacos.png"
                        heading.innerText = "Fish Tacos"
                        paragraph.innerText = "A popular taco option in coastal regions, these tacos are made with battered and fried fish, usually cod or tilapia. They are often topped with shredded cabbage, pico de gallo, and a creamy sauce such as crema or mayonnaise."
                        price.innerText = "price : $6"
                    } else if (elem == icons[2]) {
                        plate.src = "Vegetarian Tacos.png"
                        heading.innerText = "Vegetarian Tacos"
                        paragraph.innerText = "These tacos made with a variety of vegetables such as roasted peppers, grilled mushrooms, sautéed onions, and corn. They are often topped with salsa, guacamole, and cheese."
                        price.innerText = "price : $12"
                    }
                })
            })
        }else if (element == menu[2]) {
            heading.innerText = "Spaghetti Al Pomodoro";
            price.innerText = "price : $7";
            paragraph.innerText = "This classic recipe features a simple tomato sauce made with fresh tomatoes, garlic, olive oil, and basil. The tomatoes are cooked down into a thick sauce and served over spaghetti pasta.";
            plate.src = "spaghity-1.png"
            iconsImg[0].src = "spaghity-1.png";
            iconsHeading[0].innerText = "Spaghetti al Pomodoro";
            iconsImg[1].src = "spaghity-2.png";
            iconsHeading[1].innerText = "Spaghetti alla Puttanesca";
            iconsImg[2].src = "spaghity-3.png"
            iconsHeading[2].innerText = "Spaghetti alla Amatriciana"
            icons.forEach(elem => {
                elem.addEventListener("click", () => {
                    if (elem == icons[0]) {
                        plate.src = "spaghity-1.png"
                        heading.innerText = "Spaghetti al Pomodoro"
                        paragraph.innerText = "This classic recipe features a simple tomato sauce made with fresh tomatoes, garlic, olive oil, and basil. The tomatoes are cooked down into a thick sauce and served over spaghetti pasta."
                        price.innerText = "price : $7"
                    } else if (elem == icons[1]) {
                        plate.src = "spaghity-2.png"
                        heading.innerText = "Spaghetti alla Puttanesca"
                        paragraph.innerText = "This spicy and flavorful recipe features a tomato sauce made with anchovies, capers, olives, garlic, and red pepper flakes. The sauce is simmered and then tossed with spaghetti."
                        price.innerText = "price : $11"
                    } else if (elem == icons[2]) {
                        plate.src = "spaghity-3.png"
                        heading.innerText = "Spaghetti alla Amatriciana"
                        paragraph.innerText = "This hearty and savory recipe features a tomato sauce made with pancetta, onions, garlic, and red pepper flakes. The sauce is simmered until thick and served over spaghetti pasta with grated Pecorino Romano cheese."
                        price.innerText = "price : $15"
                    }
                })
            })
        }
    })
})




