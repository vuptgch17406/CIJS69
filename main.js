// const getProducts = () => {
//   return fetch(`https://60ae0d5e80a61f00173324bc.mockapi.io/products`)
//     .then(res => res.json())
//     .then(products => console.log(products));
// };

// const API_PRODUCTS = "https://60ae0d5e80a61f00173324bc.mockapi.io/products";
// const defaultImg = (src =
//   "https://lh3.googleusercontent.com/9t4ddHZRUlpZWJqdzDcMKDu95AN-2mUuZ0NtFwjTZrbxmvutQP0c6uJsQN4H0kHmXPB4NxRnEtSO1_vfATHwBHrrCVkq-3EV9Q=w500-rw");
// async function fetchAllProducts() {
//   const response = await fetch(API_PRODUCTS);
//   const data = await response.json();
//   renderUI(data);
// }

// Promise

function getData(url, callback) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Async

// async function getData(url, callback) {
//   try {
//     const request = await fetch(url);
//     const response = await request.json();
//     callback(response);
//   } catch (error) {
    
//   }
// }

// async await

// function renderProduct(products) {
//   
// }

function renderUsers(products) {
  console.log("products", products);
  const { color, errorDescription, id, image, sku, name } = products;
  let userStr = products
    .map((product) => {
      return `
      <div class="product">
      <img
      src="${product.image}"
      alt="${product.name}">
      <div class="card-body">
        <h3><b>Name</b>: ${product.name}</h3>
        <p><b>Error</b>: ${product.errorDescription}</p>
        <p><b>SKU</b>: ${product.sku}</p>
        <p><b>ID</b>: ${product.id}</p>
        <p><b>Color</b>: ${product.color}</p>
      </div>
    </div>

    
    `;
    })
    .join("");
    
    
  console.log(userStr);
  document.getElementById("root").innerHTML = userStr;
}
getData("https://60ae0d5e80a61f00173324bc.mockapi.io/products", renderUsers);
