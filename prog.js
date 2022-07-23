const increaseBtn = document.getElementById("increase")
const decreaseBtn = document.getElementById("decrease")
const reseteBtn = document.getElementById("reset")
const num = document.getElementById("num")
const posColor = "green"
const negColor = "red"
const defaultColor = "#050027"

increaseBtn.addEventListener("click",function(){
    num.innerText++
    if(num.innerText==0)
    num.style.color = defaultColor
    if (num.innerText>0)
    num.style.color = posColor
    if(num.innerText<0)
    num.style.color = negColor

})

decreaseBtn.addEventListener("click",function(){
    num.innerText--
    if(num.innerText==0)
    num.style.color = defaultColor
    if(num.innerText>0)
    num.style.color = posColor
    if(num.innerText<0)
    num.style.color = negColor
})

reseteBtn.addEventListener("click",function(){
    num.innerText=0;
    num.style.color=defaultColor
})
