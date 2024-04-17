// Function to handle adding signatures
function addSignature() {
  const nameInput = document.getElementById("name").value;
  const hometownInput = document.getElementById("hometown").value;
  const signatureText = `🖊️ ${nameInput} from ${hometownInput} supports this`;

  // Create a new paragraph element for the signature
  const signatureElement = document.createElement("p"); 
  
  // Apply valid signature style
  signatureElement.textContent = signatureText;

  // Append the signature to the signatures container (assuming you have a div with ID "signatures")
  const signaturesContainer = document.getElementById("signatures");
  signaturesContainer.appendChild(signatureElement);
}


// Function to handle form validation
function validateForm(event) {
  event.preventDefault(); // Prevent form submission
  let containsErrors = false;
  const petitionInputs = document.getElementById("sign-petition").elements;

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.trim().length < 2) {
      petitionInputs[i].classList.add('error'); // Highlight invalid signature in red
      containsErrors = true;
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }

  const email = document.getElementById("email");
  if (!email.value.includes('.com')) {
    email.classList.add('error'); // Highlight invalid email in red
    containsErrors = true;
  } else {
    email.classList.remove('error');
  }


  if (!containsErrors) {
    addSignature(); // Add valid signature
    document.getElementById("name").value = "";
    document.getElementById("hometown").value = "";
    document.getElementById("email").value = "";
  }
}

// Attach the validateForm function to the sign-now-button click event
const signNowButton = document.getElementById("sign-now-button");
signNowButton.addEventListener('click', validateForm);


  if (!email.value.includes('.com')) {
    email.classList.add('error'); // Highlight invalid email in red
    containsErrors = true;
  } else {
    email.classList.remove('error');
