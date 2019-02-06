
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
  function add(){
	numOne = document.getElementById("num1").value;
	numTwo = document.getElementById("num2").value;
	console.log(`"${numOne}", "${numTwo}"`)
	try{
		if (numOne===''||numTwo===''||isNaN(Number(numOne))||isNaN(Number(numTwo))){
			document.getElementById("sum").innerText = 'Cannot add';
		} else {
			document.getElementById("sum").innerText = Number(numOne)+Number(numTwo);
		}
	}catch{
		document.getElementById("sum").innerText = 'Cannot add!';
	}
}

function sumEvent(){
	document.getElementById("num1").setAttribute('onchange','add()');
	document.getElementById("num2").setAttribute('onchange','add()');
}
  /*
  7. Skills Event
  NOTE: Write unobtrusive Javascript
  When user selects a skill, create an alert with a message similar to:
      "Are you sure CSS is one of your skills?"
  NOTE: no alert should appear when user deselects a skill.
   */
  function skillAlert(selected){
	window.alert(`"Are you sure ${selected} is one of your skills?"`);
}

function setSkill(){
	empList = document.getElementsByName("skills");
	empList.forEach(Element =>{
		Element.setAttribute('onchange','skillAlert(this.value)');
	});
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
    const employees = document.getElementsByClassName('empName');

    for (let i = 0; i < employees.length; i++) {
        employees[i].addEventListener('mouseover', function() {
            if (employees[i].style.color === 'black') {
                employees[i].style.color = 'transparent';
            } else {
                employees[i].style.color = 'black';
            }
        })
    }
  }
  /*
  9. Show/Hide Event
  NOTE: Write unobtrusive Javascript
  When user hovers over an employees name:
      Hide the name if shown.
      Show the name if hidden.
   */
  function showHide(text){
	console.log(text);
	fullList = document.querySelectorAll(".empName");
	filteredList = [];
	fullList.forEach(Element =>{
		if(Element.innerHTML === text){
			if(Element.innerHTML.includes("visibility:visible")){
				Element.innerHTML = Element.innerHTML.replace('visibility:visible', 'visibility:hidden');
			}else{
				Element.innerHTML = Element.innerHTML.replace('visibility:hidden', 'visibility:visible');
			}
		}
	});
}

function setShowHide(){
	empList = document.querySelectorAll(".empName");
	empList.forEach(Element =>{
		Element.innerHTML = `<div style="visibility:visible">${Element.innerHTML}</div>`;
	});
	empList.forEach(Element =>{
		Element.setAttribute('onmouseover','showHide(this.innerHTML)');
	});
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
sumEvent();
setSkill();
favoriteColorEvent();
setShowHide();
currentTime();
colorDelay();
console.log('\n');
console.log('Question 12:');
walkTheDOM(document.body , func);