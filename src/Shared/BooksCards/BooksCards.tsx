import type { IBook } from "@/redux/Interfaces/Interfaces";

interface Props {
  book: IBook;
}

const BooksCards = ({ book }: Props) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800">{book.title}</h3>
        <p className="text-gray-500 mt-1">by {book.author}</p>
      </div>
      <div className="flex flex-col gap-1 text-sm text-gray-600 mb-4">
        <p><span className="font-semibold">Genre:</span> {book.genre}</p>
        <p><span className="font-semibold">ISBN:</span> {book.isbn}</p>
      </div>
      <div className="mt-auto">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold
            ${book.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
          `}
        >
          {book.available ? `Available (${book.copies} copies)` : "Unavailable"}
        </span>
      </div>
    </div>
  );
};

export default BooksCards;
