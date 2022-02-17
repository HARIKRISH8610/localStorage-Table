var inName = document.getElementById("idName");
var inEmail = document.getElementById("idEmail");
var inDob = document.getElementById("idDate");
var inRange = document.getElementById("idRange");
var inPassword = document.getElementById("idPassword");
var inputLocalTable = document.getElementsByClassName("inLocalTable");
var spin = document.getElementsByClassName("spinners");
var inFile=document.getElementById("idFile");

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


var setLocalName;
var setLocalEmail;
var setLocalDob;
var setLocalSno;
var newName = [];
var newSno, newName, newEmail, newName;

function yearDob(){
  var dobYear=document.getElementById("idDate");
  dobYear.datepicker({"dateFormat":"dd/mm/yy"});
  console.log(dobYear)
}
// yearDob();

function btnSubmit() {

  if (inName.value && inEmail.value && inPassword.value && inDob.value) {
    endSpinner();
    setTimeout(function () {
      if (localStorage.getItem("Name") == null) {
        localStorage.setItem("Name", inName.value);
        localStorage.setItem("Email", inEmail.value);
        localStorage.setItem("Dob", inDob.value);
        localStorage.setItem("Sno", 1);

        strLocalNames;
        strLocalEmail;
        strLocalDob;
        setLocalSno;

        newName = localStorage.getItem("Name");
        newEmail = localStorage.getItem("Email");
        newDob = localStorage.getItem("Dob");
        newSno = localStorage.getItem("Sno");

        inputLocalTable[0].innerHTML =
          "<tr><td>" +
          1 +
          "</td><td>" +
          newName +
          "</td><td>" +
          newEmail +
          "</td><td>" +
          newDob +
          "</td><td><button class='btn btn-secondary btn-sm'  value=1 onclick='fnDelete(this)'>Delete</button></td></tr>";
      } else {
        var strLocalNames = localStorage.getItem("Name").split(",");
        setLocalName = [strLocalNames, inName.value];
        localStorage.setItem("Name", setLocalName);
        console.log(strLocalNames);
        var newName = localStorage.getItem("Name").split(",");

        var strLocalEmail = localStorage.getItem("Email").split(",");
        setLocalEmail = [strLocalEmail, inEmail.value];
        localStorage.setItem("Email", setLocalEmail);
        console.log(strLocalEmail);
        var newEmail = localStorage.getItem("Email").split(",");

        var strLocalDob = localStorage.getItem("Dob").split(",");
        setLocalDob = [strLocalDob, inDob.value];
        localStorage.setItem("Dob", setLocalDob);
        console.log(strLocalDob);
        var newDob = localStorage.getItem("Dob").split(",");

        var strLocalSno = localStorage.getItem("Sno").split(",");
        var num = strLocalSno.length + 1;
        setLocalSno = [strLocalSno, num];
        localStorage.setItem("Sno", setLocalSno);
        console.log(strLocalSno);
        var newSno = localStorage.getItem("Sno").split(",");
        inputLocalTable[0].innerHTML = "";
        for (i = 0; i < newDob.length; i++) {
          a = i + 1;
          inputLocalTable[0].innerHTML +=
            "<tr><td>" +
            newSno[i] +
            "</td><td>" +
            newName[i] +
            "</td><td>" +
            newEmail[i] +
            "</td><td>" +
            newDob[i] +
            "</td><td><button class='btn btn-secondary'  value=" +
            [a] +
            " onclick='fnDelete(this)'>Delete</button></td></tr>";
        }
      }
      document
        .getElementsByClassName("alert")[0]
        .setAttribute("style", "display:block");
      document
        .getElementsByClassName("spinners")[0]
        .setAttribute("style", "display:none !important");

      endAlert1();
      setTimeout(strAlert1, 2000);
      strSpinner();
      btnReset();
    }, 2000);
  } else {
    endAlert2();
    setTimeout(strAlert2, 2000);
  }

}



var strLocalDob, strLocalNames, strLocalEmail, strLocalSno;

onLoadfn();
function onLoadfn() {
  if (localStorage.getItem("Name") == null) {
    inputLocalTable[0].innerHTML =
      "<tr><td colspan='5' class='text-center'>This is no data found in table.</td></tr>";
  } else {
    strLocalNames = localStorage.getItem("Name").split(",");
    strLocalEmail = localStorage.getItem("Email").split(",");
    strLocalDob = localStorage.getItem("Dob").split(",");
    strLocalSno = localStorage.getItem("Sno").split(",");
    innerTableShow();
  }
}

function innerTableShow() {
  if(strLocalSno==false){
    localStorage.removeItem("Sno");
    localStorage.removeItem("Name");
    localStorage.removeItem("Dob");
    localStorage.removeItem("Email");
  }else{
  for (i = 0; i < strLocalEmail.length; i++) {
    var a = i + 1;
    inputLocalTable[0].innerHTML +=
      "<tr class='rows'><td>" +
      strLocalSno[i] +
      "</td><td>" +
      strLocalNames[i] +
      "</td><td>" +
      strLocalEmail[i] +
      "</td><td>" +
      strLocalDob[i] +
      "</td><td><button class='btn btn-secondary btnvalue" +
      a +
      "'  value=" +
      [a] +
      " onclick='fnDelete(this)'>Delete</button></td></tr>";
  }
}
}


function fnDelete(btnClick) {
  var confrimVal=confirm("Are you sure to delete");
  if(confrimVal){
  var strLocalSno1=localStorage.getItem("Sno").split(",");
  var strLocalNames1=localStorage.getItem("Name").split(",");
  var strLocalDob1=localStorage.getItem("Dob").split(",");
  var strLocalEmail1=localStorage.getItem("Email").split(",");
  var arr;
  var speArray = [];
  for (i = 0; i < strLocalSno1.length; i++) {
    arr = [strLocalSno1[i], strLocalNames1[i], strLocalEmail1[i], strLocalDob1[i]];
    speArray.push(arr);
  }

  for (i = 0; i < strLocalSno1.length; i++) {
    var btnValue = i + 1;
    if (btnClick.value == btnValue) {
      speArray.splice(i, 1);
    }
  }
  var SnoArr = [],
    NameArr = [],
    EmailArr = [],
    DobArr = [];
  var CommanArr;
  for (i = 0; i < strLocalSno1.length - 1; i++) {
    CommanArr = speArray[i];
    SnoArr.push(i+1);
    NameArr.push(CommanArr[1]);
    EmailArr.push(CommanArr[2]);
    DobArr.push(CommanArr[3]);
  }
  
  localStorage.setItem("Sno", SnoArr);
  localStorage.setItem("Name", NameArr);
  localStorage.setItem("Dob", DobArr);
  localStorage.setItem("Email", EmailArr);

  inputLocalTable[0].innerHTML ="";

  var strLocalSno2=localStorage.getItem("Sno").split(",");
  var strLocalNames2=localStorage.getItem("Name").split(",");
  var strLocalDob2=localStorage.getItem("Dob").split(",");
  var strLocalEmail2=localStorage.getItem("Email").split(",");


  for (i = 0; i < strLocalEmail2.length; i++) {
    var a = i + 1;
    inputLocalTable[0].innerHTML +=
      "<tr class='rows'><td>" +
      strLocalSno2[i] +
      "</td><td>" +
      strLocalNames2[i] +
      "</td><td>" +
      strLocalEmail2[i] +
      "</td><td>" +
      strLocalDob2[i] +
      "</td><td><button class='btn btn-secondary btnvalue" +
      a +
      "' value=" +
      [a] +
      " onclick='fnDelete(this)'>Delete</button></td></tr>";
  }
  if(localStorage.getItem("Sno")==false){
    localStorage.removeItem("Sno");
    localStorage.removeItem("Name");
    localStorage.removeItem("Dob");
    localStorage.removeItem("Email"); 
    inputLocalTable[0].innerHTML =
    "<tr><td colspan='5' class='text-center'>This is no data found in table.</td></tr>";
   }

  }
}

var spin = document.getElementsByClassName("spinners");
var alerts = document.getElementsByClassName("alert");

function strSpinner() {
  spin[0].setAttribute("style", "display:none !important");
}

function endSpinner() {
  spin[0].setAttribute("style", "display:block !important");
}

function strAlert1() {
  alerts[0].setAttribute("style", "display:none !important");
}

function strAlert2() {
  alerts[1].setAttribute("style", "display:none !important");
}

function endAlert1() {
  alerts[0].setAttribute("style", "display:block !important");
}

function endAlert2() {
  alerts[1].setAttribute("style", "display:block !important");
}

function btnReset() {
  inName.value="";
  inEmail.value="";
  inDob.value="";
  inRange.value=0;
  inPassword.value="";
  inFile.value=null;
var inMarried=document.getElementById("idMarried");
var inUnmarried=document.getElementById("idUnmarried");
inMarried.checked=false;
inUnmarried.checked=false;
}
