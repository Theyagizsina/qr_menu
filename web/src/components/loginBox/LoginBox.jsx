import React from 'react'
import "./loginBox.css"
import InputX from '../input/Input'

function LoginBox() {

    const handleClick = ()=> {
        console.log("clicked")
    }
    
    return (
        <div className='login12'>
        <form className='loginBox' onSubmit={handleClick}>
            <h1>Giriş Yap</h1>
            <InputX  
                label="Kantin ID"
                maxLength="11"
                placeholder="Kantin ID"
                className="test2"
                yorum="naber"
                type="text"
                icon="..\assets\Icons\Mail.svg"
                iconName="mail"
                animasyon="animasyon1"
                />
            <InputX  
                label="Şifre"
                maxLength=""
                placeholder="Şifre"
                yorum="iyi"
                className="test2"
                type="password"
                icon="..\assets\Icons\ShowIcon.svg"
                iconName="img"
                animasyon="animasyon1"
            />
            <button className="loginButton">Giriş Yap</button>
        </form>
        </div>
    )
}

export default LoginBox
