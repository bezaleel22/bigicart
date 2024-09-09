"use strict";

/*============================================ 
======== Table of JS Functions =========


============================================*/

document.addEventListener("DOMContentLoaded", function () {
  /*
===============================================================
=> Reusable Functions Start
===============================================================
  */
  // modal toggle function
  function modalToggle(modalName, modalBox, open, close) {
    modalName.addEventListener("click", () => {
      if (modalBox.classList.contains(open)) {
        modalBox.classList.remove(open);
        modalBox.classList.add(close);
        document.removeEventListener("click", closeDropdownOutside);
      } else {
        modalBox.classList.add(open);
        modalBox.classList.remove(close);
        document.addEventListener("click", closeDropdownOutside);
      }

      function closeDropdownOutside(event) {
        const isClickedInsideDropdown = modalBox.contains(event.target);
        const isClickedOnDropdownBtn = modalName.contains(event.target);

        if (!isClickedInsideDropdown && !isClickedOnDropdownBtn) {
          modalBox.classList.add(close);
          modalBox.classList.remove(open);
          document.removeEventListener("click", closeDropdownOutside);
        }
      }
    });
  }

  //select active item
  function selectOneItem(items) {
    if (items) {
      const item = items.querySelectorAll(".item");

      item.forEach((e) =>
        e.addEventListener("click", () => {
          if (!e.classList.contains("active")) {
            items.querySelector(".active").classList.remove("active");

            e.classList.add("active");
          }
        })
      );
    }
  }

  //select item from modal
  function selectItemFromModal(items, modalBox, slectText) {
    items.forEach((e) =>
      e.addEventListener("click", () => {
        modalBox.classList.remove("modalClose");
        modalBox.classList.add("modalOpen");
        slectText.innerHTML = e.textContent;
      })
    );
  }

  // Modal with different open and close button
  function modalDiffOpenClose(
    modalClass,
    modalOpenButtonClass,
    modalCloseButtonClass,
    closeModalClass,
    openModalClass
  ) {
    const modal = document.querySelector(`.${modalClass}`);
    const modalOpenButton = document.querySelector(`.${modalOpenButtonClass}`);
    const modalCloseButton = document.querySelector(
      `.${modalCloseButtonClass}`
    );
    modal &&
      modalOpenButton.addEventListener("click", () => {
        modal.classList.remove(closeModalClass);
        modal.classList.add(openModalClass);
      });

    modal &&
      modalCloseButton.addEventListener("click", () => {
        modal.classList.remove(openModalClass);
        modal.classList.add(closeModalClass);
      });
  }

  // Select One From Maney Item
  function selectItemFromMany(
    parentClass,
    itemClass,
    activeItemStyle,
    inactiveItemStye
  ) {
    const selectParentClass = document.querySelector(`.${parentClass}`);
    const items = selectParentClass?.querySelectorAll(`.${itemClass}`);

    selectParentClass &&
      items.forEach((e) => {
        e.addEventListener("click", () => {
          const activeItem = selectParentClass.querySelector(
            `.${activeItemStyle}`
          );

          const inactiveItem = e.querySelector(`.${inactiveItemStye}`);

          if (inactiveItem) {
            activeItem.classList.remove(activeItemStyle);
            activeItem.classList.add(inactiveItemStye);

            inactiveItem.classList.remove(inactiveItemStye);
            inactiveItem.classList.add(activeItemStyle);
          }
        });
      });
  }

  // Select One Item From Many
  function selectOneItem(items) {
    if (items) {
      const item = items.querySelectorAll(".item");

      item.forEach((e) =>
        e.addEventListener("click", () => {
          if (!e.classList.contains("active")) {
            items.querySelector(".active").classList.remove("active");

            e.classList.add("active");
          }
        })
      );
    }
  }

  function showPasswordFunc(item, passField) {
    item.addEventListener("click", () => {
      if (item.classList.contains("ph-eye-closed")) {
        item.classList.add("ph-eye");
        item.classList.remove("ph-eye-closed");
        passField.setAttribute("type", "text");
      } else {
        item.classList.remove("ph-eye");
        item.classList.add("ph-eye-closed");
        passField.setAttribute("type", "password");
      }
    });
  }

  //create Tab
  function createTab(
    tabArea,
    activeTabButtonClass,
    activeTabClass,
    hiddenTabClass,
    tabButtonClass,
    tabContentClass
  ) {
    const tabButtons = document.querySelectorAll(`.${tabButtonClass}`);
    const tabContent = document.querySelectorAll(`.${tabContentClass}`);

    tabButtons.forEach((e) => {
      e.addEventListener("click", () => {
        if (!e.classList.contains(activeTabClass)) {
          const activeTabButton = tabArea.querySelector(
            `.${activeTabButtonClass}`
          );
          const tabData = tabArea.querySelector(`#${e.id}_data`);

          activeTabButton.classList.remove(activeTabButtonClass);
          e.classList.add(activeTabButtonClass);

          tabArea
            .querySelector(`.${activeTabClass}`)
            .classList.remove(activeTabClass);
          //Add hiddentab class on every tab data element if the classlist doen't contain hiddentab class
          tabContent.forEach((e) => {
            if (!e.classList.contains(hiddenTabClass)) {
              e.classList.add(hiddenTabClass);
            }
          });

          tabData.classList.remove(hiddenTabClass);
          tabData.classList.add(activeTabClass);
        }
      });
    });
  }

  /*
===============================================================
=> Reusable Functions End
===============================================================
*/

  //onboarding image height with calculate using device width
  const width = window.innerWidth;
  const screenWidthImages = document.querySelectorAll(".screenWidth");
  screenWidthImages &&
    screenWidthImages.forEach((item) => {
      if (width < 430) {
        item.setAttribute("style", `height:${width}px;width:${width}px`);
      }
    });

  //show password
  const passowordShow = document.querySelector(".passowordShow");
  const passwordField = document.querySelector(".passwordField");
  if (passowordShow) {
    showPasswordFunc(passowordShow, passwordField);
  }
  const confirmPasswordShow = document.querySelector(".confirmPasswordShow");
  const confirmPasswordField = document.querySelector(".confirmPasswordField");
  if (confirmPasswordShow) {
    showPasswordFunc(confirmPasswordShow, confirmPasswordField);
  }

  // search value
  const searchInput = document.querySelector(".searchInput");
  const searchResultSection = document.querySelector(".search-result-section");
  const popularSearchSection = document.querySelector(
    ".popular-search-section"
  );
  const notFoundSection = document.querySelector(".notfound-section");

  function hiddenClassCheck(sectionName) {
    return sectionName.classList.contains("hidden");
  }

  searchInput &&
    searchInput.addEventListener("keyup", () => {
      if (searchInput.value.length < 10) {
        console.log("if ran");
        if (!hiddenClassCheck(popularSearchSection)) {
          popularSearchSection.classList.add("hidden");
        }
        if (hiddenClassCheck(popularSearchSection)) {
          searchResultSection.classList.remove("hidden");
        }
        if (!hiddenClassCheck(notFoundSection)) {
          notFoundSection.classList.add("hidden");
        }
      } else {
        console.log("else ran");
        searchResultSection.classList.add("hidden");
        notFoundSection.classList.remove("hidden");
      }
    });

  // product favourite button
  const favouriteButton = document.querySelectorAll(".favouriteButton");

  if (favouriteButton) {
    favouriteButton.forEach((item) => {
      const favouriteIcon = item.querySelector("i");

      item.addEventListener("click", () => {
        if (favouriteIcon.classList.contains("ph-fill")) {
          favouriteIcon.classList.remove("ph-fill");
          favouriteIcon.classList.add("ph");
        } else {
          favouriteIcon.classList.add("ph-fill");
          favouriteIcon.classList.remove("ph");
        }
      });
    });
  }

  // product category select
  const productCategoryList = document.querySelector(".productCategoryList");

  productCategoryList && selectOneItem(productCategoryList);

  // my qr code open close
  modalDiffOpenClose(
    "myQRCodeModal",
    "myQrCodeOpenButton",
    "myQrCodeCloseButton",
    "modalCloseFromBottom",
    "modalOpenFromBottom"
  );

  //address modal
  const addressModalBox = document.querySelector(".addressModalBox");
  const addressModal = document.querySelector(".addressModal");
  addressModalBox &&
    modalToggle(addressModal, addressModalBox, "modalOpen", "modalClose");

  const addressModalBox2 = document.querySelector(".addressModalBox2");
  const addressModal2 = document.querySelector(".addressModal2");
  addressModalBox &&
    modalToggle(addressModal2, addressModalBox2, "modalOpen", "modalClose");

  //select payment methods
  const selectPaymentMethods = document.querySelector(".selectPaymentMethods");
  selectPaymentMethods && selectOneItem(selectPaymentMethods);

  //sutch toggle
  const roundedSwitchList = document.querySelectorAll(".rounded-switch");

  roundedSwitchList.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      } else {
        item.classList.add("active");
      }
    });
  });

  //select Language
  const suggestedLanguage = document.querySelector(".suggestedLanguage");
  suggestedLanguage && selectOneItem(suggestedLanguage);
  const otherLanguage = document.querySelector(".otherLanguage");
  otherLanguage && selectOneItem(otherLanguage);

  //help center tab
  const helpCenterTab = document.querySelector(".helpCenterTab");
  helpCenterTab &&
    createTab(
      helpCenterTab,
      "activeTabButton",
      "activeTab",
      "hiddenTab",
      "tabButton",
      "tab-content"
    );

  // FAQ Item Toggle
  let accordion = document.querySelectorAll(".faq-accordion");

  accordion.forEach((item, index) => {
    accordion[index].addEventListener("click", function () {
      let faqAnswer = this.nextElementSibling;
      let parent = accordion[index].parentElement;

      // Close all other accordions
      accordion.forEach((otherAccordion, otherIndex) => {
        if (otherIndex !== index) {
          let otherFaqAnswer = otherAccordion.nextElementSibling;
          otherFaqAnswer.style.height = null;
          otherAccordion.querySelector("i").classList.remove("text-g60");
          otherAccordion.parentElement.classList.remove("!border-g60");
        }
      });

      // Toggle open/close for the clicked accordion
      if (faqAnswer.style.height) {
        faqAnswer.style.height = null;
      } else {
        faqAnswer.style.height = faqAnswer.scrollHeight + "px";
      }

      accordion[index].parentElement.classList.add("!border-g60");

      // Toggle classes for the clicked accordion
      accordion[index].querySelector("i").classList.toggle("ph-caret-down");
      accordion[index].querySelector("i").classList.toggle("ph-caret-up");
      accordion[index].querySelector("i").classList.add("text-g60");
    });
  });

  // logout modal
  modalDiffOpenClose(
    "logoutModal",
    "logoutModalButton",
    "logoutCloseButton",
    "hidden",
    "openLogoutModal"
  );

  // Sort Modal
  modalDiffOpenClose(
    "sortModal",
    "sortModalButton",
    "sortModalCloseButton",
    "hidden",
    "openLogoutModal"
  );

  // Filter Modal
  modalDiffOpenClose(
    "filterModal",
    "filterModalButton",
    "filterModalCloseButton",
    "hidden",
    "filterModalOpen"
  );

  //product sort item select
  const sortItems = document.querySelector(".sortItems");
  sortItems && selectOneItem(sortItems);

  //select gallery modal
  // Filter Modal
  modalDiffOpenClose(
    "selectFromGalleryModal",
    "selectFromGalleryModalOpen",
    "selectFromGalleryModalClose",
    "hidden",
    "openLogoutModal"
  );

  // Share Modal
  modalDiffOpenClose(
    "shareModal",
    "shareOpenButton",
    "shareCloseButton",
    "hidden",
    "openLogoutModal"
  );

  //report about modal
  const reportModalBox = document.querySelector(".reportModalBox");
  const reportModal = document.querySelector(".reportModal");
  reportModalBox &&
    modalToggle(reportModal, reportModalBox, "modalOpen", "modalClose");

  const reportModalBox2 = document.querySelector(".reportModalBox2");
  const reportModal2 = document.querySelector(".reportModal2");
  reportModalBox2 &&
    modalToggle(reportModal2, reportModalBox2, "modalOpen", "modalClose");

  //buynow modal
  modalDiffOpenClose(
    "buyNowModal",
    "buyNowModalOpen",
    "buyNowModalClose",
    "hidden",
    "openLogoutModal"
  );

  // cancel order modal
  modalDiffOpenClose(
    "cancelOrderModal",
    `cancelOrderOpenButton-2`,
    "cancelOrderCloseButton",
    "hidden",
    "openLogoutModal"
  );
  modalDiffOpenClose(
    "cancelOrderModal",
    `cancelOrderOpenButton-1`,
    "cancelOrderCloseButton",
    "hidden",
    "openLogoutModal"
  );

  const cancelModalBox = document.querySelector(".cancelModalBox");
  const cancelModal = document.querySelector(".cancelModal");
  cancelModalBox &&
    modalToggle(cancelModal, cancelModalBox, "modalOpen", "modalClose");

  const cancelModalBox2 = document.querySelector(".cancelModalBox2");
  const cancelModal2 = document.querySelector(".cancelModal2");
  cancelModalBox2 &&
    modalToggle(cancelModal2, cancelModalBox2, "modalOpen", "modalClose");

  //Choose Delivery
  const chooseDelivery = document.querySelector(".chooseDelivery");
  chooseDelivery && selectOneItem(chooseDelivery);

  //Promo & Vouchers Select
  const promoVoucherItems = document.querySelector(".promoVoucherItems");
  promoVoucherItems && selectOneItem(promoVoucherItems);

  //cart Item
  const cartItemModalBox = document.querySelector(".cartItemModalBox");
  const cartItemModal = document.querySelector(".cartItemModal");
  cartItemModalBox &&
    modalToggle(cartItemModal, cartItemModalBox, "modalOpen", "modalClose");

  const cartItemModalBox2 = document.querySelector(".cartItemModalBox2");
  const cartItemModal2 = document.querySelector(".cartItemModal2");
  cartItemModalBox2 &&
    modalToggle(cartItemModal2, cartItemModalBox2, "modalOpen", "modalClose");

  const cartItemModalBox3 = document.querySelector(".cartItemModalBox3");
  const cartItemModal3 = document.querySelector(".cartItemModal3");
  cartItemModalBox3 &&
    modalToggle(cartItemModal3, cartItemModalBox3, "modalOpen", "modalClose");

  // edit product on cart mdoal
  modalDiffOpenClose(
    "editModal",
    "editModalOpen",
    "editModalClose",
    "hidden",
    "openLogoutModal"
  );
  modalDiffOpenClose(
    "editModal",
    "editModalOpen2",
    "editModalClose",
    "hidden",
    "openLogoutModal"
  );
  modalDiffOpenClose(
    "editModal",
    "editModalOpen1",
    "editModalClose",
    "hidden",
    "openLogoutModal"
  );

  // filter item select
  const filterProductCategory = document.querySelector(
    ".filterProductCategory"
  );
  filterProductCategory && selectOneItem(filterProductCategory);

  const filterBrand = document.querySelector(".filterBrand");
  filterBrand && selectOneItem(filterBrand);

  const filterPriceRange = document.querySelector(".filterPriceRange");
  filterPriceRange && selectOneItem(filterPriceRange);

  const filterByRating = document.querySelector(".filterByRating");
  filterByRating && selectOneItem(filterByRating);

  const filterBySize = document.querySelector(".filterBySize");
  filterBySize && selectOneItem(filterBySize);

  const productColor = document.querySelector(".productColor");
  productColor && selectOneItem(productColor);
});
