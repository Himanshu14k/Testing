import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './Reducers/reducers';

const Stores = createStore(
  reducers,
  applyMiddleware(logger)
)



export default Stores;
