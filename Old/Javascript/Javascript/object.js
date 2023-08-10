var person = 
[
    { 
        name: "Prabhat", 
        add: "JNK", 
        mobile: "985555" 
    }, 
    { 
        name: "Sandesh", 
        add: "KTM", 
        mobile: "5442255" 
    }, 
    { 
        name: "Aadarsha", 
        add: "PKH", 
        mobile: "12236" 
    }]
var len = person.length;
for (var i = 0; i < len; i++) {
    console.log(`Name = ${person[i].name} Address = ${person[i].add} Mobile = ${person[i].mobile}` )
}
