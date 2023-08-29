let inputField = document.querySelector(".card form input");
let submitBtn = document.querySelector(".card form button");
let form = document.querySelector(".card form");
let cardContainer=document.querySelector(".card > div")
let successCard=document.querySelector("#success");
let msg = document.createElement("p");
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (inputField.value==="" || emailRegex.test(inputField.value) === false) {
    inputField.style.backgroundColor = "pink";
    msg.appendChild(document.createTextNode("Valid Email Required"));
    console.log("Hello")
    msg.style.cssText = `
    color: red;
    position: absolute;
    opacity: .6;
    top: 0;
    right: 0;
    font-size: 12px;
    font-weight:700;`;
    form.appendChild(msg);
  }
  else{
    cardContainer.className="close";
    successCard.className="success";
  }
});
let mailSent=document.querySelector("#mailSent");

inputField.addEventListener("input", function (event) {
  inputField.style.backgroundColor = "white";
  msg.innerHTML="";
  mailSent.innerHTML=event.target.value;
});

let dismissBtn=document.querySelector("#dismiss");
dismissBtn.addEventListener("click",function(){
    cardContainer.className="container";
    successCard.className="close";
})