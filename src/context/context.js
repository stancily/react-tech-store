import React, { Component } from 'react'
import { linkData } from './linkData';

const ProductContext = React.createContext();
//Provoder
//Consumer

class ProductProvider extends Component {
    state={
        sidebarOpen:false,
        cartOpen:false,
        cartItems: 0,
        links: linkData
    };
    //handle sidebar
    handleSidebar = () => {
        this.setState({sidebarOpen:!this.state.sidebarOpen})
    }
    //handle cart
    handleCart = () => {
        this.setState({cartOpen:!this.state.cartOpen})}
    handleSidebar = () => {
            this.setState({sidebarOpen:!this.state.sidebarOpen})
        }
        closeCart = () => {
            this.setState ({cartOpen:false});
        }

        openCart = () => {
            this.setState({ cartOpen:true});
        }
    render(){
        return(
        <ProductContext.Provider 
        value={{
            ...this.state,
            handleSidebar:this.handleSidebar,
            closeCart:this.closeCart,
            openCart:this.openCart

            }}>

        {this.props.children}
        </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer};