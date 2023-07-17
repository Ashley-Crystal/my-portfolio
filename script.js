function addRecommendation(recommendation) {
  // Create a new 'recommendation' element and set its value to the user's message
  var element = document.createElement("div");
  element.setAttribute("class", "recommendation");
  element.innerHTML = `<span>&#8220;</span>${recommendation}<span>&#8221;</span>`;
  // Add this element to the end of the list of recommendations
  document.getElementById("all_recommendations").appendChild(element);

  // Reset the value of the textarea
  document.getElementById("new_recommendation").value = "";
}

function showPopup(message) {
  document.getElementById('popup').style.visibility = 'visible';
  document.getElementById('popup-message').innerText = message;
}

function hidePopup() {
  document.getElementById('popup').style.visibility = 'hidden';
}
function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}

function submitRecommendation() {
  let recommendation = document.getElementById("new_recommendation").value.trim();
  if (recommendation !== "") {
    addRecommendation(recommendation);
    showPopup("Thank you for submitting a recommendation!");
  }
}


