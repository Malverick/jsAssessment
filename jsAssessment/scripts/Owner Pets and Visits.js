let lastName;
//let lastName = URLSearchParams(lastName);

function searchNames(LNInput.value){
    
    fetchName(lastName);
}

function fetchName(lastName) {
    fetch('http://localhost:9966/petclinic/api/owners/*/lastname/' + lastName)
        .then(res => res.json())
        .then(json => handleData(json))
        .catch(err => console.error(err));
}