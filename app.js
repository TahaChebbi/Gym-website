function calculateBMI() {
  // Input is string so typecasting is necessary. */
  let height = parseInt(document.getElementById("height").value);

  // Input is string so typecasting is necessary.*/
  let weight = parseInt(document.getElementById("weight").value);

  let result = document.getElementById("result");

  // Checking the user providing a proper
  // value or not
  if (height === "" || isNaN(height)) {
    result.innerHTML = "Provide a valid Height!";
    result.style.color = "white";
  } else if (weight === "" || isNaN(weight)) {
    result.innerHTML = "Provide a valid Weight!";
    result.style.color = "white";
  }

  // If both input is valid, calculate the bmi
  else {
    // Fixing upto 2 decimal places
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Dividing as per the bmi conditions
    if (bmi < 18.6) {
      result.innerHTML = `******** Under Weight : <span>${bmi}</span> ********`;
      result.style.color = "white";
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = `******** Normal Weight : <span>${bmi}</span> ********`;
      result.style.color = "white";
    } else {
      result.innerHTML = `******** Over Weight : <span>${bmi}</span> ********`;
      result.style.color = "white";
    }
  }
}

function signup2() {
  var test = true;
  var firstName = document.getElementById("firstName").value;
  if (firstName.length < 3) {
    document.getElementById("firstNameerror").innerHTML =
      "Must have minimum 3 characters";
    document.getElementById("firstNameerror").style.color = "red";
    test = false;
  } else {
    document.getElementById("firstNameerror").innerHTML = "";
  }
  var lastName = document.getElementById("lastName").value;
  if (lastName.length < 5) {
    document.getElementById("LastNameerror").innerHTML =
      "Must have minimum 5 characters";
    document.getElementById("LastNameerror").style.color = "red";
    test = false;
  } else {
    document.getElementById("LastNameerror").innerHTML = "";
  }
  var email = document.getElementById("Email").value;
  var k = mail(email);
  var verifEmail = validateEmail(email);
  if (!verifEmail) {
    document.getElementById("emailError").innerHTML = "Invalid Email";
    document.getElementById("emailError").style.color = "red";
    test = false;
  } else if (k == true) {
    document.getElementById("emailError").innerHTML = "Email existe";
    document.getElementById("emailError").style.color = "red";
    test = false;
  } else {
    document.getElementById("emailError").innerHTML = "";
  }

  var telephone = document.getElementById("telephone").value;
  if (!isNaN(telephone) && telephone.length != 8) {
    document.getElementById("telError").innerHTML = "Invalid Phone";
    document.getElementById("telError").style.color = "red";
    test = false;
  } else {
    document.getElementById("telError").innerHTML = "";
  }
  var pass = document.getElementById("pass").value;
  var verifpass = checkPassword(pass);
  if (!verifpass) {
    document.getElementById("passError").innerHTML = "Invalid Password";
    document.getElementById("passError").style.color = "red";
    test = false;
  } else {
    document.getElementById("passError").innerHTML = "";
  }
  var confirmPass = document.getElementById("confirmPass").value;
  if (pass != confirmPass) {
    document.getElementById("confirmpassError").innerHTML =
      "Confirmation n'est pas identique";
    document.getElementById("confirmpassError").style.color = "red";
    test = false;
  } else {
    document.getElementById("confirmpassError").innerHTML = "";
  }

  if (test) {
    var idUser = JSON.parse(localStorage.getItem("idUser") || "10");
    var user = {
      id: idUser,
      firstName: firstName,
      lastName: lastName,
      email: email,
      telephone: telephone,
      pass: pass,
    };
    var users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("idUser", idUser + 1);
    location.reload();
  }
}
function insertAdmin() {
  var admin1 = {
    id: 1,
    firstName: "admin1",
    lastName: "admin1",
    email: "admmin1@gmail.com",
    pass: "123",
    tel: "55151511",
    role: "admin",
  };

  var users = JSON.parse(localStorage.getItem("users") || "[]");
  users.push(admin1);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("adminsAdded", true);
}

function checkPassword(str) {
  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
  return re.test(str);
}
function mail(email) {
  var exist = false;
  var users = JSON.parse(localStorage.getItem("users") || "[]");
  for (let i = 0; i < users.length; i++) {
    if (email == users[i].email) {
      exist = true;
      break;
    }
  }

  return exist;
}
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function verifcompte() {
  var em = document.getElementById("email").value;
  var pas = document.getElementById("password2").value;
  var users = JSON.parse(localStorage.getItem("users") || "[]");
  var findedUser;
  for (let i = 0; i < users.length; i++) {
    if (em == users[i].email && pas == users[i].pass) {
      findedUser = users[i];
      break;
    }
  }
  if (findedUser) {
    if (findedUser.email == "admmin1@gmail.com" && findedUser.pass == "123") {
      location.replace("Dashbord.html");
      localStorage.setItem("connectedUser", JSON.stringify(findedUser));
    } else {
      // user exist
      localStorage.setItem("connectedUser", JSON.stringify(findedUser));
      // redirection
      location.replace("PageInitiale2.html");
    }
  } else {
    document.getElementById("compte").innerHTML = "Account does not exist";
    document.getElementById("compte").style.color = "red";
  }
}

function affichePopUp() {
  var connectUser = JSON.parse(localStorage.getItem("connectedUser"));
  var t = `<p style="color:black;">Mr(s)${connectUser.firstName} ${connectUser.lastName}<br>You will be Transfered to fill a form<br><br><br><b>Click on Transfer</b></p> `;
  document.getElementById("affichePopUp").innerHTML = t;
}

function reload() {
  location.reload();
}

function pop() {
  var test = true;
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var date = document.getElementById("date").value;
  var email = document.getElementById("mail").value;
  var nameClass = document.getElementById("nameClass").value;
  var phone = document.getElementById("cellphone").value;

  var verifEmail = validateEmail(email);
  if (!verifEmail) {
    document.getElementById("emailEror").innerHTML = "Invalid Email";
    document.getElementById("emailEror").style.color = "red";
    test = false;
  } else {
    document.getElementById("emailEror").innerHTML = "";
  }

  if (!isNaN(phone) && phone.length == 8) {
    document.getElementById("phoneEror").innerHTML = "";
  } else {
    document.getElementById("phoneEror").innerHTML = "Invalid Phone";
    document.getElementById("phoneEror").style.color = "red";
    test = false;
  }
  if (test) {
    var idUser = JSON.parse(localStorage.getItem("idUser") || "10");
    var user1 = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      date: date,
      nameClass: nameClass,
      id: idUser,
    };

    var users = JSON.parse(localStorage.getItem("Reservation") || "[]");
    users.push(user1);
    localStorage.setItem("Reservation", JSON.stringify(users));
    alert("Your Reservation Has Been Completed , Thank You For Your Time");
    localStorage.setItem("idUser", idUser + 1);
    location.replace("PageInitiale2.html");
  }
}

function affichePopUp2() {
  var connectUser = JSON.parse(localStorage.getItem("connectedUser"));
  var t = `<p style="color:black;">Mr(s)${connectUser.firstName} ${connectUser.lastName}<br>You Paiement has been done , Thank you for your confidence to our program</p> `;
  document.getElementById("affichePopUp2").innerHTML = t;
}

function paiement() {
  var test = true;
  var card = document.getElementById("cardNumber").value;
  var date = document.getElementById("date").value;
  var cvc = document.getElementById("cvc").value;
  var paiement = JSON.parse(localStorage.getItem("Paiement") || "[]");
  var connectUserr = JSON.parse(localStorage.getItem("connectedUser") || "[]");

  if (card.length == 16 && !isNaN(card)) {
    document.getElementById("cardError").innerHTML = "";
  } else {
    document.getElementById("cardError").innerHTML = "16 Numbers Only";
    document.getElementById("cardError").style.color = "red";
    test = false;
  }
  if (test) {
    var idUser = JSON.parse(localStorage.getItem("idUser") || "10");
    var user1 = {
      firstName: connectUserr.firstName,
      lastName: connectUserr.lastName,
      cardNumber: card,
      cvc: cvc,
      Expiry_Date: date,
      id: idUser,
    };
    paiement.push(user1);
    localStorage.setItem("Paiement", JSON.stringify(paiement));
    localStorage.setItem("idUser", idUser + 1);
    alert("Your Paiement has been Completed");
    location.reload();
  }
}

function quiz() {
   var crt1 = document.getElementById("correct2");
  
   for (let i = 1; i <= 4; i++) {
    
    var crt2 = document.getElementById(`bd${[i]}`);
   
    if (crt2.checked==true) {
      alert("you lost your quiz")
      break
    }
    
   }
  // var crt2 = document.getElementById("correct2");
  // var crt3 = document.getElementById("correct3");

      if (crt1.checked==true) {
        alert("You Won This Quiz , So You Will Have A 20% Discount On Our Membership .\nEvery Price Will Be -20 dt.");
        location.replace("offers.html")    
      }
      



  //   location.reload();
  // if (crt1.checked == true && crt2.checked == true && crt3.checked == true) {
  //   alert(
  //     "You Won This Quiz , So You Will Have A 20% Discount On Our Membership .\nEvery Price Will Be -20 dt."
  //   );
  //   location.replace("offers.html");
  // }
  // var bd1 = document.getElementById("bd1");
  // var bd2 = document.getElementById("bd2");
  // var bd3 = document.getElementById("bd3");
  // var bd4 = document.getElementById("bd4");
  // var bd5 = document.getElementById("bd5");
  // var bd6 = document.getElementById("bd6");
  // var bd7 = document.getElementById("bd7");
  // var bd8 = document.getElementById("bd8");
  // var bd9 = document.getElementById("bd9");
  // if (
  //   bd1.checked == true ||
  //   bd2.checked == true ||
  //   bd3.checked == true ||
  //   bd4.checked == true ||
  //   bd5.checked == true ||
  //   bd6.checked == true ||
  //   bd7.checked == true ||
  //   bd8.checked == true ||
  //   bd9.checked == true
  // ) {
  //   alert("We Are Sorry , You Didn't Complete Our Quiz Successfully");
  //   location.reload();
  // }
}

function removeKey() {
  window.localStorage.removeItem("connectedUser");
}

function addUser() {
  var user = JSON.parse(localStorage.getItem("users") || "[]");

  var t = `  <table class="table bg-white rounded shadow-sm  table-hover">
    <thead>
        <tr>
           
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Téléphone</th>
            <th scope="col">Email</th>

        </tr>
    </thead>
  <tbody> `;
  for (let i = 0; i < user.length; i++) {
    t += `
        
        <tr>
            <td >${user[i].firstName}</td>
            <td>${user[i].lastName}</td>
            <td>${user[i].telephone}</td>
            <td>${user[i].email}</td>
            <td>
            
            <button type="button" class="btn" style="background-color: #9a141f; color:white;" onclick="deleteuser(${user[i].id},'users')">Delete</button> 
        </td>
            
      </tr> 
      

        `;
  }
  t += `    </tbody>
    </table>`;
  document.getElementById("user2").innerHTML = t;
}
function deleteuser(id, key) {
  var objcects = JSON.parse(localStorage.getItem(key) || "[]");
  var pos;
  for (let i = 0; i < objcects.length; i++) {
    if (id == objcects[i].id) {
      pos = i;
      break;
    }
  }
  objcects.splice(pos, 1);
  localStorage.setItem(key, JSON.stringify(objcects));
  location.reload();
}

function addPaiement() {
  var paiement = JSON.parse(localStorage.getItem("Paiement") || "[]");

  var t = `  
    <table class="table bg-white rounded shadow-sm  table-hover">
    <thead>
        <tr>
           
            <th scope="col">Card_Expiry_Date</th>
            <th scope="col">Card Number</th>
            <th scope="col">CVC</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>

        </tr>
    </thead>
  <tbody> `;
  for (let i = 0; i < paiement.length; i++) {
    t += `
        
        <tr>
            <td >${paiement[i].Expiry_Date}</td>
            <td>${paiement[i].cardNumber}</td>
            <td>${paiement[i].cvc}</td>
            <td>${paiement[i].firstName}</td>
            <td>${paiement[i].lastName}</td>
            <td>
            
            <button type="button" class="btn" style="background-color: #9a141f; color:white;" onclick="deleteuser(${paiement[i].id},'Paiement')">Delete</button> 
        </td>
            
      </tr> 
      

        `;
  }
  t += `    </tbody>
    </table>`;
  document.getElementById("paiement2").innerHTML = t;
}

function addReservation() {
  var reservation = JSON.parse(localStorage.getItem("Reservation") || "[]");

  var t = `  
    <table class="table bg-white rounded shadow-sm  table-hover">
    <thead>
        <tr>
           
            <th scope="col">Date</th>
            <th scope="col">Class Name</th>
            <th scope="col">Phone</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>

        </tr>
    </thead>
  <tbody> `;
  for (let i = 0; i < reservation.length; i++) {
    t += `
        
        <tr>
            <td >${reservation[i].date}</td>
            <td>${reservation[i].nameClass}</td>
            <td>${reservation[i].phone}</td>
            <td>${reservation[i].firstName}</td>
            <td>${reservation[i].lastName}</td>
            <td>
            
            <button type="button" class="btn" style="background-color: #9a141f; color:white;" onclick="deleteuser(${reservation[i].id},'reservation')">Delete</button> 
        </td>
            
      </tr> 
      

        `;
  }
  t += `    </tbody>
    </table>`;
  document.getElementById("reservation2").innerHTML = t;
}

// *********************************
// A page can't be manipulated safely until the document is "ready."

$(document).ready(function () {
  var user1ans1 = document.querySelector(".user1ans1");
  user1ans1.addEventListener("click", function () {
    setTimeout(function () {
      $("#bot2").show();
      $("#user2").show();
    }, 500);
  });
  var btnsub = document.querySelector("#btnsub");
  btnsub.addEventListener("click", function (e) {
    e.preventDefault();
    setTimeout(function () {
      $("#bot3").show();
      $("#user3").show();
    }, 500);
  });

  var thankyou = document.querySelector(".thankyou");
});

// settimeout : sets a timer (a countdown set in milliseconds) for an execution of a callback function (miliseconds)
