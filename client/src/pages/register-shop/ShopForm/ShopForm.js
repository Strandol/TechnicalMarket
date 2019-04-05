import React from 'react'
import { Field, reduxForm, Form } from 'redux-form'
import { Button, InputNumber, Input, Select } from 'antd'

import './ShopForm.scss'

const { Option } = Select

const TextInput = ({input: {onChange, value}}) =>
    <Input onChange={onChange} value={value} />

const NumberInput = ({input: {onChange, value}}) =>
    <InputNumber onChange={onChange} value={value} />

const CurrencyDropdown = ({input: {onChange, value}}) =>
    <Select defaultValue="lucy" onChange={onChange} value={value}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">yiminghe</Option>
    </Select>

export const ShopForm = props => {
    const { handleSubmit, reset } = props

    function submit(values) {
        console.log(values)
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

export default reduxForm(formOptions)(ShopForm)
