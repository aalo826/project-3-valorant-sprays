// Psuedo Code

// Landing page with blank square canvas
// Button under canvas prompting user to click it
// When clicked, displays image from Valorant API

// use method (getSpray) to get the list of sprays
// Since the the sprays have an unreadable ID, .map() to assign each spray an ID starting from 0.
// array index for unique ID

// let i = 0;
// spray.map(n => {
//   n['id'] = i;
//   i++;
// })

// Make a random number generator to pick a random spray to display based on the ID number


// Description of Project
// Generate a random valorant spray when clicking a button using Valorant-API.

// MVP Goals
// Landing Page with empty canvas and button users can click
// Show a random image when user interacts with button (image grabbed from APIS)
// Show name of random image choosen
// Users can click the button again to clear existing image to grab a new one

// Stretch GOals
// Add the feature to only grab static images
// Add the feature to only grab animated images (gif)
// Add the feature to grab both static and animated images
// Sound effect on button press
// API gives a mini icon and full image icon, add the mini icon below the displayed full image.