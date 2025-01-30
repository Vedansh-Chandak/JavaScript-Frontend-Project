document.addEventListener("DOMContentLoaded", function () {
    // Image Sources for Gallery and Hero Section
    const imageSources = [
        "https://i.pinimg.com/736x/6d/6f/ed/6d6fedd989d7fc6e7d42de0ac0e2374a.jpg",
        "https://i.pinimg.com/736x/3f/af/f7/3faff74593dad7e8475eff4a65b15920.jpg",
        "https://i.pinimg.com/736x/bd/5f/33/bd5f3398beef168b3b46d0f75d54c65e.jpg",
        "https://i.pinimg.com/736x/f1/83/2b/f1832b63f0feaefc9aa0b273a008437b.jpg",
        "https://i.pinimg.com/736x/ec/20/ef/ec20efa78d47532895db3abb239ba126.jpg",
        "https://i.pinimg.com/736x/e6/32/2d/e6322dc55650aa712e5a8b900f65b6dc.jpg"
    ];

    const galleryImages = [
        "https://i.pinimg.com/736x/6d/6f/ed/6d6fedd989d7fc6e7d42de0ac0e2374a.jpg",
        "https://i.pinimg.com/736x/db/80/c9/db80c90b4296514e713807fcbb3f1161.jpg",
        "https://i.pinimg.com/736x/21/f6/f1/21f6f10ea96b82e1354274979db9dd45.jpg",
        "https://i.pinimg.com/736x/bd/65/95/bd6595e2f72413d11e0c9febca78871c.jpg",
        "https://i.pinimg.com/736x/4e/9f/4c/4e9f4cdf10354dd4611faa287d8b50dd.jpg",
        "https://i.pinimg.com/736x/2b/58/7a/2b587ae12a6e8fb64ed8d13986221092.jpg",
        "https://i.pinimg.com/736x/a4/ea/ce/a4eace1c27bc4335f11b5e904bdc3a43.jpg",
        "https://i.pinimg.com/736x/1b/e8/fd/1be8fdb07e5ae9ab3603454e781dc66b.jpg",
        "https://i.pinimg.com/736x/94/bd/98/94bd985df40728032bb217159ac337b6.jpg"
    ];

    // Dynamically add images to Hero Section (Slider)
    const sliderTrack = document.querySelector(".slider-track");
    imageSources.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Heritage Image";
        sliderTrack.appendChild(img);
    });

    // Dynamically add Info Cards to Info Section
    const infoCards = [
        { title: "Architectural Wonders", imgSrc: "https://i.pinimg.com/736x/00/df/58/00df5851d01aec219d454b25cb396cf2.jpg",  link: "https://pnccs.edu.in/blog/discover-iconic-monuments-of-india/" },
        { title: "Cultural Festivities", imgSrc: "https://i.pinimg.com/736x/a0/ce/00/a0ce00341f1dc84ec9c898ffdcdeeba1.jpg", link: "https://www.fabhotels.com/blog/festivals-of-india/" },
        { title: "Historical Landmarks", imgSrc: "https://i.pinimg.com/736x/7d/50/44/7d5044f2757e1a6897a68aee2fa191c2.jpg" }
    ];

    const infoContainer = document.querySelector(".info-cards");
    infoCards.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("info-card");
        cardElement.innerHTML = `
       <a href="${card.link}" target="_blank">
            <img src="${card.imgSrc}" alt="${card.title}">
            <h3>${card.title}</h3>
            <p>Explore India's rich heritage.</p>
        `;
        infoContainer.appendChild(cardElement);
        
    });

    // Dynamically add images to Gallery Section
    const galleryTrack = document.querySelector(".gallery-track");
    galleryImages.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Heritage Gallery Image";
        galleryTrack.appendChild(img);
    });


});
