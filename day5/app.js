// nested loop
let n = 10;
for(let i = 1; i <= n; i++){
    let result = '';
    for ( let j = 1; j <= i; j++){
        result += '1';
    }
    console.log(Number(result))
}

let star1 = 10;
for( let i = 1; i <= star1; i++){
    let result = '';
    for( let j = 1; j <= i; j++){
        result += '*';
    }
    console.log(result)
}

let star2 = 10;
for( let i = star2; i >= 1; i--){
    let result = '';
    for( let j = 1; j <= i; j++){
        result += '* ';
    }
    console.log(result)
}


let doller = 10;
for ( let i = 1; i <= doller; i++){
    let result = '';
    for(let j = 1; j <= i; j++){
        result += '$ '
    }
    console.log(result);
}

let doller2 = 11;
for ( let i = doller2; i >= 1; i--){
    let result = '';
    for(let j = 1; j <= i; j++){
        result += '$ '
    }
    console.log(result);
}