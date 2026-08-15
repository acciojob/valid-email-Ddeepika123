function validEmail(str) {
  //your JS code here.
	const regex = /^[A-Za-z0-9]+(?:[._-][A-Za-z0-9]+)*@[A-Za-z0-9]+(?:[.-][A-Za-z0-9]+)*\.[A-Za-z]{2,3}$/;
    return regex.test(str);
}
console.log(validEmail("abc@example.com"));   
console.log(validEmail("xyz@abc.com.in"));     
console.log(validEmail("john.doe@com."));     
console.log(validEmail("@example.com"));       
console.log(validEmail(""));   
// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
