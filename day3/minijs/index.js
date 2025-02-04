//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.

document.querySelector("#scope").addEventListener("click", readsp);
let arr1 = JSON.parse(localStorage.getItem("scope")) || [];
function readsp() {
    var scope = {
        meaning: "Javascript (JS) is a scripting languages, primarily used on the Web",
        type: "there are three types of javascript scope",
        first: "global",
        second: "local",
        third: "block"
    };
    arr1.push(scope);
    //console.log(arr1);
    localStorage.setItem("scope", JSON.stringify(arr1));
    appendscope(arr1);

}


document.getElementById("hoisting").addEventListener("click", readho);
var arr2 = JSON.parse(localStorage.getItem("hoisting")) || [];
function readho() {
    var hoisting = {
        intro: "In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution.",
        example: "For example, // using test before declaring console.log(test); // undefined var test; The above program works and the output will be undefined ",
        function: "In JavaScript, the default action is for declarations to be moved to the top of the code. Declarations are moved to the top of the current scope by the JavaScript interpreter, meaning the top of the current function or scripts",
        use: "In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution",

    }
    arr2.push(hoisting);
    console.log(arr2);
    localStorage.setItem("hoisting", JSON.stringify(arr2));
    appendhoisting(arr2)
}


document.getElementById("constructor_functions").addEventListener("click", readcf);

var arr3 = JSON.parse(localStorage.getItem("constructor_functions")) || [];
function readcf() {
    var constfun = {
        intro: "A constructor is a special function that creates and initializes an object instance of a class",
        use: "We use constructors to initialize the object with the default or initial state. The default values for primitives may not be what are you looking for. Another reason to use constructor is that it informs about dependencies",
        declare: "Constructor name must be the same as its class name",
        private: "Yes, we can declare a constructor as private. If we declare a constructor as private we are not able to create an object of a class",
    }
    arr3.push(constfun);
    console.log(arr3);
    localStorage.setItem("constructor_functions", JSON.stringify(arr3));
    appendcons(arr3)
}


document.getElementById("prototype").addEventListener("click", readpro)
var arr4 = JSON.parse(localStorage.getItem("prototype")) || [];
function readpro() {
    var proto = {
        intro: "The prototype is an object that is associated with every functions and objects by default in JavaScript",

        use: "Prototypes allow you to easily define methods to all instances of a particular object. The beauty is that the method is applied to the prototype",

        chain: "Each object has a private property which holds a link to another object called its prototype",

        callback: "A JavaScript callback is a function which is to be executed after another function has finished execution",

    }
    arr4.push(proto);
    console.log(arr4);
    localStorage.setItem("prototype", JSON.stringify(arr4));
    appendproto(arr4);
}



///append data 


let maindiv = document.getElementById("maindiv");


function appendscope(data) {
    data.forEach(function (ele) {
        maindiv.innerHTML = "";
        let list1 = document.createElement("li");
        list1.innerText = ele.meaning;
        let list2 = document.createElement("li");
        list2.innerText = ele.type;

        let list3 = document.createElement("li");
        list3.innerText = ele.first;
        let list4 = document.createElement("li");
        list4.innerText = ele.second;
        let list5 = document.createElement("li");
        list5.innerText = ele.third;
        maindiv.append(list1, list2, list3, list4, list5);

    })
}


function appendhoisting(data) {
    data.forEach(function (ele) {
        maindiv.innerHTML = "";
        let list1 = document.createElement("li");
        list1.innerText = ele.intro;
        let list2 = document.createElement("li");
        list2.innerText = ele.example;

        let list3 = document.createElement("li");
        list3.innerText = ele.function;
        let list4 = document.createElement("li");
        list4.innerText = ele.use;
        maindiv.append(list1, list2, list3, list4);

    })
}



function appendcons(data) {
    data.forEach(function (ele) {
        maindiv.innerHTML = "";
        let list1 = document.createElement("li");
        list1.innerText = ele.intro;
        let list2 = document.createElement("li");
        list2.innerText = ele.use;

        let list3 = document.createElement("li");
        list3.innerText = ele.declare;
        let list4 = document.createElement("li");
        list4.innerText = ele.private;
        maindiv.append(list1, list2, list3, list4);

    })
}


function appendproto(data) {
    data.forEach(function (ele) {
        maindiv.innerHTML = "";
        let list1 = document.createElement("li");
        list1.innerText = ele.intro;
        let list2 = document.createElement("li");
        list2.innerText = ele.use;

        let list3 = document.createElement("li");
        list3.innerText = ele.chain;
        let list4 = document.createElement("li");
        list4.innerText = ele.callback;
        maindiv.append(list1, list2, list3, list4);

    })

}