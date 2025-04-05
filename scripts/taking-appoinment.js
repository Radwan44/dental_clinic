// initialization 
let inputs = document.getElementsByClassName("inputs-form")
inputs = Array.of(...inputs)

const submit = document.getElementById("submit")

function validateForm(event) {
    let isValid = true

    document.querySelectorAll(".error-message").forEach(msg => msg.remove())
 
    inputs.forEach(input => {
        const containerInput = input.parentElement
        const message = document.createElement("span")
              message.textContent = "this field is required"
              message.style = "color: red"
              message.classList.add("error-message")

        if(input.value == "") {
            containerInput.appendChild(message)                        
            isValid = false
        }
    })

    if(isValid) addToJson()
    
}

async function addToJson() {
  addId()
    const formData = {};
    
    inputs.forEach(input => {
      formData.id = localStorage.getItem("currentId")
      formData[input.name] = input.value;
    });
  
    try {
      fetch('http://localhost:3000/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
    } catch (error) {
      console.error('Error::', error);
    
    }

  }


function addId() {
  if(!localStorage.getItem("currentId")) {
    localStorage.setItem("currentId", "0")
  }

 id = Number(localStorage.getItem("currentId"))
 ++id
 localStorage.setItem("currentId", id)
}

submit.addEventListener('click', (e) => {
  e.preventDefault()
  
  validateForm()
})






