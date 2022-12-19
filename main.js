let nameId = document.getElementById("name");
let emailId = document.getElementById("email");
let whaloveId = document.getElementById("whalove");
let colorId = document.getElementById("color");
let rangeId = document.getElementById("range");

let checkboxId = document.getElementById("checkbox");
let formId = document.getElementById("form");
let errorMessage = document.getElementById("error");

let resultDiv = document.getElementById("resultdiv");
let closeDiv = document.createElement("button");
resultDiv.style.display = "none";
closeDiv.innerText = "Close";
closeDiv.id = "close-id"

resultDiv.appendChild(closeDiv)
let nameDiv = document.createElement("div");
resultDiv.appendChild(nameDiv);
nameDiv.classList.add("name-class")
let dataDiv = document.createElement("div");
resultDiv.appendChild(dataDiv);


let emailDiv = document.createElement("div");
dataDiv.appendChild(emailDiv);
dataDiv.classList.add("margin-class")
let whatLoveDiv = document.createElement("div");
dataDiv.appendChild(whatLoveDiv);  

let colorDiv = document.createElement("div");
dataDiv.appendChild(colorDiv);

let rangeDiv = document.createElement("div");
dataDiv.appendChild(rangeDiv)

let radioDiv = document.createElement("div");
dataDiv.appendChild(radioDiv)

let termDiv =document.createElement("div");
dataDiv.appendChild(termDiv)
termDiv.classList.add("underlineterm");

formId.addEventListener("submit", validation);
function validation(e) {
  e.preventDefault();

  if (nameId.value == "" || nameId.value == null || nameId.value.length < 4) {
    e.preventDefault();
    document.getElementById("namespan").innerHTML = "*Please Enter Valid Name";
    return false;
  }

  if (emailId.value == "") {
    e.preventDefault();
    document.getElementById("emailspan").innerText = "*Please fill email id.";
    return false;
  }

  if (emailId.value.indexOf("@") <= 0) {
    e.preventDefault();
    document.getElementById("emailspan").innerText =
      "*Please provide correct email id.";
    return false;
  }

  //   if(emailId.value.charAt(emailId.value.length - 4 != '.') && emailId.value.charAt(emailId.value.length - 3 != 3)){
  //     document.getElementById("emailspan").innerText =
  //       "*Please provide correct email id.";
  //     return false;
  //   }

  if (!checkboxId.checked) {
    e.preventDefault();
    document.getElementById("checkboxspan").innerText = "*Please accept terms.";
    return false;
  }

    let radioBtn = document.querySelectorAll("input[type=radio]");
    let value = false;
    let resultRadiobtn = ''
    
    for(let index = 0; index <radioBtn.length;index++){
        if(radioBtn[index].checked){
            resultRadiobtn = radioBtn[index].value;
            value = true;
        }
    }

    


  formId.style.display = "none";
  resultDiv.style.display ="block"
    
  nameDiv.textContent = `Hello ${nameId.value}`;
   emailDiv.textContent = `Email : ${emailId.value}`;
  whatLoveDiv.textContent = `You Love : ${whaloveId.value}`;
  colorDiv.textContent = `Color : ${colorId.value}`;
  rangeDiv.textContent = `Rating : ${rangeId.value / 10}`;
  radioDiv.textContent = `Book Genre : ${resultRadiobtn}`;
  termDiv.textContent = "👉 I Agreed to terms and conditions";

  document.getElementById("close-id").addEventListener('click',(e) =>{
    resultDiv.style.display = "none";
    formId.style.display = "block"
    location.reload()
  })
}   
