function goPage(page) {

let cloud =
document.getElementById("cloud");

cloud.classList.add("active");

setTimeout(() => {

window.location.href = page;

}, 700);

}

function openDrive() {

window.open(
"https://drive.google.com/drive/folders/1AITtf4On5186LLXCSxr_VG9j-bQFW6i2",
"_blank"
);

}

function openImage(img) {

let popup =
document.getElementById("popup");

let popupImg =
document.getElementById("popup-img");

popup.style.display = "flex";

popupImg.src = img.src;

}

function closePopup() {

document.getElementById("popup")
.style.display = "none";

}