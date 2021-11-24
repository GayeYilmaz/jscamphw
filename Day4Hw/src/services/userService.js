import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

import UserValidation from "../validations/userValidation.js"
import CustomerService from "./customerService.js"
import EmployeeService from "./employeeService.js"

//DAY 3
export default class UserService{
    constructor(loggerService) {
        this.users=[]
        this.errors=[]
        this.customers=[]
        this.employees=[]
        this.loggerService=loggerService
    }
    load(){
        console.log(users)
        for (const user of users) {
    
           switch (user["type"]) {
                case "customer":
                    new CustomerService().add(user)
                    break;
                case "employee":
                    new EmployeeService().add(user)
                    break;
            
                default:
                    this.errors.push(new DataError("Wrong user type",user))
                    break;
            } 
            
        }

    }
    add(user){
        switch (user.type) {
            case "customer":
               
                new CustomerService.add(user)
              
                break;
            case "employee":
                if(!this.checkEmployeeValidityForErrors(user)){
                this.employees.push(user)
                }
                break;
        
        
            default:
                
                this.errors.push(new DataError("This user can not be added.wrong user type ",user))
                break;
        }
        this.loggerService.log(user)
    }
    list(){
        
        return this.users
    }
    getById(id){
     
        return this.users.find(u=>u.id===id)

    }
    getSorted(){
        return this.users.sort((user1,user2)=>{
            if(user1.firstName<user2.firstName){
                return -1;
            }
            else if (user1.firstName===user2.firstName){
                return 0;

            }else{
                return 1;
            }
        })

    }
    ///React tarfında formik ve yup bunu halleden kütüphaneler 
   /**  checkCustomerValidityForErrors(user){
        let requiredFields ="id firstName lastName age city".split(" ")
        //user["age"]
        let hasErrors=false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors=true
                this.errors.push(new DataError(`Validation problem. ${field} is required` , user ))
            }
            
        }
        if(Number.isNaN(Number.parseInt(user.age))){
            hasErrors=true
            this.errors.push(new DataError(`Validation problem.${user.age} is not a number `,user))
        }
        return  hasErrors
    }

    checkEmployeeValidityForErrors(user){
        let requiredFields ="id firstName lastName age city salary".split(" ")
        //user["age"]
        let hasErrors=false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors=true
                this.errors.push(new DataError(`Validation problem. ${field} is required` , user ))
            }
            
        }
        if(Number.isNaN(Number.parseInt(user.age))){
            hasErrors=true
            this.errors.push(new DataError(`Validation problem.${user.age} is not a number `,user))
        }
        return  hasErrors
    }*/
}