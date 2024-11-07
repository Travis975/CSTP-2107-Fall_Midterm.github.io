import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react';
import { API_URL } from '../../constant';
import ProductCard from './ProductCard';



const ProductContainerComponent = () => {

    const [apiData, setApiData] = useState([]);
    
    
    useEffect(() => {
        getProductsData();
    }, [])

    const getProductsData = async () => {
        try {
          const response = await fetch(API_URL);
          const responseJSON = await response.json();
          setApiData(responseJSON);
          console.log(responseJSON,'data response: in the productContainerComponent');
        } catch (error) {
          console.log(error);
        }
    };
   
    return (
        <div>
            <ProductCard data={apiData}  />
        </div>
    )
}

export default ProductContainerComponent;