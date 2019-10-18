import Text from './Text';
import Box from './Box';
import Flex from './Flex';
import Input from './Input';
import Divisor from './Divisor';
import CurrencyInput from './CurrencyInput';

function registerComponents() {
  customElements.define('h-text', Text);
  customElements.define('h-box', Box);
  customElements.define('h-flex', Flex);
  customElements.define('h-input', Input);
  customElements.define('h-divisor', Divisor);
  customElements.define('h-currency-input', CurrencyInput);
}

export default registerComponents;
