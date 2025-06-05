document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById('plant-loader').classList.add('grow');
    }, 200);

    setTimeout(() => {
        document.getElementById('plant-loader').classList.add('hide');
    }, 1800);


    setTimeout(() => {
        const loader = document.getElementById('plant-loader');
        if (loader) loader.remove();
    }, 2500);
});




document.addEventListener("DOMContentLoaded", () => {

    const leafImages = [
        "🍃", "🌿", "🍂"
    ];
    const leafCount = 20;

    for (let i = 0; i < leafCount; i++) {
        createFallingLeaf();
    }

    function createFallingLeaf() {
        const leaf = document.createElement("div");
        leaf.classList.add("falling-leaf");
        leaf.style.left = (Math.random() * 100) + "vw"; 
        leaf.style.animationDuration = (3 + Math.random() * 4) + "s";
        leaf.style.fontSize = (24 + Math.random() * 24) + "px";
        leaf.innerText = leafImages[Math.floor(Math.random() * leafImages.length)];
        document.body.appendChild(leaf);

        leaf.addEventListener("animationend", () => {
            leaf.remove();
            createFallingLeaf();
        });
    }

    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.style.opacity = 0;
        mainContent.style.transition = "opacity 1.5s";
        setTimeout(() => {
            mainContent.style.opacity = 1;
        }, 300);
    }

    const header = document.querySelector('header');
    if (header) {
        header.style.opacity = 0;
        header.style.transition = "opacity 1.5s";
        setTimeout(() => {
            header.style.opacity = 1;
        }, 100);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const contactoLink = document.querySelector('a[href="#contactos"]');
    const contactosSection = document.getElementById('contactos');
    if (contactoLink && contactosSection) {
        contactoLink.addEventListener('click', function(e) {
            e.preventDefault();
            contactosSection.scrollIntoView({ behavior: 'smooth' });
            contactosSection.classList.remove('highlight-fade');
            contactosSection.classList.add('highlight');
            setTimeout(() => {
                contactosSection.classList.remove('highlight');
                contactosSection.classList.add('highlight-fade');
            }, 600); 
            setTimeout(() => {
                contactosSection.classList.remove('highlight-fade');
            }, 2000); 
        });
    }
});

