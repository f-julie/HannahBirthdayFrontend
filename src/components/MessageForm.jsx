import { useState } from "react";
import axios from 'axios';

export default function MessageForm() {

    const[title, setTitle] = useState('');
    const[message, setMessage] = useState('');
    const[friendName, setFriendName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Before message");
        const newMessage = {title, message, friendName };
        console.log("After message");

        try {
            const result = await axios.post("https://hannahbirthdaybackend-3viwm3jt.b4a.run/messages", newMessage);
            console.log(result);
            setTitle('');
            setMessage('');
            setFriendName('');
            alert("Successfully created message!");
        } catch (err) {
            console.log("I am in the error.");
            console.error(err);
        }

        console.log("Message: ", newMessage);
    }

    return (
    <div className="w-full flex justify-center">
        <div>
        <h1 className="text-2xl">Write a birthday message for Hannah!</h1>
            <form onSubmit={handleSubmit}>
                {/* <div className="flex flex-col gap-3 my-4">
                    <label className="mt-2" htmlFor="title">Message Title:</label>
                    <input className="border p-2 rounded-md" type="text" value={title} name="title" id="title" onChange={(e) => setTitle(e.target.value)} placeholder="Write your birthday message title..." />
                </div> */}
                <div className="flex flex-col gap-3 my-4">
                    <label htmlFor="message">Birthday Message:</label>
                    <textarea className="border p-2 rounded-md" rows="3" type="text" value={message} name="message" id="message" onChange={(e) => setMessage(e.target.value)} placeholder="Write your birthday message for Hannah..." />
                </div>
                <div className="flex flex-col gap-3 my-4">
                    <label className="mt-2" htmlFor="friendName">Your Name:</label>
                    <input className="border p-2 rounded-md" type="text" value={friendName} name="friendName" id="friendName" onChange={(e) => setFriendName(e.target.value)} placeholder="Input your name..." />
                </div>
                <button className="border p-2 rounded-md w-full bg-pink-400 text-white hover:text-black hover:bg-pink-300" type="submit">Save</button>
            </form>
        </div>
    </div>
    );
}