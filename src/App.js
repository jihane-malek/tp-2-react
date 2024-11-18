import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "../src/components/Welcome";
import BookList from "../src/components/BookList";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/booklist" element={<BookList />} />
            </Routes>
        </Router>
    );
}

export default App;
