document.getElementById("weightForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the user's input values
    const earthWeight = parseFloat(document.getElementById("earthWeight").value);
    const planet = document.getElementById("planetSelect").value;

    // Define gravity constants for each planet (relative to Earth)
    const gravity = {
        mercury: 0.38,
        venus: 0.91,
        earth: 1.00,
        mars: 0.38,
        jupiter: 2.34,
        saturn: 1.06,
        uranus: 0.92,
        neptune: 1.19,
        pluto: 0.06
    };
    //new comment
    // Calculate the weight on the selected planet
    const planetWeight = earthWeight * gravity[planet];

    // Display the result
    const planetName = document.getElementById("planetName");
    const planetWeightElement = document.getElementById("planetWeight");

    planetName.textContent = planet.charAt(0).toUpperCase() + planet.slice(1); // Capitalize the planet name
    planetWeightElement.textContent = planetWeight.toFixed(2); // Round to 2 decimal places
});
