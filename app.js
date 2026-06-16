
/*index*/
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
themeBtn.innerHTML = "☀️";
}
else{
themeBtn.innerHTML = "🌙";
}

});
/*Register*/

const registerForm =
document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit", function(e){

e.preventDefault();

const name =
document.getElementById("name").value;

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

const user = {
name,
email,
password
};

localStorage.setItem(email,
JSON.stringify(user));

alert("Registration Successful");

window.location.href = "login.html";

});
}


/*Login*/

const loginForm =
document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit", function(e){

e.preventDefault();

const email =
document.getElementById("loginEmail").value;

const password =
document.getElementById("loginPassword").value;

const storedUser =
JSON.parse(localStorage.getItem(email));

if(
storedUser &&
storedUser.password === password
){

localStorage.setItem(
"loggedInUser",
JSON.stringify(storedUser)
);

alert("Login Successful");

window.location.href =
"dashboard.html";

}
else{

alert("Invalid Email or Password");

}

});

}

/*destination*/

const destinations = [

{
name:"Taj Mahal",
location:"Agra",
image:"tajmahal.jpeg"
},

{
name:"Jaipur",
location:"Rajasthan",
image:"jaipur.jpg"
},

{
name:"Goa",
location:"Goa",
image:"goa.jpeg"
},

{
name:"Varanasi",
location:"Uttar Pradesh",
image:"images/varanasi.jpg"
},

{
name:"Kerala",
location:"Kerala",
image:"images/kerala.jpg"
}

];

const container =
document.getElementById(
"destinationContainer"
);

function displayDestinations(data){

container.innerHTML="";

data.forEach(place=>{

container.innerHTML += `

<div class="destination-card">

<img src="${place.image}">

<h3>${place.name}</h3>

<p>${place.location}</p>

<button onclick="saveFavorite('${place.name}')">
Add Favorite
</button>

</div>

`;

});

}

displayDestinations(destinations);

document
.getElementById("searchInput")
.addEventListener("keyup",(e)=>{

const search =
e.target.value.toLowerCase();

const filtered =
destinations.filter(place=>

place.name
.toLowerCase()
.includes(search)

);

displayDestinations(filtered);

});

function saveFavorite(place){

let favorites =
JSON.parse(
localStorage.getItem("favorites")
) || [];

if(!favorites.includes(place)){

favorites.push(place);

localStorage.setItem(
"favorites",
JSON.stringify(favorites)
);

alert(place + " Added");

}
}


/*booking,packages*/

const urlParams =
new URLSearchParams(
window.location.search
);

const selectedPackage =
urlParams.get("package");

document.getElementById(
"packageName"
).value = selectedPackage;

document
.getElementById("bookingForm")
.addEventListener("submit",

function(e){

e.preventDefault();

const booking = {

name:
document.getElementById(
"customerName"
).value,

package:
document.getElementById(
"packageName"
).value,

date:
document.getElementById(
"travelDate"
).value,

hotel:
document.getElementById(
"hotel"
).value

};

let bookings =
JSON.parse(
localStorage.getItem("bookings")
) || [];

bookings.push(booking);

localStorage.setItem(
"bookings",
JSON.stringify(bookings)
);

alert("Booking Successful");

window.location.href =
"dashboard.html";

});
