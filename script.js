// alert("loading");
  function addNewAQField() {
    //   console.log("Adding new field");

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");
  
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
  }

  function addNewWEField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");
  
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
  }

  function addNewPJField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("pjField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let pjOb = document.getElementById("pj");
    let pjAddButtonOb = document.getElementById("pjAddButton");

    pjOb.insertBefore(newNode, pjAddButtonOb);
  }
  
  //generating cv
  function generateCV() {
    // console.log("generating CV");

    let nameField = document.getElementById("nameField").value;
    
    let nameT1 = document.getElementById("nameT1");
    
    nameT1.innerHTML = nameField;
    
    //direct
    document.getElementById("nameT2").innerHTML = nameField;
  
    //contactnumber
    document.getElementById("contactnumberT").innerHTML = document.getElementById(
      "contactnumberField"
    ).value;
  
    //permanentaddress
    document.getElementById("permanentaddressT").innerHTML = document.getElementById(
      "permanentaddressField"
    ).value;

    //dateofbirth
    document.getElementById("dateofbirthT").innerHTML = document.getElementById(
      "dateofbirthField"
    ).value;

    //gender
    document.getElementById("genderT").innerHTML = document.getElementById(
      "genderField"
    ).value;

    //nationality
    document.getElementById("nationalityT").innerHTML = document.getElementById(
      "nationalityField"
    ).value;

    //languagesknown
    document.getElementById("languagesknownT").innerHTML = document.getElementById(
      "languagesknownField"
    ).value

    //careerobjective
    document.getElementById("careerobjectiveT").innerHTML = document.getElementById(
      "careerobjectiveField"
    ).value;

    //skills
    document.getElementById("skillsT").innerHTML = document.getElementById(
      "skillsField"
    ).value;
  
    //eq
     let aqs = document.getElementsByClassName("eqField");
     let str = "";
     for (let e of aqs) {
      str = str + `<li> ${e.value} </li>`;
     }
     document.getElementById("aqT").innerHTML = str;

    //we
    let wes = document.getElementsByClassName("weField");
    let str1 = "";
    for (let e of wes) {
      str1 += `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str1;

    //pj
    let pjs = document.getElementsByClassName("pjField");
    let str2 = "";
    for (let e of pjs) {
      str2 += `<li> ${e.value} </li>`;
    }
    document.getElementById("pjT").innerHTML = str2;
  
    //code for setting image
    let file = document.getElementById("imgField").files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
  
    //set the image to template
    reader.onloadend = function () {
      document.getElementById("imgTemplate").src = reader.result;
    };

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
  }

  //print cv
  function printCV() {
    window.print();
  }