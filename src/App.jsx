import Header from './components/Header';
import Body from './components/Body';
import './App.css'
import ProductContextProvider from './Context/ProductContextProvider';



function App() {


  return (
    <ProductContextProvider>
      <div className='lg:ml-10 lg:mr-10'>
        <Header/>
        < Body/>

    
      </div>

    </ProductContextProvider>
    
 
      


    
  )
}

export default App
