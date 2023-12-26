import {
  createMarkupProductsAll,
  createMarkupPopularProducts,
  createMarkupProductsDiscount,
} from './template.js';
import { fetchProductsAll, fetchProducts } from './fetch.js';
const containerAll = document.querySelector('.products-container');
const containerPopular = document.querySelector('.popular-container');
const containerDiscount = document.querySelector('.discount-container');
const KEY = 'products in cart';

// Функція для оновлення списку продуктів
export function updateProductsList(products) {
   const container = document.querySelector('.products-container');
   // Перевіряємо, що products не є null і має властивість length
   if (!products || products.length === 0) {
       container.innerHTML = `<p>Nothing was found for the selected filters...</p>
                              <p>Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.</p>`;
   } else {
       container.innerHTML = createMarkupProductsAll(products);
   }
 }
 export function getProductsLimit() {
   const screenWidth = window.innerWidth;
   if (screenWidth < 375) { // Мобільні пристрої
       return 6;
   } else if (screenWidth >= 375 && screenWidth < 768) { // Таблет
       return 8;
   } else { // Десктоп і вище
       return 9;
   }
 }


async function renderAll() {
  try {
     const data = await fetchProductsAll('Fresh_Produce')
     containerAll.insertAdjacentHTML("beforeend", createMarkupProductsAll(data))
  } catch (error) {
     console.log(error.message)
  }
}
renderAll()

// перемішування масиву та вибору випадкових продуктів
function shuffleArray(array) {
   for (let i = array.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [array[i], array[j]] = [array[j], array[i]]; // Перемішування елементів
   }
}

function getRandomProducts(products, count) {
   shuffleArray(products);
   return products.slice(0, count);
}

async function renderPopular() {
   try {
      const data = await fetchProducts('popular');
      const randomData = getRandomProducts(data, 5); // Вибірка 5 випадкових продуктів
      containerPopular.innerHTML = createMarkupPopularProducts(randomData);
  } catch (error) {
       console.log(error.message);
      }
}

renderPopular()

async function renderDiscount() {
   try {
      const data = await fetchProducts('discount');
      const randomData = getRandomProducts(data, 2); // Вибірка 2 випадкових продуктів
      containerDiscount.innerHTML = createMarkupProductsDiscount(randomData);
  } catch (error) {
       console.log(error.message);
       }
}

renderDiscount();

containerAll.addEventListener('click', addBtnClick);

async function addBtnClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
     return;
  }
  const selectedItem = event.target.closest('.list-item');
  const selectedItemId = selectedItem.id;
  console.log(selectedItemId);
  try {
     const currentProduct = await fetchProducts(selectedItemId);
     const products = JSON.parse(localStorage.getItem(KEY)) ?? [];
     console.log(products);
     const index = products.findIndex(item => item._id === selectedItemId);
     console.log(index);

     if (index !== -1) {
        products[index].quantity += 1;
     } else {
        currentProduct.quantity = 1;
        products.push(currentProduct);
     }
     localStorage.setItem(KEY, JSON.stringify(products));
  } catch (error) {
     console.log(error.message);
  }
}