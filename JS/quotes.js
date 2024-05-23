document.addEventListener("DOMContentLoaded", function () {
  // Testimonials data
  const testimonialsData = [
    {
      quote:
        "Hard work can help people develop character, motivate themselves, overcome hardships and achieve their goals. Many successful individuals have received or given helpful advice regarding hard work, as their achievements are often the result of their work ethic. Reading others' thoughts on hard work can help you maintain discipline and motivation as you aim to achieve success in your career and life.",
      author: "Ernest Hemingway",
      subAuthor: "Ernest Hemingway",
    },
    {
      quote:
        "You should write because you love the shape of stories and sentences and the creation of different words on a page. Writing comes from reading, and reading is the finest teacher of how to write.",
      author: "Annie Proulx",
      subAuthor: "Virginia Woolf",
    },
    {
      quote:
        "Read, read, read. Read everything -- trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and studies the master. Read! You'll absorb it. Then write. If it's good, you'll find out. If it's not, throw it out of the window.",
      author: "Ray Bradbury, Zen in the Art of Writing",
      subAuthor: "Toni Morrison",
    },
  ];

  // Function to generate swiper slides
  function generateTestimonialSlides() {
    const swiperWrapper = document.getElementById("swiper-wrappers");
    testimonialsData.forEach((testimonial) => {
      swiperWrapper.innerHTML += `
                <div class="swiper-slide swiper-slide-news">
                    <div class="container quote-container">
                        <div class="row">
                            <div class="right-quote">
                                <img src="./assets/images/quote-right-Icon.svg" alt="" />
                            </div>
                        </div>
                        <div class="row">
                            <p class="quote-text">${testimonial.quote}</p>
                        </div>
                        <div class="row">
                            <div class="left-quote">
                                <img src="./assets/images/quote-right-Icon.svg" alt="" />
                            </div>
                        </div>
                        <div class="row">
                            <p class="quote-author">${testimonial.author}</p>
                        </div>
                        <div class="row">
                            <p class="quote-sub-author">${testimonial.subAuthor}</p>
                        </div>
                    </div>
                </div>
            `;
    });
  }

  // Call function to generate swiper slides
  generateTestimonialSlides();

  // Initialize Swiper
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".custom-swiper-button-next",
      prevEl: ".custom-swiper-button-prev",
    },
  });
});
