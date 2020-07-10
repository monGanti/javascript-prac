#Some Important Notes 

#Few Console Checks often used
Math.random() -> gives random number in the format < 0 , example: 0.1 , 0.2 etc
Math.random() * 6 -> this will make the number upto to the level to wanted , example 0 - 6
Math.random() + 1 -> this will make it > 0 
Math.floor() -> this will return the largest integer less than or equal to a given number.
Math.round() 

** read more here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math **

#Few UI Selections notes

##Selecting the element
document.querySelector() -> selections are at class level so always use '.'
document.querySelectorAll()
document.getElementbyID() -> note here we dont have to use "#"
document.getElementbyClass() -> note here we dont have to use '.'

##using pre defined methods on selected or manipulate element
document.querySelector(element).textContent = <some value to compare>
document.querySelector(element).style.display
document.querySlector(element).classList.add(element)
document.querySlector(element).classList.remove(element)
document.querySlector(element).classList.toggle(element)

##Event Listeners
document.querySelector(element).addEventListener(event,function({
    <this is like an IIFE here for keeping anonymous function>
}));

document.querySelector(element).addEventListener(event,init); -> here init is a function that is being invoked by Eventlisters and not called which is why there is no () here. 




