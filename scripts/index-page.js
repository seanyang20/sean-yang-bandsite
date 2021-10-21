// const apiKey = "4beb74cb-bea4-450b-be89-9eeb389e2102"
const apiURL = `https://project-1-api.herokuapp.com/comments?api_key=1276acf1-92b5-403f-88a6-3c501e8b6857`;


const commentsContainer = document.querySelector(".comments__container");
console.log(commentsContainer); 
    
    comments = [
      {
        name: "Connor Walton",
        timestamp: "02/17/2021",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
      },
      {
        name: "Emilie Beach",
        timestamp: "01/09/2021",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
      },
      {
        name: "Miles Acosta",
        timestamp: "12/20/2020",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough",
      },
    ]

    constlikeButton = document.createElement('button');
    deleteButton = document.createElement('button');

    function displayComment(cm) {
        

        let singleCommentContainer = document.createElement("section");
        singleCommentContainer.classList.add("comments__single");
        commentsContainer.appendChild(singleCommentContainer);
    
    
        let commentAvatar = document.createElement("figure");
        commentAvatar.classList.add("comments__avatar");
        singleCommentContainer.appendChild(commentAvatar);
        
    
        let commentContent = document.createElement("div");
        commentContent.classList.add("comments__content");
        singleCommentContainer.appendChild(commentContent);
        
     
        let commentContentTop = document.createElement("div");
        commentContentTop.classList.add("comments__content-top");
        commentContent.appendChild(commentContentTop);
    
    
        let userName = document.createElement("p");
        userName.classList.add("comments__name");  
        userName.innerText = cm.name;
        commentContentTop.appendChild(userName);
    
    
        let userTimeStamp = document.createElement("div");
        userTimeStamp.classList.add("comments__timestamp");
        userTimeStamp.innerText = cm.timestamp;
        let timeStamp = userTimeStamp.innerText;
        let date = new Date(timeStamp * 1.00001);
        // date.toLocaleString();
        let dateString = date.toLocaleString().split(',')[0];
        console.log(dateString);
        userTimeStamp.innerText = dateString;
        commentContentTop.appendChild(userTimeStamp);
    
    
        let commentText = document.createElement("p");
        commentText.classList.add("comments__text");
        commentText.innerText = cm.comment;
        commentContent.appendChild(commentText);

        // creating bottom div for like and delete button 
        commentContentBottom = document.createElement('div');
        commentContentBottom.classList.add('comments__content-bottom');
        commentContent.appendChild(commentContentBottom);

        // creating like button
        likeButton = document.createElement('button');
        likeButton.classList.add('likebutton');
        likeButton.innerText = 'Like';
        commentContentBottom.appendChild(likeButton);

        //creating counter for like button
        likeCounter = document.createElement('p');
        likeCounter.classList.add('counter');
        likeCounter.innerText = 0;
        commentContentBottom.appendChild(likeCounter);

        
   
        
         // creating delete button
         deleteButton = document.createElement('button');
         deleteButton.classList.add('deletebutton');
         deleteButton.innerText = 'Delete';
         commentContentBottom.appendChild(deleteButton);

    }


const formEl = document.getElementById("form");
const nameInput = document.getElementById("name");
const textInput = document.getElementById("comment-box");
const submitButton = document.getElementById("addComment");
console.log(formEl);

function submitTime () {
  const currentDate = new Date ();
  return `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
}

const newComment = {
  "name": nameInput.value,
  "timestamp": submitTime(),
  "content": textInput.value,
}
// function addingComment () {
//   commentsContainer.innerHTML = "";
//   comments.unshift(newComment);
//   comments.forEach(comment => {
//     displayComment(comment);
//   });
// }
const callingAxios = async () => {
  await axios
    .get(apiURL)
    .then((result) => {
     
      for (i = 0; i < result.data.length; i++) {
        displayComment(result.data[i]);
        console.log(result.data[i]);
      };
   
    })
    .catch((error) => {
      console.log(error);
    }
    )
  }
  callingAxios();

formEl.addEventListener ("submit", async (event) => {     
    event.preventDefault();

    // const newComment = {
    //   "name": nameInput.value,
    //   "timestamp": submitTime(),
    //   "comment": textInput.value,
    // }
   
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
      commentsContainer.innerHTML = "";
      console.log(nameInput.value);
      await axios
      .post(apiURL, {
        "name": nameInput.value,
        // "timestamp": submitTime(),
        "comment": textInput.value
      })
      .then(result => {
        // displayAddedComment(result.data);
        console.log(result);
        callingAxios();
      })
      .catch(error => {
        console.log(error);
      })
 
      
    }
    
  
   formEl.reset();  
})
function errorResponse (field, error) {
  if (error) {
    field.style.borderColor = "#D22D2D";
  } 
 }

 function likesButtonEvent (){
 var likesButton = document.querySelector('likebutton');

 likesButton.addEventListener('click', (event) => {
  event.preventDefault();
  let likeButtonURL = `https://project-1-api.herokuapp.com/comments/${id}/like?api_key=1276acf1-92b5-403f-88a6-3c501e8b6857`;
  let id = event.target.closest('.likebutton').getAttribute('id');
  console.log(id);
  axios
    .put(likeButtonURL,{ 
      
    })
    .then((result) => {
      result.find()
    }
    )
    .catch((error) => {
      console.log(error);
    })
})
 }
