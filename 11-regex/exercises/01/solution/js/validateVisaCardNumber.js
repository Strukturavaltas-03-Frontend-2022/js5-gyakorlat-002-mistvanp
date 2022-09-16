
/* 1. Írj egy függvényt `validateVisaCardNumber` néven, ami paraméterként egy 
visa kártyaszámot vár stringként, szóközök nélkül!   
A függvény egy `Boolean` értékben visszaadja, hogy a paraméterként megadott
 kártyaszám megfelelő formátumú e, vagy sem.
 */
 const cardmaskold = /^4\d{11}$/;
 const cardmasknew = /^4\d{15}$/;

 const validateVisaCardNumber=(text) => {
   return cardmasknew.test(text)
       };


export default validateVisaCardNumber;
