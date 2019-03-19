import React from 'react'
import { FormattedMessage } from 'react-intl'

import messages from './messages/en'

export const i18n = (key, values) =>
    <FormattedMessage id={key} values={values} />

export const i18nString = (intl, id, values) =>
    intl.formatMessage({ id }, values)

export const getMessages = locale => messages
