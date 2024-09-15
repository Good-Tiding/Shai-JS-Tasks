const output = document.getElementById('input');
let pattern = '';

function printPattern() 
{
    for (let i = 1; i < 5; i++) 
    {
        pattern += '*'.repeat(i) + '\n';
    }
    pattern+='<br>';
    
    
    for (let i = 4 ; i >= 1; i--) 
    {
        pattern += '*'.repeat(i) + '\n';
    }
    return pattern;
}


output.innerHTML=printPattern() ; 



function printLetter() 
{
    let pattern='';
    const repeatCount = 3; 
    for (let r = 0; r < repeatCount; r++) 
    {
        for (let i = 4; i >= 2; i-=2) 
        {
            //repeatCount === 3 &&
            if ( r === repeatCount - 1 && i === 2) 
            {
                //skip the 2 stars
                continue;
            }
            
            if(i===2)
            {
                pattern +='*<span class="spacer"></span>*<br>';
            }

            else
            {
                pattern +='*'.repeat(i).split('').join(' ')+'<br>';
            
            }
                  
        }

    }
    
  return pattern;
}

document.getElementById('output').innerHTML = printLetter();



