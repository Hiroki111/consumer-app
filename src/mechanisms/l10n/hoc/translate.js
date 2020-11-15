/**
 * @description This enhances components with translate, translateFormatted and translateFormattedHTML
 *
 * @example
 * import translate from '../path/to/decorators/translate';
 * import ComponentToDecorate from './component';
 * export default translation('components.checkout')(ComponentToDecorate);
 *
 * With several decorators
 *
 * import flow from 'lodash/flow';
 * import translate from '../path/to/decorators/translate';
 * import decorator2 from '../path/to/decorators/decorator2';
 * import ComponentToDecorate from './component';
 * export default flow(
 *     decorator2,
 *     translate('components.checkout')
 * )(ComponentToDecorate);
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import withIntl from './with-intl';
import currencyCodes from '../dictionary/currencyCodes.json';

export function translate(translationContext) {
  return function(DecoratedComponent) {
    class TranslateDecorator extends Component {
      constructor(props) {
        super(props);

        this.translate = this.translate.bind(this);
        this.translateFormatted = this.translateFormatted.bind(this);
        this.translateFormattedHTML = this.translateFormattedHTML.bind(this);
        this.translateFormattedCurrencyValue = this.translateFormattedCurrencyValue.bind(this);
      }

      translate(key, params) {
        return this.props.intl.formatMessage({ id: `${translationContext}.${key}` }, params);
      }

      translateFormatted(key, params) {
        return <FormattedMessage id={`${translationContext}.${key}`} values={params} />;
      }

      translateFormattedHTML(key, params) {
        return <FormattedHTMLMessage id={`${translationContext}.${key}`} values={params} />;
      }

      translateFormattedCurrencyValue(value, currency) {
        return value.toLocaleString(this.props.intl.locale, {
          style: 'currency',
          currency: currencyCodes[currency],
        });
      }

      render() {
        return (
          <DecoratedComponent
            {...this.props}
            translate={this.translate}
            translateFormatted={this.translateFormatted}
            translateFormattedHTML={this.translateFormattedHTML}
            translateFormattedCurrencyValue={this.translateFormattedCurrencyValue}
          />
        );
      }
    }

    TranslateDecorator.propTypes = {
      intl: PropTypes.object,
    };

    return withIntl(injectIntl(TranslateDecorator));
  };
}
