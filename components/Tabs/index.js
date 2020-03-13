// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//array1.forEach(element => console.log(element)); :::: syntax

// axios.get('url')    .then(response =>{})
//console.log(response.data);  so data.topics? 
// //Object
// topics: Array(5)
// 0: "javascript"
// 1: "bootstrap"
// 2: "technology"
// 3: "jquery"
// 4: "node.js"
// so response.data.topics to a const ... loop thru that?  or can create component that refers to the `${element} and appends it .. still need foreach loop

axios.get('https://lambda-times-backend.herokuapp.com/topics')

.then(response => {
    response.data.topics  
})

