import "./input.css";

const InputX = (props) => {
    return (
    <div className="formInput">
        <label className="inputBox" >
            <img className={props.iconName} src={props.icon} alt="" />
            <input className={props.className} type={props.type} maxLength={props.maxLength} required/>
            <span className={props.animasyon}>{props.label}</span>
        </label>
    </div>
    );
};
    
export default InputX

// <div className="formInput">
        //     <label>{props.label}</label>
        //     <img className="img" src={props.icon} alt="" />
        //     <input className={props.className} placeholder={props.placeholder} type={props.type}
        //     />
        // </div>
