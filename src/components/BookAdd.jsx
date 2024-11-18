import { useState, useEffect } from "react";

function BookAdd({ onAddBook, editingBook, onSaveEdit }) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [currentId, setCurrentId] = useState(4); // Start ID at 4

    useEffect(() => {
        if (editingBook) {
            setTitle(editingBook.title);
            setPrice(editingBook.price);
        }
    }, [editingBook]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !price) {
            alert("Please provide both title and price.");
            return;
        }
        if (editingBook) {
            onSaveEdit({ ...editingBook, title, price: parseFloat(price) });
        } else {
            const newBook = {
                id: currentId, // Use the current ID
                title,
                price: parseFloat(price),
            };
            onAddBook(newBook);
            setCurrentId(currentId + 1); // Increment the ID for the next book
        }
        setTitle("");
        setPrice("");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-lg mb-6 w-96">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-lg font-medium">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-3 mt-2 rounded-lg border border-[#FF8225] focus:outline-none focus:border-[#B43F3F] mb-2"
                        placeholder ="Enter book title"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-lg font-medium">Price:</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full p-3 mt-2 rounded-lg border border-[#FF8225] focus:outline-none focus:border-[#B43F3F] mb-2"
                        placeholder="Enter book price"
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full py-3 bg-[#FF8225] text-white font-bold rounded-lg hover:bg-[#B43F3F] transition"
                >
                    {editingBook ? "Save Changes" : "Add Book"}
                </button>
            </form>
        </div>
    );
}

export default BookAdd;