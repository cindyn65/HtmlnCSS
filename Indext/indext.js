var fred = ['fred', 'Flinstone' , 'fred@gmail.com', 50];

console.log('length = ', fred.length);

//for (var i = 0; i< fred.length; i++){
for (var i in fred){
    if (i == 0)
        console.log('First name: ', fred[i])
    else if (i == 1)
        console.log('Last name: ' , fred[i])
    else if (i == 2)
        console.log('Email: ' , fred[i])
    else
        console.log('Age: ' , fred[i])

}


//Create an Image 
//var imgElem = document.createElement('img');

//Decorate an Element
//imgElem.setAttribute('src','images/beer.png'); 

//Find the place to attach the Element
//var hereElem = document.body.querySelector("#here");

//Attach image to hereElem
//hereElem.appendChild(imgElem);


