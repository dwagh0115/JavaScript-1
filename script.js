let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
]

// second array
let arr2 = [
    { id: 4, name: "alpha", age: "18", profession: "developer" },
    { id: 5, name: "jane", age: "20", profession: "admin" },
    { id: 6, name: "jill", age: "19", profession: "admin" }
]

// ******* spread operator ********
// let arr3 = [{all values of a}, {all the values of b}] 
// eg arr = [1,2,3,  4,5,6] 
arr = [...arr, ...arr2];
// arr = arr.concat(arr2);





// this function must have changed the age type from string to number
arr.map(function (item) {
    item.age = Number(item.age);
})

// to change the age of john to 19
arr.forEach((item) => {
    if (item.name === "john") {
        item.age = 19;
    }
})


// *********** DOM tasks ***********

// selecting the result div, dropdown and button
let result = document.getElementById("result");
let dropdown = document.getElementById("dropdown");
let btn = document.getElementById("filterBtn");
document.body.style.backgroundColor="black"



// function to filter by profession 
function filterByProfession() {
    // setting the result div to empty
    result.innerHTML = "";

    // getting the value of the dropdown
    let dropdownValue = dropdown.value;
    console.log(dropdownValue);

    // if the value is profession, then alert the user to select a profession
    if (dropdownValue == "profession") {
        alert("Please select a profession");
        return;
    }

    
    arr.forEach((item) => {

       
        if (item.profession === dropdownValue) {
            let div = document.createElement("div");
            div.innerText = item.id + ".Name:   " + "  " + item.name + "    Profession:" + item.profession + "    Age:" + item.age;
            div.style.border= "1px white solid";
            div.style.borderRadius="8px";
            div.style.padding="5px";
            div.style.height="30px";
            div.style.width="400px";
            result.append(div);
        }
    })

}


// adding event listener to the button
btn.addEventListener("click", filterByProfession)