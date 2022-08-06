const isValid = function(value){
    if(typeof value !== "string") return false
    if(typeof value === "string" && value.trim().length === 0) return false
    return true;

}
const isValidRequestBody = function (requestBody) {   //Object.keys() is a static method that returns an Array when we pass an object to it, 
                                                      // which contains the property names (keys) belonging to that object.
    return Object.keys(requestBody).length > 0; ///method for determining whether an object is empty,
};

 module.exports={isValid,isValidRequestBody}