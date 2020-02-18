import {
    createReduxContainer,
    createReactNavigationReduxMiddleware,
    createNavigationReducer,
  } from 'react-navigation-redux-helpers';
  import React ,{Component} from 'react';
  import { createStore, applyMiddleware, combineReducers } from 'redux';
  import { Provider,connect } from 'react-redux';
  import RootStack from './RootStack';
  import usersReducer from './reducers/user';
  const App = createReduxContainer(RootStack, 'root');
  const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
    'root'
  );
  const navReducer = createNavigationReducer(RootStack);
 
  const Reducers = combineReducers({
    nav: navReducer,
    usersReducer:usersReducer
  })
  const mapStateToProps = state => ({
    state: state.nav,
  });
   
  const AppWithNavigationState = connect(mapStateToProps)(App);
  const store = createStore(Reducers, applyMiddleware(middleware));
  class Root extends Component {
    render(){
      return <Provider store={store}>
          <AppWithNavigationState />
      </Provider>
    }
  }
  export default Root ;
