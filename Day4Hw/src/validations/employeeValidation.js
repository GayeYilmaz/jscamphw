export default class EmployeeValidation{
    constructor(user){
        this.user=user
    }
    checkEmployeeValidityForErrors(user){
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
    checkEmployeeNumberValidtyForErrors(user){
        let hasErrors=false
        if(Number.isNaN(Number.parseInt(user.salary))){
            hasErrors=true
            this.errors.push(new DataError(`Validation problem.${user.salary} is not a number `,user))
        }
        return  hasErrors
    }
    
}