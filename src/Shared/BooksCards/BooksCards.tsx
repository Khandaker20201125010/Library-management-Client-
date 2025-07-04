import type { IBook } from "@/redux/Interfaces/Interfaces";

import { BookOpen, User, Hash, LucideBookCopy } from "lucide-react";
import { Link } from "react-router";

interface Props {
  book: IBook;
}

const BookCard = ({ book }: Props) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">

      <div className={`absolute top-0 right-0 px-3 py-1 text-xs font-semibold rounded-bl-lg
        ${book.available ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}`}>
        {book.available ? 'Available' : 'Unavailable'}
      </div>


      <div className="bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 h-48 flex items-center justify-center">
        <BookOpen className="h-16 w-16 text-gray-400 dark:text-gray-500" />
      </div>

      <div className="p-5">

        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white line-clamp-1">
            {book.title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 flex items-center mt-1">
            <User className="h-4 w-4 mr-1" />
            <span className="line-clamp-1">{book.author}</span>
          </p>
        </div>


        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center">
            <Hash className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
            <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-700 rounded-md text-xs">
              {book.genre}
            </span>
          </div>

          <div className="flex items-center">
            <LucideBookCopy className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
            <span>
              {book.copies} {book.copies === 1 ? 'copy' : 'copies'}
            </span>
          </div>
        </div>
        <div className="mt-5 flex flex-col space-y-2">
          <Link
            to={`/details/${book._id}`}
            className="w-full py-2 px-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-center rounded-md transition-all duration-300 flex items-center justify-center"
          >
            <BookOpen className="h-4 w-4 mr-2" />
            View Details
          </Link>

          <Link
            to={`/edit/${book._id}`}
            className="w-full py-2 px-4 border border-emerald-500 text-emerald-500 hover:bg-emerald-50 dark:hover:bg-gray-700 text-center rounded-md transition-all duration-300 flex items-center justify-center"
          >
            Edit Book
          </Link>
        </div>
      </div>
     
    </div>
  );
};

export default BookCard;