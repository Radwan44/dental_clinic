// varaibles
const createElement = (element) => document.createElement(element)


// initialize
const tbody = document.getElementById('imported-data')

const headerTable = document.getElementById('headers-table')
const headerButtons = createElement('th')
headerButtons.textContent = 'حذف '
headerTable.append(headerButtons)

// This file(sampleData.json) was created as a sample for reference, in case the user does 
// not want to implement a JSON server 
fetch("data/sampleData.json", {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
    }
})
.then(response => response.json())
.then(data => renderData(data.appointments))
.then(deleteRecord())

function addActions(trElement) {
    // Initialization 
     var deleteButton = createElement("button")
     const tdForButtons = createElement("td")
     const fragment = document.createDocumentFragment()
     const containerButtons = createElement("div")

    // add icons
    const changeIcon = createElement("i")
    const deleteIcon = createElement("i")

    changeIcon.classList.add("fa-solid", "fa-pencil")
    deleteIcon.classList.add("fa-solid", "fa-circle-xmark")

    deleteButton.appendChild(deleteIcon)

    //  style
     deleteButton.classList.add("style-Buttons", "btn", "delete-button")
     containerButtons.classList.add("container-Button")
    
    //  appending
     arrayButtons = [deleteButton]
     arrayButtons.forEach(button => {
        fragment.appendChild(button)
     })
     containerButtons.appendChild(fragment)
     tdForButtons.appendChild(containerButtons)
     trElement.appendChild(tdForButtons)
}

const fragmentForTd = document.createDocumentFragment()
const fragmentForTr = document.createDocumentFragment()

const response = fetch('http://localhost:3000/appointments', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
})
.then(response => response.json())
.then(result => {renderData(result)})
.then(deleteRecord())
.catch(error => {
    console.log('Error:', error);
})

function renderData(result) {
    for(i=0; i< result.length; i++) {        
        const id = result[i].id
        const nameCustomer = result[i].name;
        const date = result[i].appoinment;
        const contact = result[i].phone;        

        // initialize
       const tdId = createElement('td')
       const tdName = createElement('td')
       const tdDate = createElement('td')
       const tdContact = createElement('td')
       const trElement = createElement('tr')

       tdId.classList.add("id")

        // append content
        tdId.textContent = id
        tdName.textContent = nameCustomer
        tdDate.textContent = date
        tdContact.textContent = contact

        // append in page
        arrayData = [tdId, tdName, tdDate, tdContact]
        arrayData.forEach(item => {
            fragmentForTd.append(item)            
        })
        trElement.append(fragmentForTd)
        fragmentForTr.append(trElement)
        addActions(trElement)
    }
    tbody.append(fragmentForTr)
}

function deleteRecord() {
    tbody.addEventListener('click', (event) => {
        if(event.target.closest(".delete-button")) {
            const rowselected = event.target.closest('tr')
            const idRow = rowselected.getElementsByClassName("id")[0]
            rowselected.remove() 
            
            fetch(`http://localhost:3000/appointments/${idRow.innerText}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        }
    })
}