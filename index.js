const app = "I don't do much."
var kittens=["Milo","Otis","Garfield"];

function destructivelyAppendKitten(name){
 kittens= [...kittens, name]
}

function destructivelyPrependKitten(name){
  kittens= [name,...kittens]
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}
 
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  return  [...kittens, name]
}

function prependJitten(name){
  var kittens2 = [name,...kittens]
 return  kittens2
}

function removeLastKitten(){
  var kittens2= kittens.pop()
  return kittens2
}

function removeFirstKitten(){
  var kittens2= kittens.shift()
   return kittens2
}
