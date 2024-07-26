import { useParams } from "react-router-dom";
import Book from "../assets/hero.jpg"
import { useEffect, useState } from "react";
import axios from 'axios';

export default function MessageDetail() {
    const { id } = useParams();
    const [message, setMessage] = useState();

    useEffect(() => {
        getMessage();
    }, [])

    const getMessage = async() => {
        try {
        const result = await axios.get(`https://hannahbirthdaybackend-3viwm3jt.b4a.run/messages/${id}`);
        console.log("The Result: ", result);
        setMessage(result.data);

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="flex w-full justify-center text-2xl">   
            <a href="http://www.google.com" target="BLANK">
                <div className="flex flex-col gap-2 text-center border-2 rounded-md shadow-lg p-6">
                    <h1>{message?.title}</h1>
                    <p>Friend's Name: {message?.friendName}</p>
                    <p>Birthday Message: {message?.message}</p>
                    <img className="w-[200px] h-[200px] self-center m-4 rounded-lg shadow-lg" src={Message} alt="" />
                </div>
            </a>
        </div>
    );
}