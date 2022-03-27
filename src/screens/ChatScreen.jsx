import {useState} from "react";
import {Avatar} from "@material-ui/core";

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: "Ellen",
            image: "https://images0.persgroep.net/rcs/m8jsoHAxO74aVv1hpF85rorhsME/diocontent/165971033/_fitwidth/763?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.8",
            message: "How is it going?"
        },
        {
            message: "Fine babygirl what about you?"
        }
    ])

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, {message: input}])
        setInput('');
    }

    return (
        <div className="w-full">
            <p className="uppercase p-5 text-gray-500 text-center ">You matched with Ellen on 10/08/20</p>
            {messages.map((message) => (
                    message.name ? (
                        < div className="flex p-5" style={{alignItems: "center"}}>
                            <Avatar
                                alt={message.name}
                                src={message.image}
                            />
                            <p className="ml-2.5 bg-gray-300 p-4 rounded-3xl">{message.message}</p>
                        </div>
                    ) : (
                        < div className="flex p-5" style={{alignItems: "center"}}>
                            <p className="ml-auto bg-blue-400 p-4 rounded-3xl text-white">{message.message}</p>
                        </div>
                    )
                )
            )}
            <form
                className="flex p-1.5 fixed bottom-0 w-full border-t-2 "
                action="">
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Type a message..."
                    type="text"
                    className="flex-1 p-2.5 "
                />
                <button className="mr-5 font-bold text-pink-600 uppercase " onClick={handleSend} type="submit">
                    Send
                </button>
            </form>
        </div>
    );
}

export default ChatScreen;