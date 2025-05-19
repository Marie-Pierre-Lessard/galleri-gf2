// OPGAVE
// Galleri karusel
// I denne opgave, skal vi producere et simpelt galleri, baseret på data objekter.
// Vi skal arbejde med:  
// - Data objekter
// - At oprette DOM elementer
// - Events
// Du skal her lave et galleri der kan følgende:
// skifte billede ved tryk på pil frem og tilbage
// HUSK!
// Inden du går igang, skal du opsætte en GitHub page, til din main branch, og aflevere et link til dit Repository.

// Din cool code here

/* References: 
- modal gallery code-along + assignment 
- */

const arrImages = [
    {
        file: 'elephant.jpg',
        title: 'An elephant'
    },
    {
        file: 'great-white.jpg',
        title: 'A great white shark'
    },
    {
        file: 'koala.jpg',
        title: 'A koala'
    },
    {
        file: 'smithi.jpg',
        title: 'A tarantula'
    },
    {
        file: 'tiger.jpg',
        title: 'A tiger'
    }
];

/* arrImages has to be defined before this console log is created, otherwise there is an error */
console.log(arrImages);

/* The following creates LIs for all items in the array. It's the CSS file gives them all LIs a hidden class, which is then overriden by a class that displays only the 3 first images. */
const displayGallery = () => {
    for (let item of arrImages) {
        console.log(item);

        const li = document.createElement('li');
        const article = document.createElement('article');
        const img = document.createElement('img');
        const imgCaption = document.createElement('footer');

        imgCaption.innerText = item.title;
        img.src = `assets/img/${item.file}`;
        img.alt = `${item.title}`;

        /* "In simple words, the console. log() returns the object in its string representation and console. dir() recognizes the object just as an object and outputs its properties. Both log() and dir() returns the string just as a string." https://www.geeksforgeeks.org/difference-between-console-dir-and-console-log-2/ */
        console.log(li);
        console.dir(img);

        article.append(img);
        article.append(imgCaption);
        li.append(article);

        console.log(article);
        document.getElementById('sliderApp').append(li);
    };    
};

/* This has to be after displayGallery is defined because it cannot be hoisted with an arrow function. The hoisting is only possible with a named or anonymous function (the word function has to be used). */
displayGallery();

/* Reference: https://medium.com/@algopoint.ltd/how-to-create-a-slideshow-carousel-using-html-css-js-7ab0561b39b3 
The following is inspired by the above reference. Some of it matches the techniques we were already taught, so some of the syntax comes from my previous gallery assignment (with a modal). */

const buttonLeft = document.getElementById('leftButton');
console.log(buttonLeft);
console.dir(buttonLeft);
const buttonRight = document.getElementById('rightButton');
console.log(buttonRight);
console.dir(buttonRight);

const sliderContainer = document.getElementById('sliderApp');
/* "The scrollLeft property of the Element interface gets or sets the number of pixels by which an element's content is scrolled from its left edge. This value is subpixel precise in modern browsers, meaning that it isn't necessarily a whole number." https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft 
There is no scrollRight property. It's scrollLeft by a negative or positive value.
At 150, I didn't get enough scrolling with these pictures. */
const itemWidth = 196;
const padding = 64;
/* 196+64= 260 pixels */

buttonLeft.addEventListener('click', (e) => {
    /* This console log shows that the button is working */
    console.log('User clicked on the left button');

    /* What does "minus equal" mean? 
    "The subtraction assignment (-=) operator performs subtraction on the two operands and assigns the result to the left operand." https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment 
    "Assignment operators
    An assignment operator assigns a value to its left operand based on the value of its right operand. The simple assignment operator is equal (=), which assigns the value of its right operand to its left operand. That is, x = f() is an assignment expression that assigns the value of f() to x." https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators */
    sliderContainer.scrollLeft -= (itemWidth + padding);  
});

buttonRight.addEventListener('click', (e) => {
    /* This console log shows that the button is working */
    console.log('User clicked on the right button');
    
    /* What does "plus equal" mean?
    "The addition assignment (+=) operator performs addition (which is either numeric addition or string concatenation) on the two operands and assigns the result to the left operand." https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment */
    sliderContainer.scrollLeft += (itemWidth + padding);  
});

