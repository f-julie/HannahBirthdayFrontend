import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function BookList() {
    const [books,setBooks] = useState([]);

    useEffect(() => {
        getBooks();
    }, [])

    const getBooks = async () => {
        try {
            const result = await axios.get('https://libapi-mfq42mv3.b4a.run/books');
            console.log(result);
            setBooks(result.data);
        } catch (err) {
            console.log(err);
        }
    }
    // const bookData = [
    //     {
    //         id: 0,
    //         title: "My First Book",
    //         author: "Agatha Christie",
    //         description: "Description of my book",
    //         publishedAt: "2000-06-02"

    //     },
    //     {
    //         id: 1,
    //         title: "My Second Book",
    //         author: "Agatha Christie",
    //         description: "Description of my book",
    //         publishedAt: "2000-06-02"
    //     },
    //     {
    //         id: 2,
    //         title: "My Third Book",
    //         author: "Agatha Christie",
    //         description: "Description of my book",
    //         publishedAt: "2000-06-02"
    //     },
    //     {
    //         id: 3,
    //         title: "My Fourth Book",
    //         author: "Agatha Christie",
    //         description: "Description of my book",
    //         publishedAt: "2000-06-02"
    //     }
    // ];
    
    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col text-center w-[95%]">

            <h1 className="text 2xl">Book List</h1>
            <ul className="flex flex-col gap-4 border rounded-md shadow-lg p-5 m-4 w-[80%] self-center">
                {
                    books.map(book =>(
                        <li className="border rounded-lg p-6" key={book.id}>
                            <Link to={`/books/${book.id}`}>
                            <h2 className="text-xl">{book.title}</h2>
                            <h3 className="text-lg">{book.author}</h3>
                            <p className="font-bold">{book.publishedAt}</p>
                            </Link>
                        </li>
                    ))
                }
            </ul>

            </div> 
        </div>
    );
}