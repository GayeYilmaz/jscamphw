export default class CustomerValidation{
    constructor(user){
        this.user=user
    }
    checkCustomerValidityForErrors(user){
        console.log("CHECKCUSTOMERVALIDITYFORERROS")
        let requiredFields ="id firstName lastName age city".split(" ")
        let hasErrors=false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors=true
                this.errors.push(new DataError(`Validation problem. ${field} is required` , user ))
            }    
        }
        return  hasErrors
    }
    checkCustomerNumberValidtyForErrors(user){
        let hasErrors=false
        if(Number.isNaN(Number.parseInt(user.age))){
            hasErrors=true
            this.errors.push(new DataError(`Validation problem.${user.age} is not a number `,user))
        }
        return hasErrors
    }
    
}