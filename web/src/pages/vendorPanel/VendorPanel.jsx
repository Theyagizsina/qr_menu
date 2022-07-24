import LoginBox from "../../components/loginBox/LoginBox";
import Topbar from "../../components/topbar/Topbar";
import "./vendorPanel.css";

export default function VendorPanel() {
    return (
        <div>
            <Topbar/>
                <div className="deneme">
                <LoginBox/>
                </div>
        </div>
    )
}
