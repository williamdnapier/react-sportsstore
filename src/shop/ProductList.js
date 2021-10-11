/*
Components are the building blocks and are responsible for content presented to the user. Ideally, they perform small tasks or display small amounts of content back to the user.

This ProductList component is responsible for displaying details of a list of products. The details of the product are received through a prop called product. Props are used to configure components and allow them to do their work. They are unaware of where the data comes from.

ProductList generates HTML content that includes the value of each product's name, price and description properties. But it doesn't have the knowledge of how those products are defined in the application. It doesn't know if they have been defined locally or retrieved from a server.
 */

import React, { Component } from 'react';

export class ProductList extends Component {
    render() {
        if (this.props.products == null || this.props.products.length === 0) {
            return <h5 className='p-2'>No Products</h5>
        }
        return this.props.products.map(p =>
        <div className='card m-1 p-1 bg-light' key={ p.id }>
            <h4>
                { p.name }
                <span className='badge badge-pill badge-primary float-right'>
                    ${ p.price.toFixed(2)}
                </span>
            </h4>
            <div className='card-text bg-white p-1'>
                { p.description }
            </div>
        </div>
        )
    }
}