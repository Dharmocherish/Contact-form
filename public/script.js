// const firstName = document.getElementById("first");
// const lastName = document.getElementById("last");
// const emailAddress = document.getElementById("email");
// const query = document.getElementById("query");
// const message = document.getElementById("message");
// const consent = document.getElementById("checkbox");

// function contactForm(){
//     const firstName = document.getElementById("first").value;
//     const lastName = document.getElementById("last").value;
//     const emailAddress = document.getElementById("email").value;
//     const query = document.getElementById("query").value;
//     const message = document.getElementById("message").value;
//     const consent = document.getElementById("checkbox");



//     alert(firstName, lastName, emailAddress, query, message)
// }

// const submit = document.getElementById("submit");

// submit.onclick = (e) => {
//     e.preventDefault();

//     const firstName = document.getElementById("first").value;
//     const lastName = document.getElementById("last").value; 
//     const emailAddress = document.getElementById("email");
//     const query = document.getElementById("query").value;
//     const message = document.getElementById("message").value;
//     // const consent = document.getElementById("checkbox");


//     const getFirstName = localStorage.getItem("First Name");
//     const getLastName = localStorage.getItem("Last Name");
//     const getEmailAddress = localStorage.getItem("Email Address");
//     const getQuery = localStorage.getItem("Query Type");
//     const getMessage = localStorage.getItem("Message");


//     if(firstName == "" && lastName == "" && emailAddress == "" && query == "" && message == ""){
//         swal
//     };
// }
// const form = document.getElementById("form");
// const firstName = document.getElementById("first");
// const lastName = document.getElementById("last");
// const emailAddress = document.getElementById("email");
// const query = document.getElementById("query");
// const message = document.getElementById("message");
// const consent = document.getElementById("checkbox");
// const button = document.getElementById("submit");


// form.addEventListener("submit", (e) => {a
//     e.preventDefault();
//     validaton()
// });

// const setError = (ele, msg) => {
//     let box = ele.parentElement;
//     let error = box.querySelector(".error");

//     error.innerText = msg;
//     box.classList.add("error");
//     box.classList.remove("success");
// };

// const setSuccess = (ele) => {
//     let box = ele.parentElement;
//     let error = box.querySelector(".error");

//     error.innerText = '';
//     box.classList.add("success");
//     box.classList.remove("error");



// }

// function validation() {
//     const first = firstName.value.trim();
//     const last = lastName.value.trim();
//     const email = emailAddress.value.trim();
//     const queryType = query.value.trim();
//     const msg = message.value.trim();
//     const consents = consent.value.trim();


//     localStorage.setItem("First Name", first);
//     localStorage.setItem("Last Name", last);
//     localStorage.setItem("Email Address", email);
//     localStorage.setItem("Query Type", queryType);
//     localStorage.setItem("Message", msg);
//     localStorage.setItem("Consent", consents);

//     if(first === "") {
//         setError(first, "This field is required")
//     } else{
//         setSuccess(first);
//     }   
    
//     if(last === "") {
//         setError(last, "This field is required")
//     } else{
//         setSuccess(last);
//     }   
    
//     if(email === "") {
//         setError(email, "This field is required")
//     } else{
//         setSuccess(first);
//     }   

//     if(queryType === "") {
//         setError(first, "Please select a query type")
//     } else{
//         setSuccess(first);
//     }   

//     if(msg === "") {
//         setError(msg, "This field is required")
//     } else{
//         setSuccess(msg);
//     }   

//     if(consents === "") {
//         setError(consents, "To submit the form, please consent to being contacted")
//     } else{
//         setSuccess(consents);
//     }   
// };
// validation();



document.addEventListener(`DOMContentLoaded`, function() {

    // form element
    const form = document.getElementById("form");
    // Event listener for form submission
    form.addEventListener(`submit`, function(event) {
        event.preventDefault();

        // Form data
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const consent = document.getElementById("consent").checked;

        // Query type

        let queryType = '';
        const queryTypeElements = document.getElementsByName("queryType");
        for (let i = 0; i < queryTypeElements.length; i++) {
            if(queryTypeElements[i].checked) {
                queryType = queryTypeElements[i].value;
                break;
            }
        }

        // Form data that s stored in an object

        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            queryType: queryType,
            message: message,
            consent: consent
        };
        // Local storage

        localStorage.setItem('contactFormData', JSON.stringify(formData));

        // Form reset
        form.reset();

        // Alert for submission of form

        alert("Form submitted and data stored")
    })
});