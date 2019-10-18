import { registerComponents } from '@hash-mono/stylesystem';

import AnticipationLabel from './AnticipationLabel';

function register() {
  registerComponents();
  customElements.define('h-anticipation-label', AnticipationLabel);
}

export default register;
