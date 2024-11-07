import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/Header/header";
import { API_URL } from "../constant";
import ProductContainerComponent from "../components/product/ProductContainerComponent";


const HomePage = () => {

    return (
      <div>
        <h4>Homepage</h4>
        <ProductContainerComponent/>

      </div>
    )
  }
  
  export default HomePage;