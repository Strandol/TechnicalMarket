import React from 'react'
import { Field, reduxForm, Form } from 'redux-form'
import { Button, InputNumber, Input, Select } from 'antd'
import { connect } from 'react-redux'

import { registerShop } from '../../../state/shops/actions'
import { Currency } from '../../../common/enum/Currency'

import './ShopForm.scss'

const { Option } = Select

const TextInput = ({input: {onChange, value}}) =>
    <Input onChange={onChange} value={value} />

const NumberInput = ({input: {onChange, value}}) =>
    <InputNumber onChange={onChange} value={value} />

const CurrencyDropdown = ({input: {onChange, value}}) => {
    const mapCurrency = k => <Option value={Currency[k]}>{k}</Option>

    return (
        <Select defaultValue={1} onChange={onChange} value={value}>
            {Object.keys(Currency).map(mapCurrency)}
        </Select>
    )
}

export const ShopForm = props => {
    const { handleSubmit, reset, registerShop } = props

    function submit(values) {
        registerShop(values)
    }

    const renderActions = () =>
        <div className='createShop-actions'>
            <Button onClick={reset}>Reset</Button>
            <Button onClick={handleSubmit(submit)} type='primary'>Submit</Button>
        </div>

    return (
        <Form className='createShop'>
            <div className='createShop-field'>
                <label htmlFor='name'>Name</label>
                <Field name='name' component={TextInput} />
            </div>
            <div className='createShop-field'>
                <label htmlFor='age'>Age</label>
                <Field name='age' component={NumberInput} />
            </div>
            <div className='createShop-field'>
                <label htmlFor='budget'>Budget</label>
                <Field name='budget' component={NumberInput} />
            </div>
            <div className='createShop-field'>
                <label htmlFor='currency'>Currency</label>
                <Field name='currency' component={CurrencyDropdown} />
            </div>
            {renderActions()}
        </Form>
    )
}

const formOptions = {
    form: 'createShop'
}

const mapDispatch = {
    registerShop
}

export default reduxForm(formOptions)(connect(null, mapDispatch)(ShopForm))
