// Function to simulate scrolling page by page and clicking canvas after each scroll
function scrollPageAndClickCanvas() {
    // Set the scroll amount to the height of the viewport
    var scrollAmount = window.innerHeight;

    // Helper function to scroll down page by page
    function scrollDown() {
        window.scrollBy(0, scrollAmount);
    }

    // Helper function to simulate a click on the canvas element
    function clickCanvas() {
        var canvasElement = document.querySelector('canvas');
        if (canvasElement) {
            console.log("Clicking on canvas...");
            canvasElement.click();
        } else {
            console.log("Canvas element not found.");
        }
    }

    // Scroll down, click canvas, and repeat
    function scrollAndClick() {
        scrollDown();
        setTimeout(function() {
            clickCanvas();
            setTimeout(function() {
                var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (currentScrollTop + window.innerHeight >= document.body.scrollHeight) {
                    console.log("End of page reached.");
                    return;
                }
                scrollAndClick(); // Recursive call to continue scrolling and clicking
            }, 1000); // Adjust the timeout as needed
        }, 1000); // Adjust the timeout as needed
    }

    // Call scrollAndClick to start the process
    scrollAndClick();
}

// Call the function to begin scrolling page by page and clicking canvas after each scroll
scrollPageAndClickCanvas();
