window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounterazr.azurewebsites.net/api/GetResumeCounter?code=C_Ya7R-HIVYZk91oxCi_Z4cPB88OqryReZQKkwN4sju1AzFuSmwdCw==' 
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 40;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}