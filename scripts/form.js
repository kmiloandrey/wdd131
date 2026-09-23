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
const selectElement = document.getElementById("product-name");

if (selectElement) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        // Capitalize the first letter of each word for a polished UI look
        option.textContent = product.name.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        selectElement.appendChild(option);
    });
}