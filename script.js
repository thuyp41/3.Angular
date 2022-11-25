const btn = document.querySelectorAll("button")
//console.log(btn)
btn.forEach(function(button,index){
  button.addEventListener("click",function(event){{
var btnItem = event.target  
var product = btnItem.parentElement
var productImg = product.querySelector("img").src
var productName = product.querySelector("H1").innerText
var productPrice =  product.querySelector("span").innerText
 
 addcart(productPrice,productImg,productName)
}}
  )
})
function addcart(productPrice,productImg,productName){
    var addtr = document.createElement("tr")
    var trcontent = ' <tr><td><img style="display: flex; align-items:center;" src="'+productImg+'"width="70px"alt=""</td>'+productName+' <td><p><span>'+productPrice+'<span><sup>d</sup></p></td><td><input style="width:30px ; outline:none;" type="number" value="1" min="1"></td><td style="cursor:pointer ;">Xoa</td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
   // console.log(cartTable)
   cartTable.append(addtr)
   cartTotal()
}
//total
function cartTotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
   // console.log(cartItem.length)
   for (var i=0;i<cartItem.length;i++){
   var inputValue = cartItem[i].querySelector("input").innerHTML
  // console.log(inputValue)
   var productPrice  = cartItem[i].querySelector("span").innerHTML
   
  //console.log(productPrice)
   totalA = inputValue*productPrice*1000
  // console.log(totalA)
  totalC =totalC+totalA
  console.log(totalC)
}
var cartTotalA =  document.querySelector(".price-total span")
cartTotalA.innerHTML = totalC
console.log(cartTotalA)
}
