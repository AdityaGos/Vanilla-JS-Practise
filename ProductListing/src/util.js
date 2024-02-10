 export const getProducts =async (page=1 , skip)=> { 

  try{
    const response = await fetch('https://dummyjson.com/products')
    const result = await response.json()
    console.log('result'+result)
    return result.products

  } catch(err){ console.log(err)}
   
}
