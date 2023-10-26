


 const useProduct = async(path:  any) => {

    
       
        const res = await fetch(
         `http://localhost:3000/api/products${path}`
        );
  
        const data = await res.json();
      
    console.log(data)
       
       return data
}
export default useProduct;