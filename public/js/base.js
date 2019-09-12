function showCartItems () {
  var cart = sessionStorage.getItem("cart");
  var quantity = 0;
  if (cart !== null) {
    cart = JSON.parse(cart);
    quantity = cart.length;
  }
  $('#cart-items').html(quantity);
}
$(document).ready(function () {
  showCartItems();
});
