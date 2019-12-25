import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-less/semantic.less'

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.register();
