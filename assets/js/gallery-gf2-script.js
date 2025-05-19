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

/* Idea on how to do this:
- Use the code for the gallery in a modal, which only shows 1 picture.
- Create a variable for pictures 2 and 3, which shall have a value of the index of picture 1 plus 1 and 2 respectively. 
- Include code to display pictures 2 and 3 in a specific location, not just declare them. 
I think that when the index of picture 1 changes at the click of a button, pictures 2 and 3 will have to be replaced by the same token. It's more straightforward than trying to replace each of the 3 pictures with a similar code. */

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

// TO DO: do I need this? I think so bec. this goes with the buttons ()
// let indexImgCardOne = 0;
// let indexImgCardTwo = 1;
// let indexImgCardThree = 2;

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
    /* With this, I was trying to create a loop that only shows 3 first pictures in the array when user accesses page. 
    I got no error message, but I also couldn't see any image. 
    for (let i = 0; i < arrImages[1]; i++) {
        console.log(i);

        const li = document.createElement('li');
        const article = document.createElement('article');
        const img = document.createElement('img');
        const imgCaption = document.createElement('footer');

        imgCaption.innerText = i.title;
        img.src = `assets/img/${i.file}`;
        img.alt = `${i.title}`;

        console.log(article);
        console.dir(img);

        article.append(img);
        article.append(imgCaption);
        li.append(article);

        console.log(article);
        document.getElementById('sliderApp').append(li);
    };
    */

    // This tells me that it can't find the grandparents... Don't know why.
    // let indexImgCardOne = arrImages[0];
    // let indexImgCardTwo = arrImages[1];
    // let indexImgCardThree = arrImages[2];
    
    // let parentCardOne = indexImgCardOne.parentElement;
    // let parentCardTwo = indexImgCardTwo.parentElement;
    // let parentCardThree = indexImgCardThree.parentElement;
    
    // let grandparentCardOne = parentCardOne.parentElement;
    // let grandparentCardTwo = parentCardTwo.parentElement;
    // let grandparentCardThree = parentCardThree.parentElement;
    
    // document.getElementById('sliderApp').append(grandparentCardOne);
    // document.getElementById('sliderApp').append(grandparentCardTwo);
    // document.getElementById('sliderApp').append(grandparentCardThree);
    // grandparentCardOne.classList.remove('hidden');
    // grandparentCardTwo.classList.remove('hidden');
    // grandparentCardThree.classList.remove('hidden');

};

/* This has to be after displayGallery is defined because it cannot be hoisted with an arrow function. The hoisting is only possible with a named or anonymous function (the word function has to be used). */
displayGallery();

function showPrev() {
        /* img = value, index is the index of the array (the position in the list) */
        arrImages.forEach((img, index) => {
            /* This logs the image associated with each index */
            console.log(index,img);
            let currentIndex = index;
            
            /* For left button: increase index to move to the right and show previous picture */    
            currentIndex = (currentIndex + 1) % arrImages.length;
        });
        
        displayGallery(arrImages);
};
    
function showNext() {
    /* img = value, index is the index of the array (the position in the list) */
    arrImages.forEach((img, index) => {
        /* This logs the image associated with each index */
        console.log(index,img);
        let currentIndex = index;
            
        /* For right button: lower the index to move to the left and show next */
        /* % (modulus) indicates a division; with modulus, the elements affected are the remainder of the equation since modulus only takes integers into account.
        Here, if the picture shown is no. 2: 2-1 = 1; 1+16 = 17; 17/16 gives the remainder 1 as a result. */  
        currentIndex = (currentIndex - 1 + arrImages.length) % arrImages.length;
    });
    
    displayGallery(arrImages);
};


const buttonLeft = document.getElementById('leftButton');
console.log(buttonLeft);
console.dir(buttonLeft);
const buttonRight = document.getElementById('rightButton');
console.log(buttonRight);
console.dir(buttonRight);
    
buttonLeft.addEventListener('click', (e) => {
    /* This console log shows that the button is working */
    console.log('User clicked on the left button');

    showPrev(); 
});

buttonRight.addEventListener('click', (e) => {
    /* This console log shows that the button is working */
    console.log('User clicked on the right button');

    showNext();
});


    /* Teacher's example to follow (it uses the arrow keys instead of buttons on the screen):

const arrImages = [
    {
        file: 'agaeta01.jpeg',
        title: 'Agaeta'
    },
    {
        file: 'agaeta02.jpeg',
        title: 'Agaeta'
    },
    {
        file: 'confital01.jpeg',
        title: 'Confital'
    },
    {
        file: 'dessert01.jpeg',
        title: 'Playa Del Ingles'
    },
    {
        file: 'laaldea01.jpeg',
        title: 'Playa La Aldea'
    }
]
 
const displayGallery = (num_images = 4) => {
    for(let item of arrImages) {
        const div = document.createElement('div')
        const figure = document.createElement('figure')
        const img = document.createElement('img')
        const caption = document.createElement('caption')
        caption.innerText = item.title
        img.src = `images/gallery/small/${item.file}`
 
        figure.appendChild(img)
        div.appendChild(figure)
        div.appendChild(caption)
        document.getElementById('gallery').appendChild(div)
    }
}
 
displayGallery()
 
document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    const images = Array.from(gallery.querySelectorAll("img"));
    // Opret lightbox container
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);

    let currentIndex = 0;
    const openLightbox = (index) => {
        currentIndex = index;
        const imgClone = images[currentIndex].cloneNode();
        lightbox.innerHTML = "";
        lightbox.appendChild(imgClone);
        lightbox.classList.add("active");
    };
    const closeLightbox = () => {
        lightbox.classList.remove("active");
    };
    const showNext = () => {
        currentIndex = (currentIndex + 1) % images.length;
        openLightbox(currentIndex);
    };
    const showPrev = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        openLightbox(currentIndex);
    };
    // Klik på billeder
    images.forEach((img, i) => {
        img.addEventListener("click", () => openLightbox(i));
    });
    // Klik på overlay = luk
    lightbox.addEventListener("click", closeLightbox);

    // Piletaster og Escape
    document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("active")) return;
        if (e.key === "ArrowRight") {
            showNext();
        } else if (e.key === "ArrowLeft") {
            showPrev();
        } else if (e.key === "Escape") {
            closeLightbox();
        }
    });
});        
        */

