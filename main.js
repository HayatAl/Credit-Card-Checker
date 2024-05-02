// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

let stepTwo= arr=>{
    let Newarr=[];
    for(let i=arr.length-1;i >= 0 ;i--){
        if (i % 2 == 0 || i === 0 )
        {
          let num=  arr[i] *2;
          if( num > 9){
             num -=9;
            
             Newarr.push(num);
          } else {  Newarr.push(num);}
        } else {Newarr.push(arr[i]);}
    } 

return Newarr; 
}


let stepThree =(arr)=>{
    let count=0;
    for(let i in arr){
        count+= arr[i];
    }
    return count ;
}

const validateCred =(arr)=>{
    let arr1=stepTwo(arr);
   let count= stepThree(arr1)
   if (count % 10 == 0)
   {
    return 'is valid';

   }else  return 'is  not valid';

}

let findInvalidCard= (arr)=>{

    let inalid_cards=[];
    for(let i=0; i<arr.length;i++){
        let elemnt=arr[i];  
   if (validateCred(elemnt)==='is  not valid')
   {
  
    inalid_cards.push(arr[i]) 
   }
   
    }
    return inalid_cards;

}


let idInvalidCardCompanies=arr=>{
    let company=[];
    for(let i=0; i<arr.length ;i++){
        if(arr[i][0]===3 ){
            company.push('Amex');
        }else if (arr[i][0]===4 ){
            company.push('Visa');
        }
        else if (arr[i][0]===5 ){
            company.push('Mastercard');
        }
        else if (arr[i][0]===6 ){
            company.push('Discover');
        }
        else console.log('Company not found')
    }
 company=company.filter((value,index)=>{
   return company.indexOf(value)===index;
 }) 
 return company;
}

// validateCred(invalid5);

let x=findInvalidCard(batch);


console.log(idInvalidCardCompanies(x));

