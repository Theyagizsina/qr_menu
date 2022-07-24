import axios from "axios";
import { useEffect, useState, useContext} from "react"
import "./message.css"
import {format} from "timeago.js"

export default function Message({message, sProfilePicture, rProfilePicture, own, currentUser}) {
    const [user, setUser] = useState({});

    useEffect(()=>{
        const friendId = message.conversationId
        console.log(friendId)
        
        const getUser = async ()=>{

            try{
                const res = await axios("/conversations/" + friendId);
                // setUser(res.data);
                console.log(res)
            }catch(err){
                console.log(err);
            }
        };
        getUser()
    },[currentUser, message]);

    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img
                   className="messageImg"
                   src={own ? sProfilePicture : rProfilePicture}
                   alt=""
                />
                <p className="messageText">
                    {message.text}
                </p>
            </div>
            <div className="messageBottom">{format(message.createdAt)}</div>
        </div>
    );
}
