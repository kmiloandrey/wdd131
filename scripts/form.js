/* year for footer */
document.getElementById("currentyear").innerHTML = new Date().getFullYear();

/* last modified time for footer */
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

// Product Array Data Source
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate product array into select element on the primary form
const productSelect = document.getElementById("product-name");

if (productSelect) {
    products.forEach(product => {
        const option = document.createElement("option");
        // Specifications: option array value field is 'id', display field is 'name'
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// LocalStorage Tracking logic for review.html completion counter
if (window.location.pathname.includes("review.html")) {
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem("reviewCount", reviewCount);

    // Optional: display counter somewhere on review.html page if you choose
    console.log(`Total Reviews Completed: ${reviewCount}`);
}