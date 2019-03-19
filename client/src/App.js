import React, { Component } from 'react';
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { IntlProvider } from 'react-intl'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Shops from './pages/shops/Shops'

import createStore from './state/store'
import reducer from './state/reducer'

import { getMessages } from './common/intl/i18n'

class App extends Component {
    static propTypes = {
        locale: PropTypes.string,
    }

    static defaultProps = {
        locale: 'en'
    }

    render() {
        const { locale } = this.props

        const messages = getMessages(locale)
        const store = createStore(reducer)

        return (
            <Provider store={store}>
                <IntlProvider locale={locale} messages={messages}>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path='/shops' component={Shops} />
                        </Switch>
                    </BrowserRouter>
                </IntlProvider>
            </Provider>
        )
    }
}

export default App;
