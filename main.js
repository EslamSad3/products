function GetProducts() {
  var XHR = new XMLHttpRequest();
  XHR.open(
    'get',
    'http://127.0.0.1:5500/data.json',
    true
  );
  XHR.onloadend = function () {
    showProducts(
      JSON.parse(XHR.responseText)
    );
  };
  XHR.send();
}
GetProducts();

function showProducts(products) {
  for (item of products) {
    var card =
      document.createElement(
        'div'
      );
    card.setAttribute(
      'id',
      item.id
    );
    card.classList.add(
      'card',
      'col-sm-2'
    );
    card.innerHTML = `
          <img src="${item.image}" alt="">
          <div class="desc">
              <h5>${item.title}</h5>
              <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  </div>
                  <strike>$${Math.ceil(item.price+5)}</strike>
                  <h4 class="price">$${item.price}</h4>
              <button class="add-card btn btn-primary">Add To Cart</button>
          </div>
      `;
    document.getElementById('card').append(card);
  }
}
