import { useState } from "react";
import axios from 'axios';

export default function BookForm() {

    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[author, setAuthor] = useState('');
    const[published, setPublished] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const book = {title, description, author, publishedAt: published };

        try {
            const result = await axios.post("https://libapi-mfq42mv3.b4a.run/books", book);
            console.log(result);
            setTitle('');
            setDescription('');
            setAuthor('');
            setPublished('');
            alert("Successfully created book!");
        } catch (err) {
            console.error(err);
        }

        console.log("Book: ", book);
    }

    return (
    <div className="w-full flex justify-center">
        <div>
        <h1 className="text-2xl">Create New Book</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-3 my-4">
                    <label className="mt-2" htmlFor="title">Title:</label>
                    <input className="border p-2 rounded-md" type="text" value={title} name="title" id="title" onChange={(e) => setTitle(e.target.value)} placeholder="Input your book title..." />
                </div>
                <div className="flex flex-col gap-3 my-4">
                    <label htmlFor="description">Description:</label>
                    <textarea className="border p-2 rounded-md" rows="3" type="text" value={description} name="description" id="description" onChange={(e) => setDescription(e.target.value)} placeholder="Add a description of your book..." />
                </div>
                <div className="flex flex-col gap-3 my-4">
                    <label className="mt-2" htmlFor="published">Published:</label>
                    <input className="border p-2 rounded-md" type="date" value={published} name="published" id="published" onChange={(e) => setPublished(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-3 my-4">
                    <label className="mt-2" htmlFor="author">Author:</label>
                    <input className="border p-2 rounded-md" type="text" value={author} name="author" id="author" onChange={(e) => setAuthor(e.target.value)} placeholder="Input the book's author..." />
                </div>
                <button className="border p-2 rounded-md w-full bg-blue-400 text-white hover:text-black hover:bg-blue-300" type="submit">Save</button>
            </form>
        </div>
    </div>
    );
}