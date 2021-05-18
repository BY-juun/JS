function d(n){
    let result = n;
    while(n>0)
    {
        let k = n % 10;
        result += k;
        n = Math.floor(n/10);
    }
    return result;
}

let arr = Array(9999).fill().map((value,index)=>{
    return index + 1;
});

let input = 1;
let k;
let count = 0;
while(input < 10000)
{
    k = d(input);
    if(k<10000){
        arr.splice(k-1,1,0);
    }
    input+=1;
}

arr.forEach((value)=>{
    if(value !== 0)
    {
        console.log(value);
    }
        
})