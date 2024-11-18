import { useState } from "react";
import SearchBar from "./SearchBar";
import BookAdd from "./BookAdd";

function BookList() {
    const [books, setBooks] = useState([
        { id: 1, title: "Java programming", price: 20 },
        { id: 2, title: "JSX programming", price: 30 },
        { id: 3, title: "JS programming", price: 50 },
    ]);

    const [originalBooks, setOriginalBooks] = useState([...books]); // For resetting after search
    const [editingBook, setEditingBook] = useState(null); // Track the book being edited
    const [showAddForm, setShowAddForm] = useState(false); // Control form visibility

    // Add book
    const handleAddBook = (newBook) => {
        setBooks([...books, newBook]);
        setOriginalBooks([...originalBooks, newBook]);
    };

    // Search books
    const handleSearch = (searchValue) => {
        if (searchValue) {
            const filteredBooks = originalBooks.filter((book) =>
                book.title.toLowerCase().includes(searchValue.toLowerCase())
            );
            setBooks(filteredBooks);
        } else {
            setBooks(originalBooks);
        }
    };

    // Delete book
    const handleDelete = (id) => {
        const updatedBooks = books.filter((book) => book.id !== id);
        setBooks(updatedBooks);
        setOriginalBooks(updatedBooks);
    };

    // Edit book
    const handleEdit = (book) => {
        setEditingBook(book); // Set the book to be edited
    };

    // Save edited book
    const handleSaveEdit = (updatedBook) => {
        const updatedBooks = books.map((book) =>
            book.id === updatedBook.id ? updatedBook : book
        );
        setBooks(updatedBooks);
        setOriginalBooks(updatedBooks);
        setEditingBook(null); // Clear editing mode
    };

    // Toggle form visibility
    const toggleAddForm = () => {
        setShowAddForm(!showAddForm);
    };

    return (
        <div className="bg-[#121212] text-white min-h-screen py-8 px-4">
            <h1 className="text-[#EEB76B] text-center text-3xl font-bold mb-6">Book List</h1>
            <div className="flex justify-between mb-6">
                <SearchBar onSearch={handleSearch} />
                {/* Button to toggle Add Book form */}
                <div className="mr-12">
                    <button
                        onClick={toggleAddForm}
                        className="bg-[#E2703A] text-white px-4 rounded-lg hover:bg-[#EEB76B] transition mb-6"
                    >
                        {showAddForm ? "Cancel" : "Add Book"}
                    </button>
                </div>
            </div>

            {/* Conditional rendering of the form */}
            {showAddForm && (
                <BookAdd onAddBook={handleAddBook} editingBook={editingBook} onSaveEdit={handleSaveEdit} />
            )}

            <table className="w-full border-collapse mb-10 bg-[#1f1f1f]">
                <thead className="bg-[#310B0B]">
                    <tr>
                        <th className="border-b p-2">ID</th>
                        <th className="border-b p-2">Title</th>
                        <th className="border-b p-2">Price</th>
                        <th className="border-b p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id} className="text-center hover:bg-[#2c2c2c]">
                            <td className="border-b p-2">{book.id}</td>
                            <td className="border-b p-2">{book.title}</td>
                            <td className="border-b p-2">${book.price}</td>
                            <td className="border-b p-2">
                                <button
                                    onClick={() => handleEdit(book)}
                                    className="bg-[#E2703A] text-white py-1 px-2 rounded-lg hover:bg-[#EEB76B] transition mr-2"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(book.id)}
                                    className="bg-[#9C3D54] text-white py-1 px-2 rounded-lg hover:bg-[#310B0B] transition"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BookList;
