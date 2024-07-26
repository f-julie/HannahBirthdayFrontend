import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="flex justify-between m-4 p-4 bg-pink-400/50 rounded-md text-white">
            <div>Hannah's <span className="text-black font-bold">Birthday Website</span></div>
            <nav className="flex gap-4">
                <Link className="hover:text-black" to="">Home</Link>
                <Link className="hover:text-black" to="/messages">All Messages</Link>
                <Link className="hover:text-black" to="messages/new">New Message</Link>
            </nav>
        </div>
    );
}