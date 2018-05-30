function idCard() {
    let firstName = document.getElementById('firstName').value;
    console.log(firstName);
    document.getElementById('postFullName').innerHTML = firstName;

    let age = document.getElementById('age').value;
    document.getElementById('postAge').innerHTML = age;
}