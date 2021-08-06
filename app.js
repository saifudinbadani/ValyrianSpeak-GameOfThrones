// Declaring variables and constants

var translateButton = document.querySelector("#button");
var txtInput = document.querySelector("#textarea1")
var translatedText = document.querySelector("#translatedText")
var url = "https://api.funtranslations.com/translate/valyrian.json"
//  added encoding
const encodedUrl = encodeURI(url)


// created function that will attach text input with url
function constructUrl(text) {
    return encodedUrl + "?text=" + text
}

// error handling
function errorHandler(error){
    console.log("Error occured" + error)
    alert("Try again after sometime.")
}

// created function for what to happen when translate button is clicked.
function clicked() {
    // taking input
    var input = txtInput.value

    // promise

    fetch(constructUrl(input))
        .then(response => response.json())
        .then(json => {
            var translation = json.contents.translated;
            translatedText.innerText = translation;
            
        })
        .catch(errorHandler)

}



// added callback function to click
translateButton.addEventListener("click", clicked)