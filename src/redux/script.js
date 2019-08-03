export default function script(response){
    const respData = response.data;
   
    if(respData.status=="2000" && respData.error==null ){
       let success = true;
       let failure = false;
   
       respData.success = success;
       respData.failure = failure;
   
       return respData;
    }
    else {
       let success = false;
       let failure = true;
   
       respData.success = success;
       respData.failure = failure;
   
       return respData;
    }
   }