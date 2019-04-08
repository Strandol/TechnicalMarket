import React from 'react'
import PropTypes from 'prop-types'
import { Card, Typography } from 'antd'

import { i18n } from '../../../common/intl/i18n'
import { Currency, getCurrencyKey } from '../../../common/enum/Currency'

import './ShopItem.scss'

const { Text } = Typography

export const ShopItemShape = {
    age: PropTypes.number.isRequired,
    budget: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    currency: PropTypes.oneOf(Object.values(Currency))
}

const ShopItem = props => {
    const { age, budget, name, currency } = props

    const messages = {
        age: i18n('shops.item.age'),
        budget: i18n('shops.item.budget'),
        currency: i18n('shops.item.currency')
    }

    const renderStat = (message, value) =>
        <p className='ShopItem-stat'><Text>{message} {value}</Text></p>

    return (
        <div className='ShopItem'>
            <Card size='small' title={name}>
                {renderStat(messages.age, age)}
                {renderStat(messages.budget, `${budget}$`)}
                {renderStat(messages.currency, getCurrencyKey(currency))}
            </Card>
        </div>
    )
}

ShopItem.propTypes = ShopItemShape

export default ShopItem
