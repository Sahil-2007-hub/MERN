const errorHandler = (statuscodeFromRes, msg) => {
    let error = new Error();
    error.stausCode = statuscodeFromRes;
    error.message = msg;
    return error;
 };

 export default errorHandler;