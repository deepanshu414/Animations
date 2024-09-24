const words = ['Welcome', 'To', 'Animations'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const erasingSpeed = 100;
const newWordDelay = 2000; 

function typeEffect() {
    const currentWord = words[wordIndex];
    const textElement = document.getElementById('animatedText');

    if (isDeleting) {
        // Remove a character
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Add a character
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // If word is complete
    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, newWordDelay);
    }
    // If word is fully deleted
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
    }
    // Continue typing or deleting
    else {
        setTimeout(typeEffect, isDeleting ? erasingSpeed : typingSpeed);
    }
}

typeEffect();
