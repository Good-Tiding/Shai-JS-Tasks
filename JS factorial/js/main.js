function factorial(num)
{
  let fact =1;
  let sum=0;
  if(num === 0 || num ===1)
  {
   return 1;
  }

  while(num>1)
  {
   sum += num;
   fact *= num;
   num--;
  }
  sum += 1;
return {fact,sum};
}
const result = factorial(5);
console.log(`The factorial of your number is: ${result.fact}`);
console.log(`The sum of numbers up to your number is: ${result.sum}`);
