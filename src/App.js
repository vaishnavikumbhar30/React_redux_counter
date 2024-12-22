import React from 'react'
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {incNumber,decNumber} from "./actions/index"
 
const App = () => {


  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch ();
  return (
        <>
          <div class="container" >
            <h1>INCREMENT AND DECREMENT</h1>
             <h2> Using React and Redux</h2>
    
             <div className = "quantity">
              < i className= "quantity_miuns" title="decrement"
              onClick={() => dispatch(decNumber(5))} ><i class="fa-solid fa-minus"></i></i>
              
              <input name='quantity_input' type='text' className='quantity_input' value={myState} />
             
              <i className= "quantity_plus" title="increment"
              onClick={() => dispatch(incNumber(5,5))}> <i class="fa-solid fa-plus"></i></i>
    
             </div>
          </div>
        </>
      );
}

export default App





// // import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <>

//       <div class="container" >
//         <h1>INCREMENT AND DECREMENT </h1>
//          <h2> Using React and Redux</h2>

//          <div className = "quantity">
          
//           < i className= "quantity_miuns" title="decrement"> <span>-</span></i>
//           <input name='quantity' type='text' className='quantity_input' value='0' />
//           <i className= "quantity_plus" title="increment"> <span>+</span></i>

//          </div>
//       </div>
//     </>
//   );
// }

// export default App;
