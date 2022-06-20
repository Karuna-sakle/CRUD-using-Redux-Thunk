import './App.css';
import { Routes, Route } from "react-router-dom"
import { Home } from './components/home';
import { Login } from './components/login';
import { Register } from './components/register';
import { Dashboard } from './components/dashboard';
import { Setting } from './components/setting';
import { Footer } from './components/footer';
import ProtectedRoute from './components/ProtectedRoute';
import { CreatePost } from './components/post'
import { ListPost } from './components/getpost';
import { ShowPost } from './components/showpost';
import { UpdatePost } from './components/updatePost';
import Logout from './components/logout';
import React from 'react'
import SelectPost from './components/select';
import Header from './components/header';

function App() {
  const user = JSON.parse(localStorage.getItem('user-info'))

  return (
    <div className="App">
      <Routes>
        {user ?
          <>
            <Route path='post' element={<CreatePost />} />
            <Route path='posts' element={<ListPost />} />
            <Route path='showpost/:id' element={<ShowPost />} />
            <Route path="update/:id" element={< UpdatePost />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='logout' element={<Logout />} /> 
            <Route path='setting' element={<Setting />}/>
            
           </> :
          <>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Register />} />
          </>
          }
         <Route path="*" element={<h2>Page Not Found</h2>} /> 
         <Route path= "select" element={<SelectPost/>}/>
      </Routes>

    </div>
  );
}

export default App;