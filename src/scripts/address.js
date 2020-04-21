console.log("yo")

// To put the address in element section after saved button.
const container = document.querySelector("#addressList")

//Event Listener for when the save button is selected
document.querySelector("#saveEntry").addEventListener("click", event => {

    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
   const personName = document.querySelector("#fullName").value
   const personAddress = document.querySelector("#address").value
   
    // Once you have collected all the values, update the DOM
    // with some HTML
    container.innerHTML += `
        <section>
            <h1>${personName}</h1>
            <div>${personAddress}</div>
        </section>
    `

})

