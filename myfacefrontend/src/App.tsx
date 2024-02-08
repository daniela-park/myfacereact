import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Switch, Link} from 'react-router-dom';
import PostsPage from './PostsPage/PostsPage';
import UsersPage from './UsersPage/UsersPage';
import CreateUser from './CreateUser/CreateUser';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';

export function App() {
  const [count, setCount] = useState(0)
  return ( 
    <Router>
      <h1>This title is on every page!</h1> 
      <Routes> 
        <Route path="/posts" element={<PostsPage/>}></Route> 
        <Route path="/users" element={<UsersPage/>}></Route> 
        <Route path="/users/create" element={<CreateUser/>}></Route>  
      </Routes>
    </Router > 
      );
}


{/* <div>Sorry - that page doesn't exist, try these:</div>
<Link to="/posts"/> 
<Link to="/users"/>  */}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <Router>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </Router>
//   )
// }

export default App
