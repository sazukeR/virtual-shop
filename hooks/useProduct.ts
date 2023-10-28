import { IProduct } from "../interfaces";

 export const useProduct = async(path:  string):Promise<IProduct> => {

    
       
        const res = await fetch(
         `http://localhost:3000/api/products${path}`
        );
  
        const data = await res.json();
      
   
       
       return data
}




