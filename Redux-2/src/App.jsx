import NewProduct from './comp/NewProduct'
import TotalPrice from './comp/TotalPrice'
import CurrentProduct from './comp/CurrentProduct'
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from '../redux/rootReducer';
const store = createStore(reducer);

function App() {

  return (
    <Provider store={store}>
      <div style={{display:'flex' , justifyContent: 'space-around'}}>
        <NewProduct />
        <TotalPrice />
        <CurrentProduct />
      </div>
    </Provider>
  )
}

export default App
