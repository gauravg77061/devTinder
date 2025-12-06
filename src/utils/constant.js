
// this is for production

//export const BASE_URL= 'api/';

// this is for dev enviornment 

export const BASE_URL= location.hostname === "localhost" ?'http://localhost:3000/' : "api/";