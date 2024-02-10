import { getProducts } from "./util.js"

let productData=[]
const getAllProducts = async () => {
    try {
      // Call getProducts to retrieve products
      const products = await getProducts();
  
      // Log all products
      productData = JSON.parse(JSON.stringify(products.products))
      console.log(productData)
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  getAllProducts()
document.addEventListener('DOMContentLoaded',()=>{

    const productContainerRef = document.querySelector('.product-container')
    
    console.log('hello')

    const renderProductList = (id, title, image, price) => {
        return `
        <div class="product-container">
            <div class="product" data-product-id=${id}>
            <img src="${image}" alt="" class="Product-image">
                <span>${title}</span>
                <span> $ ${price}</span>
            </div>
        </div>
        `
      }
   
        for (const product of productData) {
            console.log('inside for loop')
            // console.log(product)
            // console.log(product)
        //   const html = renderProductList(movie.title, movie.poster, movie.year);
        //   productContainerRef.insertAdjacentHTML("beforeend", html);
        }
    
        
    
})
