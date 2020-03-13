// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


// //axios.get('https://lambda-times-backend.herokuapp.com/topics')

// .then(response => {
//     const tabTopics = response.data.topics;
//     tabTopics.forEach(element => {
//         document.querySelector('.topics').appendChild(newTab(element));
//     });
// })
//     .catch(error => {
//         console.log(error);
//     });  


// //Object
// data:
// articles: {javascript: Array(4), bootstrap: Array(3), technology: Array(3), jquery: Array(3), node: Array(2)}      
// so response.data.articles.javascript
// response.data.articles.bootstrap 
// response.data.articles.technology
// response.data.articles.jquery
// response.data.articles.node


//<div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>

//create function that creates the articles via the data from the object.  Use multiple forEach Loops for the appending??? Not sure if its neccessary but thats what they suggested.  Website layout 

//From TL:
// Cards you can use forEach for each topic. Example: response.data.articles.javascript.forEach(e => {
//     document
//       .querySelector(".cards-container")
//       .appendChild(programArticles(e));
//   });


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response);
})