 export const getProducts =async (page=1 , skip)=> { 

  try{
    const response = await fetch('https://dummyjson.com/products?limit=7')
    const result = await response.json()
    return result

  } catch(err){ console.log(err)}
   
}
