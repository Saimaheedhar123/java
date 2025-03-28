import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassBasedComponent from './components/class-based-component';
import FunctionalComponent from './components/functional-component';
import ProductList from './components/products/index';

const dummyProductData=['product 1','Product 2','Product 3'];
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <h1>React js concepts 2024</h1>
   <ClassBasedComponent/>
    {/*<FunctionalComponent/>*/}
   {/*<ProductList listOfProducts={dummyProductData} name="Roxy" city="ABC"/>*/}
   </div>

 
  );
}

export default App
