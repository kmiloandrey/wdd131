/* year for footer */
document.getElementById("currentyear").innerHTML = new Date().getFullYear();

/* last modified time for footer */
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

// hamburger Button 
const menuButton = document.getElementById('menu');
const navMenu = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    menuButton.classList.toggle('open');
});

// Array of Temple Objects
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Added three temple objects here...
    {
        templeName: "Orem, Utah Temple",
        location: "Orem, Utah, United States",
        dedicated: "2019, October, 5",
        area: 71998,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/orem-utah-temple/orem-utah-temple-42110.jpg"
    },
    {
        templeName: "Mount Timpanogos Utah Temple",
        location: "American Fork, Utah, United States",
        dedicated: "1992, October, 3",
        area: 107240,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/mount-timpanogos-utah-temple/mount-timpanogos-utah-temple-70634.jpg"
    },
    {
        templeName: "Saratoga Springs Utah Temple",
        location: "Saratoga Springs, Utah, United States",
        dedicated: "2017, April, 2",
        area: 96630,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/saratoga-springs-utah-temple/saratoga-springs-utah-temple-35619.jpg"
    },
];

const templeGrid = document.querySelector("div.temple-grid");
const navLinks = document.querySelectorAll("nav a"); // Targets all navigation menu link items


function createTempleCards(templesList) {
    templeGrid.innerHTML = ""; 

    templesList.forEach((temple) => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let image = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span>Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span>Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span>Area:</span> ${temple.area.toLocaleString()} sq ft`;

        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", `Image of ${temple.templeName}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "400");
        image.setAttribute("height", "250");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        templeGrid.appendChild(card);
    });
}

//  function to extract the four-digit year from the dedication string
function getYear(dateString) {
    // Splits "2023, August, 13" into an array and grabs the first element "2023"
    return parseInt(dateString.split(",")[0].trim());
}

// set up event handling for the navigation menu options
navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); 

        // Grab the text content of the link clicked (e.g., "Old", "New", "Large")
        const filterCriteria = link.textContent.trim().toLowerCase(); // Convert to lowercase for easier comparison
        let filteredTemples = [];

        // filters based on your project rules
        if (filterCriteria === "old") {
            filteredTemples = temples.filter(temple => getYear(temple.dedicated) < 1900);
        }
        else if (filterCriteria === "new") {
            filteredTemples = temples.filter(temple => getYear(temple.dedicated) > 2000);
        }
        else if (filterCriteria === "large") {
            filteredTemples = temples.filter(temple => temple.area > 90000);
        }
        else if (filterCriteria === "small") {
            filteredTemples = temples.filter(temple => temple.area < 10000);
        }
        else if (filterCriteria === "home") {
            filteredTemples = temples;
        }

        // Render the filtered array to the screen
        createTempleCards(filteredTemples);
    });
});

// 5. Initial application state on page load: display all temples
createTempleCards(temples);