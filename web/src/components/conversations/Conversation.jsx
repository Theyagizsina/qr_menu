import axios from "axios";
import { useEffect, useState, useContext} from "react"
import "./conversation.css"

export default function Conversations({conversation, currentUser}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});

    useEffect(()=>{
        const friendId = conversation.members.find((m) => m !== currentUser._id);
        
        const getUser = async ()=>{

            try{
                const res = await axios("/users/" + friendId);
                setUser(res.data);
            }catch(err){
                console.log(err);
            }
        };
        getUser()
    },[currentUser, conversation]);

    return (
        <div className="conversation">
            <img
              className="conversationImg"
              src= {user?.profilePicture}
              alt=""
            />
            <span className="conversationName">{user?.username}</span>
        </div>
    )
}
