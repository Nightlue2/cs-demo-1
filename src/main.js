let html = document.querySelector("#html");
let style = document.querySelector('#style');
let string = `
  /*你好，我是王靖然，一个还在不断学习的前端工程师，
   *我将向你展示我在前端的专业能力。
   **/

  /*首先，我会做一个八卦图，
    刚开始它是一个大致的圆。
   **/
  #div1{
    border:1px solid red;
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }
  /*把太极移到合适的位置
   **/
  #div1{
    top:25%;
    right:22%;
  }
  /*然后，给这个太极加上背景颜色，让它好看点。
   **/
  #div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
  }
  /*加上阴阳鱼的主干部分：
   **/
  #div1::before{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    top:0;
  }
  #div1::after{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    bottom:0;
  }
  /*画龙点睛~
   **/
  #div1::before{
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
  }
  #div1::after{
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
  }
  
  
`;
let string2 = '';
let n = -1;
let step = () => {
  setTimeout(() => {
    n++;
    if (string[n] === '\n') {
      string2 += '<br>';
    } else if (string[n] === ' ') {
      string2 += '&nbsp;';
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0,n);
    html.scrollTo(0,99999);
    window.scrollTo(0, 99999);
    if (n + 1 < string.length) {
      step();
    }
  }, 50);
};
step();
