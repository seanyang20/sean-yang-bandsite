const apiKey = "4beb74cb-bea4-450b-be89-9eeb389e2102"
const apiURL = `https://project-1-api.herokuapp.com/showdates?api_key=${apiKey}`;

// Creating axios get call and displaying the showstable 
axios
  .get(apiURL)
  .then((result) => {
    console.log(result.data[0]);
    console.log(Object.keys(result.data[0]));
   
      // Creating th tag for each key
      let showsObj = Object.keys(result.data[0]);
      console.log(showsObj);
      for (let key of showsObj) {
      // Adding th tag to thead element
      if (key != "id"){
      const tableRow = document.createElement('th');
      tableRow.classList.add('table__header');
      thead.appendChild(tableRow);
      let text = document.createTextNode(key);
      tableRow.appendChild(text);
      }
    }

    result.data.forEach((show => {
      console.log(show);
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


// Creating Thead Element 
const thead = document.createElement('thead');
thead.classList.add('table__thead');
tableBody.appendChild(thead);


// Creating displayShowsTable Function
const displayShowsTable = (obj) => {

  
  // Creating each table row card 
  const tableRow = document.createElement("tr");
  
  // Creating date section in table row card 
  const tableCellDate = document.createElement("td");
  tableCellDate.classList.add('date')
  tableCellDate.innerText = obj.date;
  let timeStamp = tableCellDate.innerText;
  let date = new Date(timeStamp * 1.00001);
  let dateString = date.toString().substring(0, 15);
  tableCellDate.innerText = dateString;
  tableRow.appendChild(tableCellDate);

  // Creating venue section in each table row card 
  const tableCellVenue = document.createElement("td");
  tableCellVenue.classList.add('venue');
  tableCellVenue.innerText = obj.place;
  tableRow.appendChild(tableCellVenue);

  // Creating location section in each table row card 
  const tableCellLocation = document.createElement("td");
  tableCellLocation.classList.add('location');
  tableCellLocation.innerText = obj.location;
  tableRow.appendChild(tableCellLocation);

  // Creating button in each table row card 
  const tableCellButton = document.createElement("button");
  tableCellButton.classList.add('button');
  tableCellButton.innerText = "BUY TICKETS";
  tableRow.appendChild(tableCellButton);
  tableBody.appendChild(tableRow);

    // Creating a dynamic click class to make color stay
    tableRow.addEventListener("click", () => {
        tableRow.classList.toggle("selected");
    })
    }

  
  
