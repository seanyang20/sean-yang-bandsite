// const apiKey = "4beb74cb-bea4-450b-be89-9eeb389e2102"
const apiURL = `https://project-1-api.herokuapp.com/comments?api_key=76856582-8ae7-439d-9487-8109eb13252e`;

// Creating container to store all posted comments 
const commentsContainer = document.querySelector(".comments__container");
console.log(commentsContainer); 
    
// Creating a displayComments Function
function displayComment(cm) {
    
// Single container to store contents of each posted comment 
let singleCommentContainer = document.createElement("section");
singleCommentContainer.classList.add("comments__single");
commentsContainer.appendChild(singleCommentContainer);

// avatar for each posted comment 
let commentAvatar = document.createElement("figure");
commentAvatar.classList.add("comments__avatar");
singleCommentContainer.appendChild(commentAvatar);

// content for each posted comment
let commentContent = document.createElement("div");
commentContent.classList.add("comments__content");
singleCommentContainer.appendChild(commentContent);

// top part of content for each posted comment to store name and timestamp
let commentContentTop = document.createElement("div");
commentContentTop.classList.add("comments__content-top");
commentContent.appendChild(commentContentTop);

// user name for each posted comment 
let userName = document.createElement("p");
userName.classList.add("comments__name");  
userName.innerText = cm.name;
commentContentTop.appendChild(userName);

// creating timestamp 
let userTimeStamp = document.createElement("div");
userTimeStamp.classList.add("comments__timestamp");
userTimeStamp.innerText = cm.timestamp;
let timeStamp = userTimeStamp.innerText;
let date = new Date(timeStamp * 1.00001);
let dateString = date.toLocaleString().split(',')[0];
console.log(dateString);
userTimeStamp.innerText = dateString;
commentContentTop.appendChild(userTimeStamp);

// creating text comment for each posted comment
let commentText = document.createElement("p");
commentText.classList.add("comments__text");
commentText.innerText = cm.comment;
commentContent.appendChild(commentText);

// creating bottom div for like and delete button 
let commentContentBottom = document.createElement('div');
commentContentBottom.classList.add('comments__content-bottom');
commentContent.appendChild(commentContentBottom);

// creating like button
let likeButton = document.createElement('button');
likeButton.classList.add('likebutton');
likeButton.innerText = 'Like';
commentContentBottom.appendChild(likeButton);


//creating counter for like button
let likeCounter = document.createElement('p');
likeCounter.classList.add('counter');
likeCounter.innerText = cm.likes;
commentContentBottom.appendChild(likeCounter);


// creating delete button
let deleteButton = document.createElement('button');
deleteButton.classList.add('deletebutton');
deleteButton.innerText = 'Delete';
commentContentBottom.appendChild(deleteButton);

// creating click functionality for like button
likeButton.addEventListener('click', (event) => {

  console.log(event);
  console.log(cm.id);
  commentsContainer.innerHTML = "";              
  addLike(cm.id);
})

// creating delete functionality for delete button
deleteButton.addEventListener('click', (event) => {

  console.log(event);
  console.log(cm);
  commentsContainer.innerHTML = "";              
  deleteComment(cm.id);
})
}

// creating axios put call to increment number of likes 
function addLike (id) { 
  axios
    .put(`https://project-1-api.herokuapp.com/comments/${id}/like?api_key=76856582-8ae7-439d-9487-8109eb13252e`)
    .then(result => {
    
    console.log(result);
    callingAxios();       // invoking get axios call to get most updated api and displaying comments 

    })
    .error(error => {
      console.log(error);
    })
}

// creating axios delete call to enable deletion of comment
function deleteComment (id) {
  axios 
    .delete(`https://project-1-api.herokuapp.com/comments/${id}/?api_key=76856582-8ae7-439d-9487-8109eb13252e`)
    .then(result => {
      console.log(result.data);
      callingAxios();           // invoking get axios call to get most updated api and displaying comments
    })
    .error(error => {
      console.log(error);
    })
}

// Storing selected elements and storing them in variables 
const formEl = document.getElementById("form");
const nameInput = document.getElementById("name");
const textInput = document.getElementById("comment-box");
const submitButton = document.getElementById("addComment");
console.log(formEl);

// creating function to submit time 
function submitTime () {
  const currentDate = new Date ();
  return `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
}
// Creating axios get call to get most updated api 
const callingAxios = async () => {
  await axios
    .get(apiURL)
    .then((result) => {
      console.log(result.data);
      commentArray = result.data;            
      console.log(commentArray);
      arrayStorage = [];
      for (i=3; i < commentArray.length; i=3){
        console.log(commentArray);
        postedComment = commentArray.pop();
        arrayStorage.push(postedComment);
      }
      console.log(arrayStorage);
      console.log(commentArray);
      commentArray.unshift(arrayStorage);
      sortedCommentArray = commentArray.flat();
      console.log(sortedCommentArray);              

      sortedCommentArray.forEach(comment => {
        displayComment(comment);                      // displays comments for the most updated api 
      })          
  })
    .catch((error) => {
      console.log(error);
    }
    )
}
callingAxios();         // the first instance of getting the api and displaying comments 

// Creating the form functionality upon clicking submit button to create a new comment 
formEl.addEventListener ("submit", async (event) => {     
  event.preventDefault();            // prevents browser from submitting upon refresh
  
  if (nameInput.value == "") {
    errorResponse(nameInput, true);
    alert("Please fill in a valid name");

    if (textInput.value == "") {
      errorResponse(textInput, true);
      alert("Please enter your comment");
    }
  } else if (textInput.value == "") {
    errorResponse(textInput, true);
    alert("Please enter your comment");
  } else {
    errorResponse(nameInput, false);
    errorResponse(textInput, false);
     // empties the container so that comments don't duplicate when displaying comments for updated api
    commentsContainer.innerHTML = "";         
    console.log(nameInput.value);
    await axios
    .post(apiURL, {
      "name": nameInput.value,
      "comment": textInput.value
    })
    .then(result => {
      console.log(result);
      console.log(result.data);
      callingAxios();                         
    })
    .catch(error => {
      console.log(error);
    })
  } 
  formEl.reset();             // Prevents form from resetting
})  
function errorResponse (field, error) {
  if (error) {
    field.style.borderColor = "#D22D2D";
  } 
 }



 