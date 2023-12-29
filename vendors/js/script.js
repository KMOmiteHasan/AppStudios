
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

serviceCardOverlayBtn.forEach(e=>{
    e.addEventListener("click", ()=>{
        e.classList.toggle("active-overlay-btn")
        for (let i = 0; i < 24; i++) {
            // console.log(document.getElementsByTagName("option")[i].value)
            if (e.innerText === document.getElementsByTagName("option")[i].value){
                console.log(e.innerHTML)
                if(e.classList.contains("active-overlay-btn")){
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



    new MultiSelectTag('categoryForm', {
        rounded: true,    // default true
        shadow: true,      // default false
        placeholder: 'Category'
    })