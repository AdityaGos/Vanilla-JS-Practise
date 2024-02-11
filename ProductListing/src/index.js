import { getProducts } from "./util.js"

let productData=[]
// const getAllProducts = async () => {
//     try {
//       // Call getProducts to retrieve products
//       const products = await getProducts();
  
//       // Log all products
//       productData = JSON.parse(JSON.stringify(products.products))
//       console.log(productData)
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

document.addEventListener('DOMContentLoaded',()=>{
    
    const productContainerRef = document.querySelector('.product-container')
    
    const productHTML = (id, title, image, price) => {
        return `
        <div class="product-container">
            <div class="product" data-product-id=${id}>
            <img src="${image}" alt="" class="product--image">
            <div class="product-info">
            <span class="product--title">${title}</span>
            <span class="product--price"> $ ${price}</span>
            </div>
               
            </div>
        </div>
        `
      }
  
     const renderProducts = (products) =>{
        const productArr = products.products
        for (const product of productArr) {
            const html = productHTML(product.id,product.title, product.thumbnail, product.price, );
            productContainerRef.insertAdjacentHTML("beforeend", html);
        }
        console.log(productArr)
     }
     (async () => {
        try {
            // Fetch product data
            const products = await getProducts();
            // Render products
            renderProducts(products);
        } catch (error) {
            console.error('Error rendering products:', error);
        }
    })()
        
    
    
        
    
})
