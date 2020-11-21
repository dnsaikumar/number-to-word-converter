import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import makeRootReducer from '../reducers/reducers'

export default (initialState = {}) => {
    const middleware = [thunk]
    const enhancers = []
    const store = createStore(
        makeRootReducer(),
        initialState,
        compose(
          applyMiddleware(...middleware),
          ...enhancers
        )
      )
      store.asyncReducers = {}
      if (module.hot) {
        module.hot.accept('../reducers/reducers', () => {
          const reducers = require('../reducers/reducers').default
          store.replaceReducer(reducers(store.asyncReducers))
        })
      }
    
      return store
}