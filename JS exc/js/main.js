//check if the number + or - or 0
 let n;
 function check(n)
 {
    if(n>0)
    {
    return "positive";

    }
    else if(n<0)
    {
    return "negative";
    }

    else
    {
    return "zero";
    }
 }

 console.log('check number: ',check(5));
 console.log('check number: ',check(-5));
 console.log('check number: ',check(0)); 
 /************************************************************************************************/

 //sum array elements

 function sumarray(nums) 
{
  let sum=0;
  console.log('for loop numbers: ');
  for(let i=0; i<nums.length;i++)
  {
   
      //console.log(nums[i]);
     
      console.log(nums[i]);
      sum +=nums[i];
 
  }
  return sum;
  
}

console.log('sum array numbers: ', sumarray([1,2,3,4,5])); 
/**********************************************************************************************/

//print numbers from 1 to 10 using while loop

function print()
{
  console.log('while loop numbers: ');
  let i=0;
  while(i<10)
  {
    i++;
    console.log(i);
  }

}
print();
/***************************************************************************/

//print numbers from 10 to 1 using do-while loop

 function printDes()
{
  console.log('Reversed do-while loop numbers: ');
  let i=10;
  do
  {
    console.log(i);
    i--;
  }

  while(i>=1)
  {
   
  }

}
printDes();  
/**********************************************************************/

//print words in upper case

 function upperCase(words)
{
  let upper=[];
  for(let i=0;i<words.length;i++)
  {
   upper.push(words[i].toUpperCase());
  }
  return upper;
}
console.log('upper Case Words',upperCase(['ahmad','nour','sally'])); 

/***********************************************************************/

//print the larger between two numbers
 function large(a,b)
{
  return a>b ?a : b;
}
console.log('Larger between two numbers',large(4,80));
console.log('Larger between two numbers',large(8,4)); 

/***********************************************************************/

//if the number even or odd

 function EvenOrOdd(num)
{
return num % 2===0 ?'even' : 'Odd';

}
console.log('Even Or Odd number: ',EvenOrOdd(4));
console.log('Even Or Odd number: ',EvenOrOdd(1)); 
/******************************************************************* */

//Age Checker
function age(num) 
{ 
  
return num<18 ? "child" : "Adult";
  
}

console.log('Age Checker: ',age(20)); 
/********************************************************************* */
//Accept division on 3 and 5 ?
function div(num)
{
if(num % 3 === 0 && num % 5===0)
return "true"
else
return "false"
}

console.log('Accept division on 3 and 5 ?',div(15)); 

/***********************************************/
//find the biggest number in the array

 function max(arr)
{
  let big=arr[0];

 
  for(let i=1; i<arr.length;i++)
  {
    if(big<arr[i])
    {

      big=arr[i];

    }
  }
  return big;
}
console.log('The biggest number in the array is : ',max([15,50,10,14,7,80,900,425])); 
console.log('The biggest number in the array is : ',max([15,101,10,14,7,80,100,425]));  
/************************************************************/



