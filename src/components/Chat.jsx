import {Avatar} from "@material-ui/core";
import {Link} from "react-router-dom";

function Chat({name, message, profilePic, timestamp}) {
    return (
        <Link to={`/chat/${name}`}>
            <div className="flex justify-between h-70px p-5" style={{alignItems: "center"}}>
                <Avatar alt={name} src={profilePic} className="mr-5"/>
                <div className="flex-1">
                    <h2 className="font-bold text-lg ">{name}</h2>
                    <p className="text-gray-600 text-md ">{message}</p>
                </div>
                <p className="text-gray-400 ">{timestamp}</p>
            </div>
        </Link>
    )
}

export default Chat;