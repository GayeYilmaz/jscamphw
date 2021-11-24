
import UserValidation from "../validations/userValidation.js"
import UserService from "./userService.js"
export default class CustomerService {

    constructor(){
        let customerArr=new UserService()
        customers=customer.customers
        console.log(customers)
       
       
    }

    load(){
        for (const user of users) {
            if(!UserValidation.checkValidityForErrors(user)){
                this.customers.push(user)
            }
        }

    }

    add(user){
        console.log(this.customers)
        let userValidation=new UserValidation()
        if(!userValidation.checkValidityForErrors(user)){
            this.customers.push(user)
        }
    }

    list(){
        return this.customers
    }
    getById(){
        return this.customers.find(u=>u.id===id)

    }
    getSorted(){
        return this.customers.sort((customer1,customer2)=>{
            if(customer1.firstName<customer2.firstName){
                return -1;
            }
            else if (customer1.firstName===customer2.firstName){
                return 0;

            }else{
                return 1;
            }
        })

    }
    

    
}