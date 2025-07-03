import { useGetBooksQuery } from "@/redux/features/api/libraryApi";
import BooksCards from "@/Shared/BooksCards/BooksCards";



const AllBooks = () => {
    const { data: books = [], isLoading, isError } = useGetBooksQuery();
    if (isLoading) return <div className="text-center py-10">Loading books...</div>
    if (isError) return <div className="text-center py-10 text-red-500">Failed to load books.</div>

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-6">All Books</h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {Array.isArray(books) &&
                    books.map((book) => (
                        <BooksCards key={book._id} book={book} />
                    ))}
            </div>
        </div>
    );
};

export default AllBooks;