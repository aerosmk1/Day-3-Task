let xhr = new XMLHttpRequest();

xhr .open('GET','https://restcountries.com/v3.1/all',true)

xhr.onload = function(){
    if(xhr.status===200){
        let response = JSON.parse(xhr.responseText);
        console.log(response)
        let filteredArray = []
        }else{
            console.log("Error")
        }
    
}    
xhr.send()
