import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '../node_modules/semantic-ui-css/semantic.min.css'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
