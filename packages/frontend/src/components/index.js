import { registerComponents } from '@hash-mono/stylesystem';

import Anticipation from './Anticipation';
import AnticipationLabel from './AnticipationLabel';

function register() {
  registerComponents();
  customElements.define('h-anticipation', Anticipation);
  customElements.define('h-anticipation-label', AnticipationLabel);
}

export default register;
