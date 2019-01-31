
    /*
    1. USA
    Define function getUSA()
    Find the html element that contains "USA".
    Print that element's contents.*/
function getUSA(){
    let attr = document.getElementsByTagName("span");
    console.log(attr[1].innerHTML);
}

   /*
    2. Sales
    Define function getPeopleInSales()
    Print the names of all the people in the sales department.*/
function getPeopleInSales() {
    let x = document.getElementsByClassName("empName");
    for (let index = 0; index < x.length; index++) {
      const element = x[index];
      if (element.nextElementSibling.innerHTML === 'Sales') {
        console.log(element.innerHTML);
      }
    }
  }

   /*
    3. Click Here
    Define function getAnchorChildren()
    Find all anchor elements with a <span> child.
    Print the contents of <span>
     */
    function getAnchorChildren(){
      let temp = document.getElementsByTagName("a");
      for (let i = 0; i < temp.length; i++){
          for(let k = 0; k < temp[i].childNodes.length; k++){
              if(temp[i].childNodes[k].localName == "span"){
                  console.log(temp[i].childNodes[k].innerHTML)
              }
          }
      }
  }
  /*
  4. Hobbies
  Define function getHobbies()
  Find all checked options in the 'skills' select element.
  Print the value and the contents.
   */

  function getHobbies() {
    let set = document.getElementsByName('skills');
    for (let i = 1; i <= 12; i = i + 2) {
      console.log(set[0].childNodes[i].innerHTML);
    }
  }

  /*
  5. Custom Attribute
  Define function getCustomAttribute()
  Find all elements with "data-customAttr" attribute
  Print the value of the attribute.
  Print the element that has the attribute.
   */
  function getCustomAttribute() {
      let temp = document.querySelectorAll("[data-customAttr]");
      temp.forEach(function (stuff) {
          for(let i = 0; i < stuff.attributes.length; i++){
              if(stuff.attributes[i].localName == "data-customattr"){
                  console.log("Value of attribute: " + stuff.attributes[i].value);
                  console.log("Element in attribute: " + stuff.innerHTML);
              }
          }
      });
  }
  /*
  6. Sum Event
  NOTE: Write unobtrusive Javascript
  Regarding these elements:
      <input id="num1" class="nums" type="text"/>
      <input id="num2" class="nums" type="text"/>
      <h3>Sum: <span id="sum"></span></h3>
  Define onchange event handler.
  Add <input> element values.
  Put the sum in the <span> element.
  If values cannot be added, put "Cannot add" in the <span> element
   */
  function sumEvent() {
      let num1 = document.getElementById("num1");
      let num2 = document.getElementById("num2");
      let displaySum = document.getElementById("sum");
      let number1 = num1.value;
      let number2 = num2.value;
      let sum = +number1 + +number2;
      if(!isNaN(+number1) && !isNaN(+number2)){
          displaySum.innerHTML = sum;
      }
      else {
          console.log("Cannot add");
      }
  }
  /*
  7. Skills Event
  NOTE: Write unobtrusive Javascript
  When user selects a skill, create an alert with a message similar to:
      "Are you sure CSS is one of your skills?"
  NOTE: no alert should appear when user deselects a skill.
   */
  function skillsEvent() {
      let temp = document.querySelectorAll("select[name='skills']");
      let selected = temp[0].options[temp[0].selectedIndex].text
      alert("Are you sure " + selected + "is one of you skills?");
  }
  /*
  8. Favorite Color Event
  NOTE: Write unobtrusive Javascript
  NOTE: This is regarding the favoriteColor radio buttons.
  When a user selects a color, create an alert with a message similar to:
      "So you like green more than blue now?"
  In this example, green is the new value and blue is the old value.
  Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
   */
  function favoriteColorEvent() {
      let temp = document.querySelectorAll("input[name='favoriteColor']");
      let oldColor;
      let newColor;
      for (let i = 0; i < temp.length; i++){
          if(temp[i].checked){
              if(newColor != temp[i].value){
                  oldColor = newColor;
                  newColor = temp[i].value;
                  alert("So you like " + newColor + " more than " + oldColor + " now?");
              }
          }
      }
  }
  /*
  9. Show/Hide Event
  NOTE: Write unobtrusive Javascript
  When user hovers over an employees name:
      Hide the name if shown.
      Show the name if hidden.
   */
  function showEvent() {
      let temp = document.getElementsByClassName("empName");
      for (let i = 0; i < temp.length; i++) {
          temp[i].style.visibility = "visible";
      }
  }
  function hideEvent() {
      let temp = document.getElementsByClassName("empName");
      for(let i = 0; i < temp.length; i++) {
          temp[i].style.visibility = "hidden";
      }
  }
  /*
  10. Current Time
  Regarding this element:
      <h5 id="currentTime"></h5>
  Show the current time in this element in this format: 9:05:23 AM
  The time should be accurate to the second without having to reload the page.
   */
  function currentTime(){
    //since we have to refresh the time by seconds, we use setInterval(function, 1000) function.
    let theTimeTimer = setInterval(function () {

        let c = document.getElementById("currentTime");
        //display the date.
        let t = new Date(Date.now());
        c.innerText = t.toLocaleTimeString();
    }, 1000);

};
  /*
  11. Delay
  Regarding this element:
      <p id="helloWorld">Hello, World!</p>
  Three seconds after a user clicks on this element, change the text to a random color.
   */
  function colorDelay(){
    document.getElementById("helloWorld").addEventListener("click", function ()
     {
          setTimeout(function () 
          {
              //define the colors first.
              let r = Math.floor(Math.random()*255);
              let g = Math.floor(Math.random()*255);
              let b = Math.floor(Math.random()*255);
              let rgb = "rgb("+ r +", "+ g +", "+ b +")";

              document.getElementById("helloWorld").style.color = rgb;
          }, 3000)
      });
  };
  /*
  12. Walk the DOM
  Define function walkTheDOM(node, func)
  This function should traverse every node in the DOM. Use recursion.
  On each node, call func(node).
   */
  
  function walkTheDOM(node, func) {
    func(node)
    node = node.firstChild
    while (node) {
      walkTheDOM(node, func)
      node = node.nextSibling
    }
  }
  function func(node) {
    console.log(node);
  }



// Calling the functions to start the processes.
console.log('Question 1:');
getUSA();
console.log('\n');
console.log('Question 2:');
getPeopleInSales();
console.log('\n');
console.log('Question 3:');
getAnchorChildren();
console.log('\n');
console.log('Question 4:');
getHobbies();
console.log('\n');
console.log('Question 5:');
getCustomAttribute();
console.log('\n');
sumEvent();
console.log('\n');
console.log('Question 7:');
skillsEvent();
console.log('\n');
favoriteColorEvent();
console.log('\n');
showEvent();
console.log('\n');
hideEvent();
currentTime();
colorDelay();
console.log('\n');
// walkTheDOM(document.body , func);