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
// topics: Array(5)  // already in an Array; can do forEach 
// 0: "javascript"
// 1: "bootstrap"
// 2: "technology"
// 3: "jquery"
// 4: "node.js"
// so response.data.topics to a const ... loop thru that?  or can create component that refers to the `${element} and appends it .. still need foreach loop

//dont technically need .catch but it is good practice.  make a const = response.data.topics then loop with a forEach ..

//.catch (earror =>{})

//document.querySelector(".topics").appendChild(???) (BASED ON THE newTab function)... Should be this .. need component function to create the tabs so we can append it.  Before we forEach?  
// tab = div  class = 'tab'  tab.textContent = (); 


 


axios.get('https://lambda-times-backend.herokuapp.com/topics')

.then(response => {
    const tabTopics = response.data.topics;
    tabTopics.forEach(element => {
        document.querySelector('.topics').appendChild(newTab(element));
    });
})
    .catch(error => {
        console.log(error);
    });  

function newTab(data) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = data;
    return tab;
};

