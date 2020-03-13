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




//create function that creates the articles via the data from the object.  Use multiple forEach Loops for the appending??? Not sure if its neccessary but thats what they suggested.  Website layout 

//From TL:
// Cards you can use forEach for each topic. Example: response.data.articles.javascript.forEach(e => {
//     document
//       .querySelector(".cards-container")
//       .appendChild(programArticles(e));
//   });

//so this syntax would go in the .then because we are grabbing the responses from the API;  where programArticles is the function for creating articles??  Create const for cards-container to append to 

// function newTab(data) {
//     const tab = document.createElement('div');
//     tab.classList.add('tab');
//     tab.textContent = data;
//     return tab;
// };   


//<div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>

// response.data.articles.javascript.forEach(e => {
//     //     document
//     //       .querySelector(".cards-container")
//     //       .appendChild(programArticles(e));
//     //   });


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    response.data.articles.javascript.forEach(e => {
        document.querySelector('cards-container').appendChild(newArticle(e)); 
    });
    response.data.articles.bootstrap.forEach(e => {
        document.querySelector('cards-container').appendChild(newArticle(e)); 
    });
    response.data.articles.technology.forEach(e => {
        document.querySelector('cards-container').appendChild(newArticle(e)); 
    });
    response.data.articles.jquery.forEach(e => {
        document.querySelector('cards-container').appendChild(newArticle(e)); 
    });
    response.data.articles.node.forEach(e => {
        document.querySelector('cards-container').appendChild(newArticle(e)); 
    });
    

})

.catch(error => {
    console.log(error);
});

const cardContainer = document.querySelector(".cards-container");
function newArticle(items) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorSpan = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = items.headline;
    author.textContent = items.authorName;
    img.src = items.authorPhoto;
    authorSpan.textContent = items.authorName;
    
    
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(authorSpan);
    imgContainer.appendChild(img);
    cardContainer.appendChild(card);
    
    return card;
};


// //headline: "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects"
// authorPhoto: "./assets/sir.jpg"
// authorName: "SIR RUFF'N'STUFF"