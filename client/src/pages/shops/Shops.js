import React, { Component } from 'react'
import { Col } from 'antd'

import ShopItem from './ShopItem/ShopItem'

export class Shops extends Component {
    renderShopItem = item => {
        return (
            <Col xl={4} sm={6} xs={12}>
                <ShopItem />
            </Col>
        )
    }

    renderShops = () => {
        const shops = [
            { name: 'Shop1', age: 20, budget: 12300, currency: '$' },
            { name: 'Shop123', age: 13, budget: 7940, currency: '$' },
            { name: 'Shop123', age: 13, budget: 7940, currency: '$' },
            { name: 'Shop123', age: 13, budget: 7940, currency: '$' },
            { name: 'Shop123', age: 13, budget: 7940, currency: '$' },
            { name: 'Shop123', age: 13, budget: 7940, currency: '$' },
            { name: 'Shop123', age: 13, budget: 7940, currency: '$' },
            { name: 'Shop123', age: 13, budget: 7940, currency: '$' }
        ]

        return (
            <div>{shops.map(this.renderShopItem)}</div>
        )
    }


    render = () => (
        <div>
            {this.renderShops()}
        </div>
    )
}

export default Shops
