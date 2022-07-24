import "./login.css"
import { CircularProgress  } from "@material-ui/core";
import Input from "../../components/input/Input";
import LoginBox from "../../components/loginBox/LoginBox";

export default function Login() {

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <img src="..\assets\Logo.svg" alt="" className="loginLogo" />
                </div>
                <div className="loginRight">
                    <LoginBox/>
                </div>
            </div>
        </div>
    )
}