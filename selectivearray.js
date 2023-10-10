let xhr = new XMLHttpRequest();

xhr .open('GET','https://restcountries.com/v3.1/all',true)

xhr.onload = function(){
    if(xhr.status===200){
        let response = JSON.parse(xhr.responseText);
        console.log(response)
        let filteredArray = [];
       
        for(let i=0;i<response.length;i++){
            let element = response[i]
            if(element.category==="name","region","population","subregion"){
                filteredArray.push(element)
            }
            console.log("index and array",i,filteredArray)
        }
    
    }else{
            console.log("Error")
        }
    
}    
xhr.send()


























