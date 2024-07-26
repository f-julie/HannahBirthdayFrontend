import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function MessageList() {
    const [messages,setMessages] = useState([]);

    useEffect(() => {
        getMessages();
    }, [])

    const getMessages = async () => {
        try {
            const result = await axios.get('https://hannahbirthdaybackend-3viwm3jt.b4a.run/messages');
            console.log(result);
            setMessages(result.data);
        } catch (err) {
            console.log(err);
        }
    }
    
    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col text-center w-[95%]">

            <h1 className="text 2xl">Hannah's Birthday Messages</h1>
            <ul className="flex flex-col gap-4 border rounded-md shadow-lg p-5 m-4 w-[80%] self-center">
                {
                    messages.map(message =>(
                        <li className="border rounded-lg p-6" key={message.id}>
                            <Link to={`/messages/${message.id}`}>
                            <h2 className="text-xl">{message.title}</h2>
                            <h3 className="text-lg">{message.friendName}</h3>
                            <p className="font-bold">{message.message}</p>
                            </Link>
                        </li>
                    ))
                }
            </ul>

            </div> 
        </div>
    );
}