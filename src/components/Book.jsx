function Book({ book }) {
    return (
        <tr>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>${book.price}</td>
        </tr>
    );
}

export default Book;
