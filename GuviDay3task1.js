var obj = [
  { person: "Name 1", age: "2", company: "GUVI" },
  { person: "Name 2", age: "5", company: "GUVI geek" },
  { person: "Name 3", age: "8", company: "GUVI geek network" },
]

// FOR LOOP
for (let i=0;i<obj.length;i++){
  console.log(obj[i].person);
}

// FOR OF LOOP
for (let ele of obj){
  console.log(ele.person);
}

// FOR IN LOOP
let forin = { person: "Name 1", age: "2", company: "GUVI" }
for (let key in forin){
  console.log(key);
}

// FOR EACH LOOP

obj.forEach((obj)=>{
  console.log(obj.person);
})