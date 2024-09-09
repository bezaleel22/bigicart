"use strict";
document.addEventListener("DOMContentLoaded", function () {
  let onboardingStepsSlider = document.querySelectorAll(
    ".onboarding-steps-slider"
  );
  const swiperNavButtonText = document.querySelector(".buttonText");

  onboardingStepsSlider &&
    onboardingStepsSlider.forEach(function (onboardingStepsSlider) {
      const swiper = new Swiper(onboardingStepsSlider, {
        slidesPerView: 1,
        slidesToShow: 1,
        paginationClickable: true,
        spaceBetween: 4,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: onboardingStepsSlider.querySelector(".ara-next"),
        },
      });

      swiper.on("reachEnd", function () {
        swiperNavButtonText.innerHTML = `<a href="./sign-up.html" class="text-white font-semibold block py-3 rounded-xl bg-g60 text-center mx-6">Get Started</a>`;
      });
    });

  let homeSlider = document.querySelectorAll(".home-slider");

  homeSlider &&
    homeSlider.forEach(function (homeSlider) {
      const swiper = new Swiper(homeSlider, {
        slidesPerView: 1.15,
        slidesToShow: 1,
        paginationClickable: true,
        spaceBetween: 16,
      });
    });

  // product image slider

  let productImgSlider = document.querySelectorAll(".product-image-slider");
  const productImgSliderItem = document.querySelector(".product-image-slider");
  const currentSlideIndex = document.querySelector(".curentSlideIndex");

  if (productImgSliderItem) {
    const productSliderLength = productImgSliderItem.querySelector(
      "#productSliderLength"
    );
    const productImgSliderLength =
      productImgSliderItem.querySelectorAll(".swiper-slide").length;

    productSliderLength.innerText = `${productImgSliderLength}`;
  }

  productImgSlider &&
    productImgSlider.forEach(function (productImgSlider) {
      const swiper = new Swiper(productImgSlider, {
        slidesPerView: 1,
        slidesToShow: 1,
        paginationClickable: true,
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      swiper.on("slideChange", function () {
        currentSlideIndex.innerText = `${swiper.realIndex + 1}`;
      });
    });
});
