// Hardcoded values for the season and plant type
let season = "summer"; // TODO: Replace with prompt() to allow user interaction.
let plantType = "flower"; // TODO: Replace with prompt() to allow user interaction.

// Variable to hold gardening advice
let advice = "";

// Determine advice based on the season
function determineSeasonAdvise() {
  if (season === "summer") {
    advice += "Water your plants regularly and provide some shade.\n";
  } else if (season === "winter") {
    advice += "Protect your plants from frost with covers.\n";
  } else {
    advice += "No advice for this season.\n";
  }
}

// Determine advice based on the plant type
function determineTypeAdvise() {
  if (plantType === "flower") {
    advice += "Use fertiliser to encourage blooms. \n";
  } else if (plantType === "vegetable") {
    advice += "Keep an eye out for pests! \n";
  } else {
    advice += "No advice for this type of plant. \n";
  }
}

function determineSeasonalPlants() {
    if (plantType === "flower" && season ==="summer") {
        advice += "Plant Marigolds"
    } else {
        advice += "Plant a shrub"
    }
}

determineSeasonAdvise()
determineTypeAdvise()
determineSeasonalPlants()

// Log the generated advice to the console
console.log(advice);

// TODO: Examples of possible features to add:
// - Refactor the code into functions for better readability and modularity.
//- Suggest plants that thrive in the given season.
// - Add detailed comments explaining each block of code.
// - Store advice in an object for multiple plants and seasons.

