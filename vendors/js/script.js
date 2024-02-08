
$(document).ready(function () {
    $(".feature-highlight-card-wrapper")
        .not(".slick-initialized")
        .slick({
            infinite: true,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 2000,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            prevArrow: ".slider-btn-left",
            nextArrow: ".slider-btn-right",
            responsive: [
                {
                    breakpoint: 770,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
});

let serviceCardOverlayBtn = document.querySelectorAll(".service-card-overlay-btn")

serviceCardOverlayBtn.forEach(e => {
    e.addEventListener("click", () => {
        e.classList.toggle("active-overlay-btn")
        for (let i = 0; i < 24; i++) {
            // console.log(document.getElementsByTagName("option")[i].value)
            if (e.innerText === document.getElementsByTagName("option")[i].value) {
                console.log(e.innerHTML)
                if (e.classList.contains("active-overlay-btn")) {
                    console.log(e.innerHTML)
                    document.getElementsByTagName("option")[i].selected = true
                    console.log(document.getElementsByTagName("option")[i].selected)
                    new MultiSelectTag('categoryForm', {
                        rounded: true,    // default true
                        shadow: true,      // default false
                        placeholder: 'Category'
                    })
                    console.log(document.querySelector(".category-select-block").children.length)
                    if (document.querySelector(".category-select-block").children.length > 3) {
                        $('.category-select-block').children().last().remove();
                    }
                }
            }
        }
    })

})

function submitToWhatsApp() {
    var name = document.getElementById('nameForm');
    var email = document.getElementById('emailForm');
    var message = document.getElementById('msgForm');
    var whatsappMessage = 'Hello, my name is ' + name.value + '. My email is ' + email.value + '. ' + message.value;
    //var whatsappUrl = 'https://wa.me/+917001871130?text=' + encodeURIComponent(whatsappMessage);

    //window.open(whatsappUrl, '_blank');

    const data = {
        toEmail: "pa7407071463@gmail.com",
        fromEmail : "pa7407071463@gmail.com",
        message: whatsappMessage
      };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };
    // Define the API URL
    const apiUrl = 'https://api-qa.azurewebsites.net/api/company/send-mail-temp';

    // Make a GET request
    fetch(apiUrl, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            //outputElement.textContent = JSON.stringify(data, null, 2);
            name.value = "";
            email.value = "";
            message.value = "";
            alert("We will be responding to you shortly!")
        })
        .catch(error => {
            console.error('Error:', error);
        });
    return false;
}

// new MultiSelectTag('categoryForm', {
//     rounded: true,    // default true
//     shadow: true,      // default false
//     placeholder: 'Category'
// })