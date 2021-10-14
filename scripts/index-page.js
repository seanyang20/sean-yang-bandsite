const commentsContainer = document.getElementById("comments");
console.log(commentsContainer); 

const user = {
    
    comments: [
      {
        name: "Connor Walton",
        timestamp: "02/17/2021",
        content: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
      },
      {
        name: "Emilie Beach",
        timestamp: "01/09/2021",
        content: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
      },
      {
        name: "Miles Acosta",
        timestamp: "12/20/2020",
        content: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough",
      },
    ],
  };

   
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
        commentContentTop.appendChild(userTimeStamp);
    
    
        let commentText = document.createElement("p");
        commentText.classList.add("comments__text");
        commentText.innerText = cm.content;
        commentContent.appendChild(commentText);
    }

    for (i = 0; i < user.comments.length; i++) {
        displayComment(user.comments[i]);
   
    };

const formEl = document.getElementById("form");
const nameInput = document.getElementById("name");
// const timeStampInput = document.querySelector("comments__timestamp");
const textInput = document.getElementById("comment-box");
console.log(formEl);

formEl.addEventListener ("submit", (event) => {     
    event.preventDefault();

    const newComment = {
        "name": nameInput.value,
        // "timestamp": timeStampInput.value,
        "content": textInput.value,
      }
    console.log(nameInput);

    displayComment(newComment);
    formEl.reset();  
})

