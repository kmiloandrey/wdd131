/* last modified time for footer */
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;


/* Array Data Objects (Meets Objects, Arrays, and Array Methods rule) */
const activitiesData = [
    { id: 1, title: "Moab Sunset Exploration", category: "family", imgSrc: "images/moab.webp", desc: "A smooth, paved walk perfect for strollers and all family ages with scenic sunset red rock views." },
    { id: 2, title: "Zion Backcountry Trekking", category: "thrill", imgSrc: "images/zion.webp", desc: "Challenging steep drops, chains for safety, and an adrenaline pumping reward over Angels Landing." },
    { id: 3, title: "Wasatch Alpine Climbing", category: "thrill", imgSrc: "images/wasatch.webp", desc: "High elevation trail scale testing raw stamina and climbing endurance through jagged peak structures." },
    { id: 4, title: "Goblin Valley Scavenger Hunt", category: "family", imgSrc: "images/goblin.webp", desc: "Enchanting labyrinth formations ideal for children discovering natural hoodoo mazes safely." }
];

document.addEventListener("DOMContentLoaded", () => {
    /* Invoke foundational utilities */
    setupMobileNavigation();

    /* Conditional setup based on page structure */
    if (document.getElementById("adventureGrid")) {
        renderAdventureCards(activitiesData);
        setupFilterListeners();
    }

    if (document.getElementById("bookingForm")) {
        setupFormHandling();
    }
});


/* Mobile Navigation System Menu Control */
function setupMobileNavigation() {
    const menuButton = document.getElementById("menuButton");
    const primaryNav = document.getElementById("primaryNav");

    if (menuButton && primaryNav) {
        menuButton.addEventListener("click", () => {
            primaryNav.classList.toggle("open");
            menuButton.innerHTML = primaryNav.classList.contains("open") ? "&#10005;" : "&#9776;";
        });
    }
}

/* Core Data Processing Engine: Renders elements dynamically with progressive lazy-loaded images */
function renderAdventureCards(filteredItems) {
    const gridContainer = document.getElementById("adventureGrid");
    if (!gridContainer) return;

    /* Strict clean sweep before insertion */
    gridContainer.innerHTML = "";

    /* Array Iteration generating template string cards with native progressive rendering controls */
    filteredItems.forEach(item => {
        const cardHTML = `
            <div class="question-card adventure-card">
                <img src="${item.imgSrc}" alt="${item.title}" class="adventure-card-img" loading="lazy" width="450" height="250">
                <div class="adventure-card-content">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>
            </div>
        `;
        gridContainer.innerHTML += cardHTML;
    });
}

/* Event Filtering Interface Controller */
function setupFilterListeners() {
    const filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            /* Manage UI Active Selection State */
            document.querySelector(".filter-btn.active")?.classList.remove("active");
            e.target.classList.add("active");

            const targetedCategory = e.target.getAttribute("data-category");

            /* Conditional branching combined with Array methods (.filter) */
            if (targetedCategory === "all") {
                renderAdventureCards(activitiesData);
            } else {
                const filteredData = activitiesData.filter(act => act.category === targetedCategory);
                renderAdventureCards(filteredData);
            }
        });
    });
}

/* Form Handling & LocalStorage Synchronizer */
function setupFormHandling() {
    const form = document.getElementById("bookingForm");
    const responseBox = document.getElementById("formResponse");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault(); /* Halt active server refresh */

        const clientName = document.getElementById("fullName").value;
        const clientEmail = document.getElementById("email").value;
        const selectedPackage = document.getElementById("packageSelect").value;

        /* Bundle elements using an Object structure */
        const submissionProfile = {
            name: clientName,
            email: clientEmail,
            package: selectedPackage,
            timestamp: new Date().toLocaleDateString()
        };

        /* LocalStorage persistence commit mutation */
        localStorage.setItem("lastBookingRequest", JSON.stringify(submissionProfile));

        /* Render dynamic UI structural updates using template literals */
        if (responseBox) {
            responseBox.innerHTML = `
                <h3>Thank you, ${submissionProfile.name}!</h3>
                <p>Your booking choice for the <strong>${submissionProfile.package.toUpperCase()}</strong> package has been saved locally on ${submissionProfile.timestamp}. Our wilderness experts will connect with you via ${submissionProfile.email} soon.</p>
            `;
            responseBox.className = ""; /* Reveal response layout node removing hidden state class */
            form.reset();
        }
    });
}