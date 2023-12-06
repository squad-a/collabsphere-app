import { Suspense, lazy, useState } from 'react';
import logo from './assets/images/logo-universal.png';
import './App.css';
import { Greet } from "../wailsjs/go/main/App";
import { NextUIProvider } from '@nextui-org/react';
import { Route, Routes } from 'react-router-dom';


const Login = lazy(() => import('./screens/Login/Index'))
const Signup = lazy(() => import('./screens/Signup/Index'))

// workspace section
const Workspace = lazy(() => import('./screens/Workspace/Index'))
const Home = lazy(() => import('./screens/Workspace/screens/Home/Index'))

// project section
const Project = lazy(() => import('./screens/Workspace/screens/Project/Index'))



function App() {


    return (
        <>
            <Suspense fallback={<>Loading ...</>}>
                <NextUIProvider>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                        <Route path='workspace' element={<Workspace />}>
                            <Route index element={<Home />} />
                            <Route path='project' element={<Project />} ></Route>
                        </Route>
                    </Routes>
                </NextUIProvider>
            </Suspense>
        </>
    )
}

export default App
