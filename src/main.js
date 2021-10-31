let html = document.querySelector('#html');
let style = document.querySelector('#style');
let string = `
/* 
    演示如何制作太极图 
    准备一个 div
*/
#TaiJi {
    border: 1px solid black;
    width: 200px;
    height: 200px;
    position: fixed;
    top: 20px;
    right: 50%;
    transform: translateX(50%);
}

/* 将这个 div 变成圆 */
#TaiJi {
    border-radius: 50%;
}

/* 先大致构造出阴阳黑白两个半圆 */
#TaiJi {
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/* 构造出完整的阴阳鱼 */
#TaiJi::before {
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
}

#TaiJi::after {
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);
}
`;
let string2 = '';
let n = 0;

let step = () => {  
    setTimeout(() => {
        if(string[n] === '\n'){
            string2 += '<br>';
        }else if(string[n] === ' '){
            string2 += '&nbsp;';
        }else{
            string2 += string[n];
        }
        n += 1;

        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 9999);
        html.scrollTo(0, 9999);

        if(n < string.length - 1){
            step();
        }
    }, 50);
};

step();