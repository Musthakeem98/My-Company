document.addEventListener("DOMContentLoaded", function () {
  // Swiper slides data
  const slidesData = [
    {
      imgSrc: "./assets/images/img1.png",
      text: "class of school children in Bellevue, Nebraska have been celebrated on social media after they replaced their teacher’s stolen shoes. The teacher, Trey Payne was devastated to find out that his expensive trainers had been stolen from the classroom however after hearing the news, his students pooled their money together to buy him a new pair.",
    },
    {
      imgSrc: "./assets/images/img2.png",
      text: "I started writing articles on this website back in 2009. When I started out, I wanted to write articles that are interesting not just to me, but to you, the reader. I wanted this website to become home to some of the most interesting reads online, combining short, informative, and thought-provoking articles in one place.",
    },
    {
      imgSrc: "./assets/images/img3.png",
      text: "I know it’s not what the cool kids like to do, but I like to read non-fiction. Lots of non-fiction. And my favorite moments reading non-fiction are when a book bitchslaps my brain and reconfigures my entire understanding of reality and my place within it. I get a lot of emails asking me for book recommendations. I love that. It’s like a mind orgasm.",
    },
    {
      imgSrc: "./assets/images/img2.png",
      text: "I started writing articles on this website back in 2009. When I started out, I wanted to write articles that are interesting not just to me, but to you, the reader. I wanted this website to become home to some of the most interesting reads online, combining short, informative, and thought-provoking articles in one place.",
    },
    {
      imgSrc: "./assets/images/img3.png",
      text: "I know it’s not what the cool kids like to do, but I like to read non-fiction. Lots of non-fiction. And my favorite moments reading non-fiction are when a book bitchslaps my brain and reconfigures my entire understanding of reality and my place within it. I get a lot of emails asking me for book recommendations. I love that. It’s like a mind orgasm.",
    },
  ];

  // Function to generate swiper slides
  function generateSwiperSlides() {
    const swiperWrapper = document.getElementById("swiper-wrapper");
    slidesData.forEach((slide) => {
      swiperWrapper.innerHTML += `
                <div class="swiper-slide edit-swiper-slide">
                    <div class="container news-slid-center">
                        <div class="row news-slid-img">
                            <img src="${slide.imgSrc}" alt="" />
                        </div>
                        <div class="row news-slid-news">
                            <p>${slide.text}</p>
                        </div>
                        <div class="row">
                            <div class="news-slid-read-link">
                                <a href="#">Read </a>
                                <a href="#"><img src="./assets/images/right-icon.svg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
    });
  }

  // Call function to generate swiper slides
  generateSwiperSlides();

  // Initialize Swiper
  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    spaceBetween: 70,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination-news",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 70,
      },
    },
  });
});
