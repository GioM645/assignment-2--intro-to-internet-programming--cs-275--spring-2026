/* eslint-disable no-undef */
// -----------------------------------------------------------------------------
// This file includes deliberate formatting errors in order for you to verify
// that ESLint and EditorConfig are working properly. If both tools are, indeed,
// working correctly, then you’d see errors in your editor about indentation and
// improper use of footmarks instead of back ticks. When you save this file,
// your editor should strip all excess newlines and whitespace characters from
// the file. If both of these events occur, then ESLint and EditorConfig are
// working correctly.
//
// DON’T PROCEED UNTIL YOU’RE SURE ESLINT AND EDITORCONFIG ARE WORKING CORRECTLY
// -----------------------------------------------------------------------------
let activeSlide = 0;
let body = document.querySelector("body");

// eslint-disable-next-line no-unused-vars
let siteData = (loader) => {
    let slideBoundingBox = document.querySelector(".carousel-slides");
    let arrowButtonBase = document.querySelectorAll(".carousel-navigation a")

    let leftArrow = arrowButtonBase[0];
    let rightArrow = arrowButtonBase[1];

    let displaySlideContents = () => {
        let current = loader[activeSlide];
        slideBoundingBox.innerHTML = "";
        let albumSlide = document.createElement("div");
        let albumTitle = document.createElement("h2");
        let albumImage = document.createElement("img");
        let albumReview = document.createElement("p");
        let albumImageSource = document.createElement("a");
        let albumImageCredit = document.createElement("h3")
        let slideReview = document.createElement("a");
        let slideReviewContainer = document.createElement("h4");

        albumSlide.className = "slide";
        albumTitle.textContent = current.artist + " - " + current.album;
        albumImage.src = current.cover_image.path;
        albumImage.alt = current.cover_image.alt_content;
        albumReview.textContent = current.review.content + " --" + current.review.source;
        albumImageSource.href = current.cover_image.url;
        albumImageSource.text = "Credit - " + current.cover_image.credit;
        slideReview.href = current.review.url;
        slideReview.text = "Review Source: " + current.review.source;

        albumSlide.appendChild(albumTitle);
        albumSlide.appendChild(albumImage);
        albumImageCredit.appendChild(albumImageSource);
        albumSlide.appendChild(albumImageCredit);
        albumSlide.appendChild(albumReview);
        slideReviewContainer.appendChild(slideReview);
        albumSlide.appendChild(slideReviewContainer);
        slideBoundingBox.appendChild(albumSlide);
    };
    leftArrow.onclick = (event) => {
        event.preventDefault();
        if (activeSlide > 0) {
            activeSlide = activeSlide - 1;
            displaySlideContents();
        }
    };
    displaySlideContents();
    rightArrow.onclick = (event) => {
        event.preventDefault();
        if (activeSlide < loader.length-1){
            activeSlide = activeSlide + 1;
            displaySlideContents();
        }
    };
    document.onkeydown = (event) => {
        if (event.key == "ArrowLeft"){
            if (activeSlide > 0){
                activeSlide = activeSlide - 1;
                displaySlideContents();
            }
        }
        if (event.key == "ArrowRight"){
            if (activeSlide < loader.length-1){
                activeSlide = activeSlide + 1;
                displaySlideContents();
            }
        }
    };

};
window.onload = () => {
    script = document.createElement("script");
    script.setAttribute("src", "json/data.json");
    body.appendChild(script);
};
