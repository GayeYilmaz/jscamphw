
/**JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
 * Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.
 *  (Araştırma konusu : şart blokları : if ) */
function findPrime(...numbers){  
    for(let index = 0 ; index < numbers.length ; index++ ){
        let isPrime=true;
        console.log(numbers[index])
        for(let i=2;i<numbers[index];i++){
            if(numbers[index]%i==0 & i!=numbers[index]){
                isPrime=false;
                break;
            }     
        }
        if(isPrime==true){
            console.log("Prime")
        }
        else{
            console.log("Not prime")
        }
    }  
}
//findPrime(2,5,8,21, 13)



/**Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. 
 * (Arkadaş sayılar için google) */

function findFriend(number1,number2){
    let total1=0
    let total2=0
    for(let i=1;i<number1;i++){
        if(number1%i==0 & i!=number1){
            total1=total1+i;
        }
    }
    for(let j=1;j<number2;j++){
        if(number2%j==0 & j!=number2){
            total2=total2+j;
        }
    }
    if(total1==number2 & total2==number1){
        console.log("Friends number")
    }
    else{
        console.log("Not friends number")
    }
}
//findFriend(220,284)
//findFriend(6,8)



/**1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız */
function findPerfect(){
    for(let i=1;i<1000;i++){
        let total=0;
        for(let j=0;j<i;j++){
            if(i%j==0){
                total=total+j;
            }
           
        }
        if(total==i){
            console.log(i)
        }  
    }
}
//findPerfect()



/**1000'e kadarki tüm asal sayıları listeleyen programı yazınız. */
function findAllPrime(){
    for(let i = 1 ; i < 1000 ; i++ ){
        let isPrime=true;
        for(let j=2;j<i;j++){
            if(i%j==0 & j!=i){
                isPrime=false;
                break;
            }     
        }
        if(isPrime==true){
            console.log(i)
        }
       
    }  
}
//findAllPrime()