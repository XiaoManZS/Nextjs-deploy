'use client'
import { signIn, signUp } from "@/lib/auth-client";
import { useState } from 'react'
export default function Home() {
    const [email, setEmail] = useState(''); //邮箱
    const [name, setName] = useState(''); //用户名
    const [password, setPassword] = useState(''); //密码
    const signUpHandler = async () => {
        const { data, error } = await signUp.email({
            name,
            email,
            password,
        })
        if (error) {
            console.log(error);
        } else {
            console.log(data);
        }
    }
    //------------------------------------
    const [signInEmail, setSignInEmail] = useState(''); //登录邮箱
    const [signInPassword, setSignInPassword] = useState(''); //登录密码
    const signInHandler = async () => {
        const {data,error} = await signIn.email({
            email:signInEmail,
            password:signInPassword,
            callbackURL:'http://localhost:3000/user'
        })
        if (error) {
            console.log(error);
        } else {
            console.log(data);
        }
    }
    //------------------------------------
    const signInWithGithub = async () => {
        const {data,error} = await signIn.social({
            provider: 'github',
            callbackURL:'http://localhost:3000/user'
        })
        if (error) {
            console.log(error);
        } else {
            console.log(data);
        }
    }
    //------------------------------------
    return <div>
        <h1>注册</h1>
        <input type="text" placeholder="用户名" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="邮箱" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="密码" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={signUpHandler}>注册</button>
       <hr />
        <h1>登录</h1>
        <button onClick={signInWithGithub}>github登录</button>
        <input type="email" placeholder="邮箱" value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} />
        <input type="password" placeholder="密码" value={signInPassword} onChange={(e) => setSignInPassword(e.target.value)} />
        <button onClick={signInHandler}>登录</button>
    </div>
}