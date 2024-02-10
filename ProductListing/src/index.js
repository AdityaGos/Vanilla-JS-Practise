import { getProducts } from "./util.js"


async function getProduct ()
{
    const data = await getProducts()
    console.log('data from index'+ JSON.stringify(data))
    return data
   
}
document.addEventListener('DOMContentLoaded',()=>{

    const productContainerRef = document.querySelector('.product-container')
    const productData =getProduct()
console.log(productData)

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

    

        for (const product of data) {
            // console.log(product)
        //   const html = renderMovieList(movie.title, movie.poster, movie.year);
        //   movieContainer.insertAdjacentHTML("beforeend", html);
        }
    
})
