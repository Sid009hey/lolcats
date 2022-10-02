document.getElementById("button").innerHTML =
  localStorage["text"] || "Enter Username"; // default text

setInterval(function() {
  // fuction that is saving the innerHTML of the div
  localStorage["text"] = document.getElementById("content").innerHTML; // content div
}, 1000);
