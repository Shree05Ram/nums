let lb='<br>'
for(let i=1;i<=50;i++)
{
    if(i%3==0 && i%5==0)
    {
        for(let j=0;j<((i/3)-(i/5));j++)
        document.write('FizzBuzz');
    }
    else if(i%3==0)
    {
        for(j=0;j<(i/3);j++)
        document.write('Fizz');
    }
    else if(i%5==0)
    {
        for(j=0;j<(i/5);j++)
        document.write('Buzz');
    }
    else
        document.write(i);
    document.write(lb);
}