const displayInput = document.getElementById('display');

function displayNumber(input) 
{
    if(displayInput.value === '0' )
    {
        displayInput.value = '';
    }

    displayInput.value += input;
}

function eraseNumber() 
{
    displayInput.value = 0;
}

function solve() 
{
    try 
    {
        const result = math.evaluate(displayInput.value);
        displayInput.value = result;
    } 
    catch (error) 
    {
        displayInput.value = 'Error';

    }
}