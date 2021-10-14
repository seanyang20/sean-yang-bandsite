const showsContainer = document.getElementById("shows");
console.log(showsContainer); 

let showsTitle = document.createElement('h1');
showsTitle.classList.add("shows__title");
showsTitle.innerText = "Shows";
showsContainer.appendChild(showsTitle);


let shows = [
    {
    dateHeader: "DATE",
    date: "Mon Sept 06 2021",
    venueHeader: "VENUE",
    venue: "Ronald Lane",
    locationHeader: "LOCATION",
    location: "San Francisco, CA",
    button: "BUY TICKETS", },
    {
    dateHeader: "DATE",
    date: "Tue Sept 21 2021", 
    venueHeader: "VENUE",
    venue: "Pier 3 East",
    locationHeader: "LOCATION",
    location: "San Francisco, CA", 
    button: "BUY TICKETS",},
    {
    dateHeader: "DATE",
    date: "Fri Oct 15 2021", 
    venueHeader: "VENUE",
    venue: "View Lounge",
    locationHeader: "LOCATION",
    location: "San Francisco, CA",
    button: "BUY TICKETS", },
    {
    dateHeader: "DATE",
    date: "Sat Nov 06 2021", 
    venueHeader: "VENUE",
    venue: "Hyatt Agency",
    locationHeader: "LOCATION",
    location: "San Francisco, CA", 
    button: "BUY TICKETS",},
    {
    dateHeader: "DATE",
    date: "Fri Nov 26 2021", 
    venueHeader: "VENUE",
    venue: "Moscow Center",
    locationHeader: "LOCATION",
    location: "San Francisco, CA", 
    button: "BUY TICKETS",},
    {
    dateHeader: "DATE",
    date: "Wed Dec 15 2021", 
    venueHeader: "VENUE",
    venue: "Press Club",
    locationHeader: "LOCATION",
    location: "San Francisco, CA", 
    button: "BUY TICKETS",},
]

function displayShows(sw) {
        

    let singleShowContainer = document.createElement("section");
    singleShowContainer.classList.add("shows__single");
    showsContainer.appendChild(singleShowContainer);

    let showDateHeader = document.createElement("h1");
    showDateHeader.classList.add("shows__date-header");  
    showDateHeader.innerText = sw.dateHeader;
    singleShowContainer.appendChild(showDateHeader);

    let showDate = document.createElement("p");
    showDate.classList.add("shows__date");  
    showDate.innerText = sw.date;
    singleShowContainer.appendChild(showDate);

    let showVenueHeader = document.createElement("h1");
    showVenueHeader.classList.add("shows__venue-header");  
    showVenueHeader.innerText = sw.venueHeader;
    singleShowContainer.appendChild(showVenueHeader);

    let showVenue = document.createElement("p");
    showVenue.classList.add("shows__venue");  
    showVenue.innerText = sw.venue;
    singleShowContainer.appendChild(showVenue);

    let showLocationHeader = document.createElement("h1");
    showLocationHeader.classList.add("shows__location-header");  
    showLocationHeader.innerText = sw.locationHeader;
    singleShowContainer.appendChild(showLocationHeader);

    let showLocation = document.createElement("p");
    showLocation.classList.add("shows__location");  
    showLocation.innerText = sw.location;
    singleShowContainer.appendChild(showLocation);

    let buyTicketsButton = document.createElement("button");
    buyTicketsButton.classList.add("shows__button");
    buyTicketsButton.innerText = sw.button;
    singleShowContainer.appendChild(buyTicketsButton);
}

for (i = 0; i < shows.length; i++) {
    displayShows(shows[i]);
};
