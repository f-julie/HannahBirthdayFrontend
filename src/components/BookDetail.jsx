import { useParams } from "react-router-dom";
import Book from "../assets/hero.jpg"
import { useEffect, useState } from "react";
import axios from 'axios';

export default function BookDetail() {
    const { id } = useParams();
    const [book, setBook] = useState();

    useEffect(() => {
        getBook();
    }, [])

    const getBook = async() => {
        try {
        const result = await axios.get(`https://libapi-mfq42mv3.b4a.run/books/${id}`);
        console.log("The Result: ", result);
        setBook(result.data);

        } catch (err) {
            console.error(err);
        }
    }
    const bookData = [
        {
            id: 0,
            title: "My First Book",
            author: "Agatha Christie",
            description: "Description of my book",
            publishedAt: "2000-06-02"

        },
        {
            id: 1,
            title: "My Second Book",
            author: "Agatha Christie",
            description: "Description of my book",
            publishedAt: "2000-06-02"
        },
        {
            id: 2,
            title: "My Third Book",
            author: "Agatha Christie",
            description: "Description of my book",
            publishedAt: "2000-06-02"
        },
        {
            id: 3,
            title: "My Fourth Book",
            author: "Agatha Christie",
            description: "Description of my book",
            publishedAt: "2000-06-02"
        }
    ];

    //const book1 = bookData[id];
    return (
        <div className="flex w-full justify-center text-2xl">   
            <a href="http://www.google.com" target="BLANK">
                <div className="flex flex-col gap-2 text-center border-2 rounded-md shadow-lg p-6">
                    <h1>{book?.title}</h1>
                    <p>Author: {book?.author}</p>
                    <p>Published Date: {book?.publishedAt}</p>
                    <p>Description: {book?.description}</p>
                    <img className="w-[200px] h-[200px] self-center m-4 rounded-lg shadow-lg" src={Book} alt="" />
                </div>
            </a>
        </div>
    );
}