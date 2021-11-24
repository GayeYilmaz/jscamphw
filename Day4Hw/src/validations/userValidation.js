import CustomerValidation from "./customerValidation.js";
import EmployeeValidation from "./employeeValidation.js";

export default class UserValidation{
    constructor(user){
        this.user=user
    }
    checkValidityForErrors(user){
      
       let hasErrors=false
        if(user["type"]==="customer"){
            let customerValidation=new CustomerValidation()
            hasErrors=customerValidation.checkCustomerValidityForErrors(user)
                 
        }
         
            
        else if (user["type"]=="employee") {
           let employeeValidation=new  EmployeeValidation()
            hasErrors=employeeValidation.checkEmployeeValidityForErrors(user)
            
        } 
        else{
            this.errors.push(new DataError("This user can not be added.wrong user type ",user))
        }


        return hasErrors

    }
    checkNumberForErrors(user){
        if(user["type"]==="customer"){
           let customerValidation=new CustomerValidation()
           hasErrors=customerValidation.checkCustomerNumberValidtyForErrors(user)
            
                 
        }
        else if (user["type"]=="employee") {
            let employeeValidation=new EmployeeValidation()
            hasErrors.checkCustomerNumberValidtyForErrors(user)
            
            
        } 
        else{
            this.errors.push(new DataError("This user can not be added.wrong user type ",user))
        }

        return hasErrors

    }
    
}