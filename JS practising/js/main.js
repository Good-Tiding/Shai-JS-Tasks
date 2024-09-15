let x= document.getElementsByTagName('p');
//console.log(x);

for(let i=0 ;i<= x.length;i++)
{
    console.log(x[i]);
} 
 
let sel=document.querySelectorAll('p');
console.log(sel); 

/***********************************************************************************/

const ulstatic=document.createElement('ul');
const itemsstatic=['i1','i2','i3','i4'];
itemsstatic.forEach(item=>
    {
        const li=document.createElement('li');
        li.textContent=item;
        ulstatic.appendChild(li);

    }
    );
    document.getElementById('static').appendChild(ulstatic);  

/********************************************************************************************/
    const ul=document.createElement('ul');
    const items=[];

    for (let i = 1; i <= 10; i++) 
    {
        items.push(`item ${i}`);
    }

    items.forEach(item=>
        {
            const li=document.createElement('li');
            li.textContent=item;
            ul.appendChild(li);
    
        }
        );
        document.getElementById('dynamic').appendChild(ul); 
/*******************************************************************************************/

const a =document.createElement('a');
//a.setAttribute('href', 'https://www.example.com');
a.href='https://www.example.com'
a.textContent = 'Visit Example'; 
a.setAttribute('target', '_blank');
document.getElementById('link').appendChild(a) ;  

/*****************************************************************************************/


const img =document.createElement('img');
img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuKcK7CImaEUSdJUC6UKsfbdc_reX25EX8lg&s');
img.setAttribute('alt', 'Happy Land');
img.setAttribute('width', '300px');
img.setAttribute('height', '200px');
document.getElementById('img').appendChild(img) ; 
//document.body.appendChild(img); 

/************************************************************************************************/


function alert()
{
let text;
let student=prompt('Hi, happy to join us?');

    if(student==null || student=='')
    {
     text='cancle';
    }

    else
    {
     text='hello';
    }
  document.body.innerHTML=text;
}

/*********************************************************************************************/

const button = document.getElementById('myButton');

button.addEventListener('click', () => 
{
  button.classList.toggle('hover-active');

});
/*********************************************************************************************/