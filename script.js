const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
    "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2",
    "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^",
    "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":",
    ";", "<", ">", ".", "?",
    "/"
];
//declarations 
let password = document.querySelectorAll(".password");
const button = document.querySelector("button");
///showing the randomized passwords
button.addEventListener("click", function() {
        for (let i = 0; i < 2; i++) {
            password[i].textContent = randomize();
        }
    })
    ///randomizing the password 
function randomize() {
    let res = "";
    for (let i = 0; i < 15; i++) {
        res += characters[Math.floor(Math.random() * characters.length)];
    }
    return res;
}

////making the night and day mode
const container = document.querySelector(".container");
const h3 = document.querySelector("h3");
const first_span = document.querySelector(".first-span");
const second_span = document.querySelector(".second-span");
const light = document.querySelector("#light");
const night = document.querySelector("#night");
const hr = document.querySelector("hr");

////when the light button is clicked 
light.addEventListener("click", function() {
    // hiding the light button and showing the night button
    light.style.display = "none";
    night.style.display = "initial";
    // changing the container background
    container.classList += " light-container";
    // changing the other styles 
    first_span.classList += " light-first-span";
    second_span.classList += " light-second-span";
    h3.classList += " light-h3";
    ////changing the style of the passwords section
    for (let i = 0; i < 2; i++) {
        password[i].classList += " password-light";
    }
    //and the hr
    hr.classList += "light-hr";
})


////when the night button is clicked 
night.addEventListener("click", function() {
    //night is the svg night button 
    night.style.display = "none";
    light.style.display = "initial";
    ///changing the styles into their defaults
    container.classList = "container";
    first_span.classList = "first-span";
    second_span.classList = "second-span";
    h3.classList = "";
    for (let i = 0; i < 2; i++) {
        password[i].className = "password";
    }
    hr.classList = "";
})

///this 2 spans are for showing that the text is copied + they are shown when the passwords are clicked
const span1 = document.querySelector("#span1");
const span2 = document.querySelector("#span2");

//copying the selected password into the clipbord
function clipboard(i) {
    ///if the password is generated then copy it ,if not don't do anything
    if (password[i].textContent != "") {
        ///this is for copying it into the clipboard
        navigator.clipboard.writeText(password[i].textContent);
        ///if the selected password is the first one (look at the HTML code)
        if (i === 0) {
            span1.style.visibility = "visible";
            span1.style.transition = "visibility 500ms ease-in-out 100ms";
            ////this for seting a timout to hide the "copied " message
            setTimeout(() => {
                span1.style.visibility = "hidden";
                span1.style.transition = "visibility 500ms ease-in-out 300ms";
            }, 300);

        }
        if (i === 1) {
            span2.style.visibility = "visible";
            span2.style.transition = "visibility 500ms ease-in-out 100ms";
            setTimeout(() => {
                span2.style.visibility = "hidden";
                span2.style.transition = "visibility 500ms ease-in-out 300ms";
            }, 300);
        }

    }
}