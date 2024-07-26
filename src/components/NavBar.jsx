import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="flex justify-between m-4 p-4 bg-blue-700/50 rounded-md text-white">
            <div>Book <span className="text-black font-bold">Library</span></div>
            <nav className="flex gap-4">
                <Link className="hover:text-black" to="">Home</Link>
                <Link className="hover:text-black" to="/books">All Books</Link>
                <Link className="hover:text-black" to="books/new">New Book</Link>
            </nav>
        </div>
    );
}