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
  return kittens.pop()
}

function removeFirstKitten(){
   return kittens.shift()
}
