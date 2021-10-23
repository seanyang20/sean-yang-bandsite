const apiKey = "4beb74cb-bea4-450b-be89-9eeb389e2102"
const apiURL = `https://project-1-api.herokuapp.com/showdates?api_key=${apiKey}`;

axios
  .get(apiURL)
  .then((result) => {
    console.log(result.data);

    result.data.forEach((show => {
      displayShowsTable(show);
    }))
   
  })
  .catch((error) => {
    console.log(error);
  })


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
    date: "Mon Sept 06 2021",
    place: "Ronald Lane",
    location: "San Francisco, CA", },
    {
    date: "Tue Sept 21 2021", 
    place: "Pier 3 East",
    location: "San Francisco, CA", },
    {
    date: "Fri Oct 15 2021", 
    place: "View Lounge",
    location: "San Francisco, CA",},
    {
    date: "Sat Nov 06 2021", 
    place: "Hyatt Agency",
    location: "San Francisco, CA", },
    {
    date: "Fri Nov 26 2021", 
    place: "Moscow Center",
    location: "San Francisco, CA", },
    {
    date: "Wed Dec 15 2021", 
    place: "Press Club",
    location: "San Francisco, CA", },
]
// Creating Thead Element 
const thead = document.createElement('thead');
thead.classList.add('table__thead');
tableBody.appendChild(thead);

// Creating th tag for each key
let data = Object.keys(shows[0]);
console.log(data);
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

const displayShowsTable = (obj) => {
    const tableRow = document.createElement("tr");
    
    const tableCellDate = document.createElement("td");
    tableCellDate.classList.add('date')
    tableCellDate.innerText = obj.date;
    let timeStamp = tableCellDate.innerText;
    let date = new Date(timeStamp * 1.00001);
    let dateString = date.toString().substring(0, 15);
    tableCellDate.innerText = dateString;

    tableRow.appendChild(tableCellDate);
  
    const tableCellVenue = document.createElement("td");
    tableCellVenue.classList.add('venue');
    tableCellVenue.innerText = obj.place;
    tableRow.appendChild(tableCellVenue);

    const tableCellLocation = document.createElement("td");
    tableCellLocation.classList.add('location');
    tableCellLocation.innerText = obj.location;
    tableRow.appendChild(tableCellLocation);

    const tableCellButton = document.createElement("button");
    tableCellButton.classList.add('button');
    tableCellButton.innerText = "BUY TICKETS";
    tableRow.appendChild(tableCellButton);
  
    tableBody.appendChild(tableRow);

 
      tableRow.addEventListener("click", () => {
          tableRow.classList.toggle("selected");
      })
    }

  
  
