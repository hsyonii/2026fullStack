//문제1
let numbers = [23,5,67,12,88,34]
//numbers의 모든요소를 한번씩검증
for(let i =0; i<=numbers.length-1; i++){
//i+n: 비교할 인덱스 번호
//i+n<=6일동안 numbers[i]와 numbers[i+n]크기비교
//number[i]가 더크면 continue 아니면 break

for(let n = 1; n<=numbers.length-1; n++){
        if(i+n<=6)
            
        if (i+n>=6)
            

    }
}
    else
        continue

}

//문제2
for(let i =0; i<=5; i++){ //1행*5개
    let stars=''
    for(let n=0; n<=5-i; n++){ //별1개*5-i개출력
        stars=stars+'*'
    }
    console.log(stars)
}

