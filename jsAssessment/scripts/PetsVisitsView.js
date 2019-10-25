//get pet per ID;
//test with ID 7;

const url = "http://localhost:9966/petclinic/api/pets/";

function getPetByID(id)
{

fetch(url+id, {
    headers: {
        "Accept": "application/json;charset=UTF-8"
      }
}) 
.then(response => response.json())
.then(res => console.log(res));

}
function display(json)
{
    
}