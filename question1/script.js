//Use RegEx to validate form


function validate(){
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var phoneNumber = document.getElementById('phone').value;
    var emailAddress = document.getElementById('email').value;
    var firstNameRE = /^[a-zA-Z]+$/;
    var lastNameRE = /^[a-zA-Z]+$/;
    var phoneNumberRE = /^\d\d\d\d\d\d\d\d$/;
    var emailAddressRE = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var firstNameResult = firstNameRE.test(firstName);
    var lastNameResult = lastNameRE.test(lastName);
    var phoneNumberResult = phoneNumberRE.test(phoneNumber);
    var emailAddressResult = emailAddressRE.test(emailAddress);
    alert("First name:"+firstNameResult + ", Last name: "+lastNameResult + ", Phone number: "+phoneNumberResult + ", Email address: "+emailAddressResult );
}

