import { useGetBorrowSummaryQuery } from "@/redux/features/api/libraryApi";

const BorrowSummary = () => {
   const { data: books = [], isLoading, isError } = useGetBorrowSummaryQuery();

    if (isLoading) return <div className="text-center py-10">Loading books...</div>;
    if (isError) return <div className="text-center py-10 text-red-500">Failed to load books.</div>;

 

    return (
        <div className="container mx-auto px-4 py-8 ">
            <h1 className="text-2xl font-bold mb-6">Borrowed <span className="text-emerald-500">Books</span> Summary</h1>
            
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-emerald-500 rounded-lg">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ISBN</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Borrowed</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {books.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {item.book.title}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {item.book.isbn}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {item.totalQuantity}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BorrowSummary;