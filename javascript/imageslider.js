const imgArray = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg']
const arrayLength = imgArray.length
let i=0
let set = setInterval(demoFunc,5000)

function demoFunc(){
    i++
    i=i%arrayLength
    //i=0%5=0
    //i=1%5=1
    //i=2%5=2
    //i=3%5=3
    //i=4%5=4
    //i=5%5=0 Hence repeats the images from 0 index
    document.querySelector('img').src = `images/${imgArray[i]}`
}

function next() {
    i++
    i=i%arrayLength
    document.querySelector('img').src = `images/${imgArray[i]}`
}
function prev() {
    i--
    if(i<0){
        i=arrayLength-1
    }
    document.querySelector('img').src=`images/${imgArray[i]}`
}

function stops() { // stops slider when mouse hover
    clearInterval(set)
}

function starts() {   // // starts slider when mouse out
    set=setInterval(demoFunc,5000)
}