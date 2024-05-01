let count = 3;

// Function to handle adding signatures
function addSignature(person) {
  const signatureText = `🖊️ ${person.name} from ${person.hometown} supports this`;

  // Create a new paragraph element for the signature
  const signatureElement = document.createElement("p");

  // Apply valid signature style
  signatureElement.textContent = signatureText;


  const signaturesContainer = document.getElementById("signatures");
  signaturesContainer.appendChild(signatureElement);

  const counter = document.getElementById("counter");
  counter.remove();
  count = count + 1;

  const newCounter = document.createElement("p");
  newCounter.id = "counter";
  newCounter.textContent = "🖊️ " + count + " people have signed this petition and support this";
  signaturesContainer.appendChild(newCounter);

  toggleModal(person);
}



function validateForm(event) {
  event.preventDefault();
  let containsErrors = false;
  const petitionInputs = document.getElementById("sign-petition").elements;
  let person = {
    name: petitionInputs[0].value,
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value,
  }

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.trim().length < 2) {
      petitionInputs[i].classList.add('error');

      // Highlight invalid signature in red
      containsErrors = true;
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }

  const email = document.getElementById('email');
  if (!person.email.includes('.com')) {
    email.classList.add('error');
    // Highlight invalid email in red
    containsErrors = true;
  } else {
    email.classList.remove('error');
  }


  if (!containsErrors) {
    addSignature(person);
    // Add valid signature
    document.getElementById("name").value = "";
    document.getElementById("hometown").value = "";
    document.getElementById("email").value = "";
  }
}


// Attach the validateForm function to the sign-now-button click event
const signNowButton = document.getElementById("sign-now-button");
signNowButton.addEventListener('click', validateForm);




function toggleModal(person) {
  const modal = document.getElementById("thanks-modal");
  const modalContent = document.getElementById("thanks-modal-content");
  modal.style.display = "flex";
  modalContent.textContent = `Thank you so much ${person.name}! ${person.hometown} represent!`;


  setTimeout(() => {
    modal.style.display = "none";
  }, 4000);

  let intervalId = setInterval(scaleImage, 500);

}
  
 const closeButton = document.getElementById("modalButton")
 closeButton.addEventListener("click", closeModal)
   
function closeModal() {
  const modal = document.getElementById("thanks-modal");
  modal.style.display = "none";
}

let scaleFactor = 1; // Initial scale factor
const modalImage = document.getElementById("thanks-modal-image");

function scaleImage() {
    scaleFactor = scaleFactor === 1 ? 0.8 : 1
    modalImage.style.transform = `scale(${scaleFactor})`;}
  
modalImage.addEventListener("click", scaleImage);
