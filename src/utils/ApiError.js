class ApiError extends Error{
    contructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.message = message
        this.data = null
        this.success = false
        this.errors = errors

        if(statck){
           this.statck = statck
        }else{
            Error.captureStackTrace(this,this.contructor)
        }
    }
}

export {ApiError}