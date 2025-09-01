import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Details from './pages/Details';
import { Write } from './pages/Write';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';
import MyBlog from './pages/MyBlog';
import Contact from './pages/Contact';
import Success from './pages/Success';
import SavedBlog from './pages/SavedBlog';
import Profile from './pages/Profile';
import Chat from './components/chatbot/Chat';
import Listing from './pages/Listing';
const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/blogs/:id' element={<Details />} />
                <Route path='/write-blog/' element={<Write />} />
                <Route path='/login/' element={<Login />} />
                <Route path='/register/' element={<Register />} />
                <Route path='/forget-password/' element={<ForgotPassword />} />
                <Route path='/reset-password/' element={<ResetPassword />} />
                <Route path='/my-blog/' element={<MyBlog />} />
                <Route path='/contact/' element={<Contact />} />
                <Route path='/success/' element={<Success />} />
                <Route path='/saved-blog/' element={<SavedBlog />} />
                <Route path='/profile/' element={<Profile />} />
                <Route path='/listing/' element={<Listing/>} />
            </Routes>
            <Chat/>
            <Footer />
        </BrowserRouter>
    )
}

export default App