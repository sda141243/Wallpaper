const APIKEY='51176859-e0ea549da7acdd333b1d7ab8b'
import axios from'axios';

const apiurl=`https://pixabay.com/api/?key=${APIKEY}`

const formateUrl=(params)=>{
    let url=apiurl+"&per_page=25&safesearch=true&editors_choice=true"
    if(!params) return url;
    let paramsKeys=Object.keys(params);
    paramsKeys.map(Key=>{
        let value = Key=='q'?encodeURIComponent(params[Key]):params[Key];
        url+=`&${Key}=${value}}`
    })
    console.log( 'final url', url);
    
    return url;
}

export const apicall=async(params)=>{
    try{
        const response= await axios.get(formateUrl(params));
        const {data}=response;
        return {success:true,data}
    }
    catch(err){
        console.log('got error',err.message);
        return{success: false ,msg:message};
        

    }
}