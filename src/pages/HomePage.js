import React from "react";
import { ProductConsumer } from "../context";
export default function HomePage() {
    return (
        <>
        <ProductConsumer>
            {value=> {
                console.log(value);
                return <h1> hello from homepage</h1>;
                }}
        </ProductConsumer>;  
        </>
    );
}