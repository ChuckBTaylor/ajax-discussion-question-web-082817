window.onload = function() {
  createEventListeners();
};

function createEventListeners() {
  $(".btn.btn-primary").on("click", () => {
    getFromApi();
  });
}

function getFromApi() {
  fetch(`https://randomuser.me/api/`)
    .then(res => res.json())
    .then(dolphin => getPersonInfo(dolphin.results[0]));
}

function getPersonInfo(info) {
  getName(info.name);
  getAddress(info.location);
  getContact(info);
  getDob(info);
  getPhoto(info.picture);
}

function getName(nameInfo) {
  const name = `${nameInfo.title} ${nameInfo.first} ${nameInfo.last}`;
  $("#fullname").text(name);
}

function getAddress(locationInfo) {
  const street = locationInfo.street;
  $("#street").text(street);
  const city = locationInfo.city;
  $("#city").text(city);
  const state = locationInfo.state;
  $("#state").text(state);
  const postCode = locationInfo.postcode;
  $("#postcode").text(postCode);
}

function getContact(contactInfo) {
  const cell = contactInfo.cell;
  const cellHTML = document.getElementById("cell");
  cellHTML.innerText = cell;
  const phone = contactInfo.phone;
  $("#phone").text(phone);
  const email = contactInfo.email;
  $("#email").text(email);
}

function getDob(dobInfo) {
  const dob = dobInfo.dob;
  const birth = new Date(dob);
  $("#date_of_birth").text(birth.toDateString());
}

function getPhoto(photoInfo) {
  const photoURL = photoInfo.large;
  const foto = $("#profile_picture");
  foto.attr("src", photoURL);
}
