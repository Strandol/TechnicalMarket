import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Col } from 'antd'

import { loadShops } from '../../state/shops/actions'
import { getShopsList } from '../../state/shops/selectors'

import ShopItem, { ShopItemShape } from './ShopItem/ShopItem'

export class Shops extends Component {
    static propTypes = {
        loadShops: PropTypes.func.isRequired,
        shops: PropTypes.arrayOf(PropTypes.shape(ShopItemShape))
    }

    componentDidMount = () => {
        const { loadShops } = this.props
        loadShops()
    }

    renderShopItem = item => {
        return (
            <Col key={item.name} xl={4} sm={6} xs={12}>
                <ShopItem {...item} />
            </Col>
        )
    }

    renderShops = () => {
        const { shops } = this.props
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

const mapState = s => ({
    shops: getShopsList(s)
})

const mapDispatch = {
    loadShops
}

export default connect(mapState, mapDispatch)(Shops)
