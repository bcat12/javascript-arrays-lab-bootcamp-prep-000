const app = "I don't do much."
var kittens=["Milo","Otis","Garfield"];

function destructivelyAppendKitten(name){
 kittens= [...kittens, name]
}

function destructivelyPrependKitten(name){
  kittens= [name,...kittens]
}

function destructivelyRemoveLastKitten(){
 kittens = kittens.pop()
}

