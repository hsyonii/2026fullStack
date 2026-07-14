for(let i =1; i<=9; i++){ //1~9행(증가)
    let stars=''
    for(let j=1; j<=10-i; j++){ //공백찍기
        stars=stars+' '
    }
    for(let j=1; j<=i; j++){ //별찍기
        stars=stars+' *'//간격맞추기
    }
    console.log(stars)
}

for(let i =1; i<=10; i++){ //10~19행(감소)
    let stars2=''
    for(let j=1; j<=i; j++){
        stars2=stars2+' '
    }
    for(let j=0; j<=10-i; j++){ 
        stars2=stars2+'* '
    }
    console.log(stars2)
}