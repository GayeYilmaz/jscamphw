import UserValidation from "../validations/userValidation.js"
import UserService from "./userService.js"

export default class EmployeeService {
    constructor(){
       let employeeArr=new UserService()
       employees=employee.employees
       
    }
    load(){
        for (const user of users) {
            if(! new UserValidation().checkValidityForErrors(user)){
                this.employees.push(user)
            }
        }
    }
    add(user){
        let result= new UserValidation()
        if(!result.checkValidityForErrors(user)){
            this.employees.push(user)
        }
        

    }

    list(){
        return this.employees
    }

    getById(){
        return this.employees.find(u=>u.id===id)
    }
    
    getSorted(){
        return this.employees.sort((employee1,employee2)=>{
            if(employee1.firstName<employee2.firstName){
                return -1;
            }
            else if (employee1.firstName===employee2.firstName){
                return 0;

            }else{
                return 1;
            }
        })

    }
        
}