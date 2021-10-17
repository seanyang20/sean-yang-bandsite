// Shows Container
const showsContainer = document.getElementById("shows");
console.log(showsContainer); 

//Shows Title
let showsTitle = document.createElement('h1');
showsTitle.classList.add("shows__title");
showsTitle.innerText = "Shows";
showsContainer.appendChild(showsTitle);

//Shows Table Body
const tableBody = document.createElement('table');
tableBody.classList.add("table");
showsContainer.appendChild(tableBody);


let shows = [
    {
    // dateHeader: "DATE",
    date: "Mon Sept 06 2021",
    // venueHeader: "VENUE",
    venue: "Ronald Lane",
    //locationHeader: "LOCATION",
    location: "San Francisco, CA",
    button: "BUY TICKETS", },
    {
    //dateHeader: "DATE",
    date: "Tue Sept 21 2021", 
    //venueHeader: "VENUE",
    venue: "Pier 3 East",
    //locationHeader: "LOCATION",
    location: "San Francisco, CA", 
    button: "BUY TICKETS",},
    {
    //dateHeader: "DATE",
    date: "Fri Oct 15 2021", 
   // venueHeader: "VENUE",
    venue: "View Lounge",
 //   locationHeader: "LOCATION",
    location: "San Francisco, CA",
    button: "BUY TICKETS", },
    {
 //   dateHeader: "DATE",
    date: "Sat Nov 06 2021", 
 //   venueHeader: "VENUE",
    venue: "Hyatt Agency",
 //   locationHeader: "LOCATION",
    location: "San Francisco, CA", 
    button: "BUY TICKETS",},
    {
 //   dateHeader: "DATE",
    date: "Fri Nov 26 2021", 
  //  venueHeader: "VENUE",
    venue: "Moscow Center",
  //  locationHeader: "LOCATION",
    location: "San Francisco, CA", 
    button: "BUY TICKETS",},
    {
  //  dateHeader: "DATE",
    date: "Wed Dec 15 2021", 
  //  venueHeader: "VENUE",
    venue: "Press Club",
   // locationHeader: "LOCATION",
    location: "San Francisco, CA", 
    button: "BUY TICKETS",},
]
// Creating Thead Element 
const thead = document.createElement('thead');
thead.classList.add('table__thead');
tableBody.appendChild(thead);

// Creating th tag for each key
let data = Object.keys(shows[0]);
for (let key of data) {
    // Adding th tag to thead element
    if (key != "button"){
    const tableRow = document.createElement('th');
    tableRow.classList.add('table__header');
    thead.appendChild(tableRow);
    let text = document.createTextNode(key);
    tableRow.appendChild(text);
    }
}
/* Creating the Thead in Table */
// function generateTableHead (table) {
//     const thead = table.createElement('thead');
//     tableBody.appendChild(thead);
//     const tableRow = document.createElement('tr');

// }

// const table = document.querySelector(".rwd-table");
// generateTableHead(table);


// const tableHeadRow = document.createElement("tr");

// const tableCellDateHead = document.createElement("th");
// tableCellDateHead.innerText = shows[0].dateHeader;
// tableHeadRow.appendChild(tableCellDateHead);

const displayShowsTable = (obj) => {
    const tableRow = document.createElement("tr");
    

    const tableCellDate = document.createElement("td");
    tableCellDate.classList.add('date')
    tableCellDate.innerText = obj.date;
    tableRow.appendChild(tableCellDate);
  
    const tableCellVenue = document.createElement("td");
    tableCellVenue.classList.add('venue');
    tableCellVenue.innerText = obj.venue;
    tableRow.appendChild(tableCellVenue);

    const tableCellLocation = document.createElement("td");
    tableCellLocation.classList.add('location');
    tableCellLocation.innerText = obj.location;
    tableRow.appendChild(tableCellLocation);

    const tableCellButton = document.createElement("button");
    tableCellButton.classList.add('button');
    tableCellButton.innerText = obj.button;
    tableRow.appendChild(tableCellButton);
  
    tableBody.appendChild(tableRow);
  }
  
  for (let i = 0; i < shows.length; i++) {
    displayShowsTable(shows[i]);
  }

const tableRows = document.querySelectorAll("tr");

for (let i = 0; i < tableRows.length; i++) {
  tableRows[i].addEventListener("click", (event) => {
    // for (let j = 0; j < tableRows[i].cells.length; j++) {
      tableRows[i].classList.toggle("selected");
    // }
  })
}


//     function displayShows(sw) {
        
//     let singleShowContainer = document.createElement("section");
//     singleShowContainer.classList.add("shows__single");
//     showsContainer.appendChild(singleShowContainer);

//     let showDateHeader = document.createElement("h1");
//     showDateHeader.classList.add("shows__date-header");  
//     showDateHeader.classList.add("shows__header"); 
//     showDateHeader.innerText = sw.dateHeader;
//     singleShowContainer.appendChild(showDateHeader);

//     let showDate = document.createElement("p");
//     showDate.classList.add("shows__date");  
//     showDate.classList.add("shows__description"); 
//     showDate.innerText = sw.date;
//     singleShowContainer.appendChild(showDate);

//     let showVenueHeader = document.createElement("h1");
//     showVenueHeader.classList.add("shows__venue-header"); 
//     showVenueHeader.classList.add("shows__header");  
//     showVenueHeader.innerText = sw.venueHeader;
//     singleShowContainer.appendChild(showVenueHeader);

//     let showVenue = document.createElement("p");
//     showVenue.classList.add("shows__venue");  
//     showVenue.classList.add("shows__description"); 
//     showVenue.innerText = sw.venue;
//     singleShowContainer.appendChild(showVenue);

//     let showLocationHeader = document.createElement("h1");
//     showLocationHeader.classList.add("shows__location-header");
//     showLocationHeader.classList.add("shows__header");   
//     showLocationHeader.innerText = sw.locationHeader;
//     singleShowContainer.appendChild(showLocationHeader);

//     let showLocation = document.createElement("p");
//     showLocation.classList.add("shows__location");  
//     showLocation.classList.add("shows__description"); 
//     showLocation.innerText = sw.location;
//     singleShowContainer.appendChild(showLocation);

//     let buyTicketsButton = document.createElement("button");
//     buyTicketsButton.classList.add("shows__button");
//     buyTicketsButton.innerText = sw.button;
//     singleShowContainer.appendChild(buyTicketsButton);
// }

// for (i = 0; i < shows.length; i++) {
//     displayShows(shows[i]);
// };
