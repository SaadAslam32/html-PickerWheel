var yes_pick=0;
var no_pick=0;

document.getElementById('spinButton').addEventListener('click', function () {
  // Generate a new random number between 1 and 8
  var ran = Math.floor(Math.random() * 8) + 1;
  const spinner = document.querySelector('.main-spin');
  spinner.classList.add("spin");

  spinner.style.transition = 'transform 10s ease-in-out';
  play();

  if (thirdflag) {
    let rotation = 0;
    let message = "";

    switch (ran) {
      case 1:
        rotation = 3604;
        message = "No Selected";
        no_pick++;
        document.getElementById("no-picker").innerHTML=no_pick +"<br>NO";
        break;
      case 2:
        rotation = 3650;
        message = "Yes Selected";
        yes_pick++;
        document.getElementById("yes-picker").innerHTML=yes_pick +"<br>Yes";
        break;
      case 3:
        rotation = 3708;
        message = "No Selected";
        no_pick++;
        document.getElementById("no-picker").innerHTML=no_pick +"<br>NO";
        break;
      case 4:
        rotation = 3760;
        message = "Yes Selected";
        yes_pick++;
        document.getElementById("yes-picker").innerHTML=yes_pick +"<br>Yes";
        break;
      case 5:
        rotation = 3802;
        message = "No Selected";
        no_pick++;
        document.getElementById("no-picker").innerHTML=no_pick +"<br>NO";
        break;
      case 6:
        rotation = 3550;
        message = "Yes Selected";
        yes_pick++;
        document.getElementById("yes-picker").innerHTML=yes_pick +"<br>Yes";
        break;
      case 7:
        rotation = 3500;
        message = "No Selected";
        no_pick++;
        document.getElementById("no-picker").innerHTML=no_pick +"<br>NO";
        break;
      case 8:
        rotation = 3650;
        message = "Yes Selected";
        yes_pick++;
        document.getElementById("yes-picker").innerHTML=yes_pick +"<br>Yes";
        break;
    }

    spinner.style.transform = `rotate(${rotation}deg)`;

    spinner.addEventListener('transitionend', function () {
      showAlert(message);
    }, { once: true });
  }


  //if flag1 is selected
  if (firstflag) {
    let rotation = 0;
    let message = "";

    switch (ran) {
      case 1:
        rotation = 3604;
        message = "No Selected";
        no_pick++;
        document.getElementById("no-picker").innerHTML=no_pick +"<br>NO";
        break;
      case 2:
        rotation = 3650;
        message = "No Selected";
        no_pick++;
        document.getElementById("no-picker").innerHTML=yes_pick +"<br>No";
        break;
      case 3:
        rotation = 3708;
        message = "No Selected";
        no_pick++;
        document.getElementById("no-picker").innerHTML=no_pick +"<br>NO";
        break;
      case 4:
        rotation = 3760;
        message = "No Selected";
        no_pick++;
        document.getElementById("no-picker").innerHTML=yes_pick +"<br>No";
        break;
      case 5:
        rotation = 3802;
        message = "Yes Selected";
        yes_pick++;
        document.getElementById("yes-picker").innerHTML=yes_pick +"<br>Yes";
        break;
      case 6:
        rotation = 3550;
        message = "Yes Selected";
        yes_pick++;
        document.getElementById("yes-picker").innerHTML=yes_pick +"<br>Yes";
        break;
      case 7:
        rotation = 3500;
        message = "Yes Selected";
        yes_pick++;
        document.getElementById("yes-picker").innerHTML=yes_pick +"<br>Yes";
        break;
      case 8:
        rotation = 3650;
        message = "Yes Selected";
        yes_pick++;
        document.getElementById("yes-picker").innerHTML=yes_pick +"<br>Yes";
        break;
    }

    spinner.style.transform = `rotate(${rotation}deg)`;

    spinner.addEventListener('transitionend', function () {
      showAlert(message);
    }, { once: true });
  }




  //if flag2 is slected
  if (secondflag) {
    let rotation = 0;
    let message = "";

    switch (ran) {
      case 1:
        rotation = 3610;
        message = "No Selected";
        no_pick++;
        document.getElementById("no-picker").innerHTML=no_pick +"<br>NO";
        break;
      case 2:
        rotation = 3655;
        message = "Yes Selected";
        yes_pick++;
        document.getElementById("yes-picker").innerHTML=yes_pick +"<br>Yes";
        break;
      case 3:
        rotation = 3720;
        message = "No Selected";
        no_pick++;
        document.getElementById("no-picker").innerHTML=no_pick +"<br>NO";
        break;
      case 4:
        rotation = 3765;
        message = "Yes Selected";
        yes_pick++;
        document.getElementById("yes-picker").innerHTML=yes_pick +"<br>Yes";
        break;
      case 5:
        rotation = 3552;
        message = "Yes Selected";
        yes_pick++;
        document.getElementById("yes-picker").innerHTML=yes_pick +"<br>Yes";
        break;
      case 6:
        rotation = 3480;
        message = "No Selected";
        no_pick++;
        document.getElementById("no-picker").innerHTML=no_pick +"<br>NO";
        break;
      case 7:
        rotation = 3480;
        message = "No Selected";
        no_pick++;
        document.getElementById("no-picker").innerHTML=no_pick +"<br>NO";
        break;
      case 8:
        rotation = 3650;
        message = "Yes Selected";
        yes_pick++;
        document.getElementById("yes-picker").innerHTML=yes_pick +"<br>Yes";
        break;
    }

    spinner.style.transform = `rotate(${rotation}deg)`;

    spinner.addEventListener('transitionend', function () {
      showAlert(message);
    }, { once: true });
  }





});

// Function for the sound effect
function play() {
  var audio = document.getElementById("voice");
  audio.play();
}

// Function to show the custom alert
function showAlert(message) {
  var alertBox = document.getElementById("customAlert");
  var alertMessage = document.getElementById("alertMessage");
  var alertButton = document.getElementById("alertButton");

  alertMessage.innerText = message;
  alertBox.style.display = 'flex';

  alertButton.onclick = function () {
    alertBox.style.display = 'none';
    resetSpinner();
  }
}

// Function to reset the spinner
function resetSpinner() {
  var spinner = document.querySelector('.main-spin');
  spinner.style.transition = 'none';
  spinner.style.transform = 'rotate(0deg)';
  // Force a reflow to ensure the transition is reset
  spinner.offsetHeight;
  spinner.style.transition = 'transform 10s ease-in-out';
}

// Function to select the number of inputs
var firstid = document.getElementById("no1");
var secondid = document.getElementById("no2");
var thirdid = document.getElementById("no3");
var firstflag = false;
var secondflag = false;
var thirdflag = true;

firstid.addEventListener("click", function () {
  var image1 = document.getElementsByClassName("main-spin")[0];
  image1.setAttribute("src", "./yes-no-pic1.jpg");
  firstid.style.backgroundColor = "black";
  firstid.style.color = "white";
  secondid.style.backgroundColor = "white";
  secondid.style.color = "black";
  thirdid.style.backgroundColor = "white";
  thirdid.style.color = "black";
  document.getElementById("no-of-input").innerHTML = "2";
  firstflag = true;
  secondflag = false;
  thirdflag = false;
});

secondid.addEventListener("click", function () {
  var image1 = document.getElementsByClassName("main-spin")[0];
  image1.setAttribute("src", "./Screenshot 2024-07-20 185722.png");
  secondid.style.backgroundColor = "black";
  secondid.style.color = "white";
  firstid.style.backgroundColor = "white";
  firstid.style.color = "black";
  thirdid.style.backgroundColor = "white";
  thirdid.style.color = "black";
  document.getElementById("no-of-input").innerHTML = "6";
  firstflag = false;
  secondflag = true;
  thirdflag = false;
});

thirdid.addEventListener("click", function () {
  var image1 = document.getElementsByClassName("main-spin")[0];
  image1.setAttribute("src", "./Screenshot 2024-07-20 185857.png");
  thirdid.style.backgroundColor = "black";
  thirdid.style.color = "white";
  secondid.style.backgroundColor = "white";
  secondid.style.color = "black";
  firstid.style.backgroundColor = "white";
  firstid.style.color = "black";
  document.getElementById("no-of-input").innerHTML = "8";
  thirdflag = true;
  firstflag = false;
  secondflag = false;
});
