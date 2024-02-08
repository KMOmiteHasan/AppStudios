const container = document.querySelector("#section-container");
const elements = [...document.querySelectorAll(".snap")];
let activeIndex = 0;

const observer = new IntersectionObserver(handleIntersect, {
    root: container,
    rootMargin: "0px",
    threshold: 0.75
});

function handleIntersect(entries) {
    const entry = entries.find(e => e.isIntersecting);
    if (entry) {
        const index = elements.findIndex(
            e => e === entry.target
        );
        activeIndex = index;
        setNavigationImages();
    }
}

elements.forEach(el => {
    observer.observe(el);
});

function goPrevious() {
    if (activeIndex > 0) {
        elements[activeIndex - 1].scrollIntoView({
            behavior: 'smooth'
        })
    }
}

function goNext() {
    if (activeIndex < elements.length - 1) {
        elements[activeIndex + 1].scrollIntoView({
            behavior: 'smooth'
        })
    }
}

const navUpBtn = document.getElementById("nav-up");
const navDownBtn = document.getElementById("nav-down");

function setNavigationImages() {
    if (activeIndex == 0) {
        if (!navUpBtn.classList.contains("d-none")) {
            navUpBtn.classList.add("d-none")
        }
    }
    else if (activeIndex == elements.length - 1) {
        if (!navDownBtn.classList.contains("d-none")) {
            navDownBtn.classList.add("d-none")
        }
    }
    else {
        if (navUpBtn.classList.contains("d-none")) {
            navUpBtn.classList.remove("d-none")
        }
        if (navDownBtn.classList.contains("d-none")) {
            navDownBtn.classList.remove("d-none")
        }
    }
}

function submitForm() {
    var form = document.querySelector('.needs-validation');

    if (form.checkValidity() === false) {
        event.stopPropagation();
        form.classList.add('was-validated');
        return;
    }

    var nameInput = document.getElementById('nameInput');
    var emailInput = document.getElementById('emailInput');
    var phoneInput = document.getElementById('phoneInput');
    var projectInput = document.getElementById('messageInput');
    var whatsappMessage = 'Hello, my name is ' + nameInput.value + '. My email is ' + emailInput.value + '. ' +'. My phone is ' + phoneInput.value + '. ' + projectInput.value;
    var data = {
        toEmail: "pa7407071463@gmail.com",
        fromEmail : "pa7407071463@gmail.com",
        message: whatsappMessage
      };

    var requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };
    var apiUrl = 'https://api-qa.azurewebsites.net/api/company/send-mail-temp';

    fetch(apiUrl, requestOptions)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        nameInput.value = "";
        emailInput.value = "";
        phoneInput.value = "";
        projectInput.value = "";
        alert('Form submitted successfully!');
    })
    .catch(error => {
        // Handle errors
        console.error('Error:', error);
        alert('Form submission failed. Please try again.');
    });

    event.preventDefault();
}

function playPauseVideo() {
    let videos = document.querySelectorAll("video");
    videos.forEach((video) => {
        // We can only control playback without insteraction if video is mute
        video.muted = true;
        video.loop = true;
        // Play is a promise so we need to check we have it
        let playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.then((_) => {
                let observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (
                                entry.intersectionRatio !== 1 &&
                                !video.paused
                            ) {
                                video.pause();
                            } else if (video.paused) {
                                video.play();
                            }
                        });
                    },
                    { threshold: 0.2 }
                );
                observer.observe(video);
            });
        }
    });
}

playPauseVideo();


// Assuming you have multiple feature cards with different IDs like "lottie-1", "lottie-2", etc.
var featureCards = document.getElementsByClassName("feature-card");

// Iterate through each feature card
Array.from(featureCards).forEach(function(card) {
    var lottiePlayer = card.getElementsByTagName("lottie-player")[0];

    // Add mouseenter event
    $(card).on('mouseenter', function(event) {
        lottiePlayer.setDirection(1);
        lottiePlayer.play();
    });

    // Add mouseleave event
    $(card).on('mouseleave', function(event) {
        lottiePlayer.pause();
    });
});