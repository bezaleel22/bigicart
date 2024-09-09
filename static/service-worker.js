self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("clickmart").then(function (cache) {
      return cache.addAll([
        "account-security.html",
        "account-settings.html",
        "add-new-address.html",
        "add-new-payment.html",
        "address-details.html",
        "all-products.html",
        "app-appearance.html",
        "cart.html",
        "checkout.html",
        "choose-delivery.html",
        "data-analytics.html",
        "edit-profile.html",
        "forget-password.html",
        "help-and-support.html",
        "help-center.html",
        "home.html",
        "index.html",
        "language.html",
        "leave-review.html",
        "manage-address.html",
        "my-order.html",
        "notifications.html",
        "order-details.html",
        "order-placed-successfully.html",
        "payment-method-details.html",
        "payment-method.html",
        "photo-search.html",
        "privacy-policy.html",
        "product-details.html",
        "promo-vouchers.html",
        "rating-review-screen.html",
        "reset-successfully.html",
        "scan-qr-code.html",
        "search.html",
        "select-payment-methods.html",
        "sign-in.html",
        "sign-up.html",
        "splash-screen.html",
        "terms-of-service.html",
        "track-order.html",
        "verify-otp.html",
        "wishlist.html",
        "cancel-order-successfully.html",
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
