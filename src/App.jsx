import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import MessageList from "./components/MessageList";
import MessageDetail from "./components/MessageDetail";
import MessageForm from "./components/MessageForm";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<MessageList />} />
        <Route path="/messages/:id" element={<MessageDetail />} />
        <Route path="/messages/new" element={<MessageForm />} />
      </Routes>
    </div>
  )
}