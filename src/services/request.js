import Axios from "axios";
var baseUrl = "https://serverassesment.herokuapp.com/api/";

export var postData = (route,data) =>{ 

return new Promise((resolve,reject) =>{
    Axios.post(baseUrl+route,
        data).then((response) => {
                resolve(response.data);
        }).catch((error) =>{
                reject(error);
        })
});
}


export var fetchData = (route,item) =>{

return new Promise((resolve,reject)=>{
        Axios.get(baseUrl+route,{
                params:{
                item:item,
                }
        }).then((response)=>{
                resolve(response.data);
        }).catch((error) =>{
                reject(error);
        })
})

        
}

