const slider = document.querySelector('.slider-container'), 
//array.from takes array-like obj eg:domlist and turn it into an array / from an iterable obj
slides = Array.from(document.querySelectorAll('.slide'))

//set global variable values

let isDragging = false, //false by default. represents if finger is on mobile device or mouse is clicked down in browser

//startPos is start position. wherever we click in browser or where finger is on screen
    startPos = 0,
    currentTranslate = 0,
    previousTranslate = 0,
    animationId = 0,//will use a method on the window object called requestAnimationFrame(). Returns specific id we can use to cancel requestframe
    currentIndex = 0 //reps current slide

    //loop through a function
    //.forEach is a function that accepts up to 3 arguments
    slides.forEach((slide, index) => {
        //to get rid of selecting+hovering image when img is clicked. set to individual slide, querySelector to grab the image from inside specific slide we are on
        const slideImage =  slide.querySelector('img')
        
        slideImage.addEventListener('dragstart', (e)=>e.preventDefault())
     //(e)=> run a function that takes in an event object. in event object, we call the function preventDefault(). preventDefault prevents dragging image behavior

    //Touch events

    slide.addEventListener('touchstart', touchStart
    (index))
    slide.addEventListener('touched', touchEnd)
    slide.addEventListener('touchmove', touchMove)

    //Mouse events
    slide.addEventListener('mousedown', touchStart(index))
    slide.addEventListener('mouseup', touchEnd)//when unclicked, touch ends
    slide.addEventListener('mouseleave', touchEnd)//when finger slides off the screen
    slide.addEventListener('mousemove', touchMove)
})

//to get rid of pop up menu when holding mouse down on img:

window.oncontextmenu = function(event){
    event.preventDefault()//prevent default behavior
    event.stopPropagation()//stop propagation to parent components
    return false
}

function touchStart(index){
    return function(event){
        isDragging = true
    }
function touchEnd(){
    console.log('end')
    isDragging = false
}
function touchMove(){
    console.log('move')
    if isDragging(){
        console.log('move')
    }
}