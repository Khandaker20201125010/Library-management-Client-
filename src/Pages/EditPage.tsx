import { useForm } from "react-hook-form";
import { useGetBookByIdQuery, useUpdateBookMutation } from "@/redux/features/api/libraryApi";

import Swal from "sweetalert2";
import type { IBook } from "@/redux/Interfaces/Interfaces";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";


const EditPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: book, isLoading: isBookLoading } = useGetBookByIdQuery(id || "");
  const [updateBook, { isLoading }] = useUpdateBookMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IBook>();


  useEffect(() => {
    if (book) {
      reset({
        title: book.title,
        author: book.author,
        genre: book.genre,
        isbn: book.isbn,
        description: book.description || "",
        copies: book.copies,
      });
    }
  }, [book, reset]);

  const onSubmit = async (data: IBook) => {
    try {
      if (!id) return;
      await updateBook({ id, data }).unwrap();

      Swal.fire("Success!", "Book updated successfully", "success");
      navigate(`/details/${id}`);
    } catch (error) {
      Swal.fire("Error!", "Failed to update book", "error");
    }
  };

  if (isBookLoading) return <p>Loading...</p>;
  if (!book) return <p>Book not found</p>;


  return (
    <div className="text-black max-w-6xl w-5xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-md border border-green-500">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Edit <span className="text-emerald-600">Book</span>
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        Edit the book details below.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            {...register("title", { required: "Title is required" })}
            className="mt-1 w-full px-4 py-2 border rounded-md border-gray-300"
            placeholder="Book Title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Author</label>
          <input
            {...register("author", { required: "Author is required" })}
            className="mt-1 w-full px-4 py-2 border rounded-md border-gray-300"
            placeholder="Author Name"
          />
          {errors.author && (
            <p className="text-red-500 text-sm">{errors.author.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Genre</label>
          <select
            {...register("genre", { required: "Genre is required" })}
            className="mt-1 w-full px-4 py-2 border rounded-md border-gray-300"
          >
            <option value="FICTION">Fiction</option>
            <option value="NON_FICTION">Non-Fiction</option>
            <option value="SCIENCE">Science</option>
            <option value="HISTORY">History</option>
            <option value="BIOGRAPHY">Biography</option>
            <option value="FANTASY">Fantasy</option>
          </select>
          {errors.genre && (
            <p className="text-red-500 text-sm">{errors.genre.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">ISBN</label>
          <input
            {...register("isbn", { required: "ISBN is required" })}
            className="mt-1 w-full px-4 py-2 border rounded-md border-gray-300"
            placeholder="ISBN Number"
          />
          {errors.isbn && (
            <p className="text-red-500 text-sm">{errors.isbn.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            {...register("description")}
            className="mt-1 w-full px-4 py-2 border rounded-md border-gray-300"
            placeholder="Optional description..."
            rows={4}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Copies</label>
          <input
            type="number"
            {...register("copies", {
              required: "Copies is required",
              min: { value: 0, message: "Copies cannot be negative" },
            })}
            className="mt-1 w-full px-4 py-2 border rounded-md border-gray-300"
            placeholder="Number of copies"
          />
          {errors.copies && (
            <p className="text-red-500 text-sm">{errors.copies.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="btn border-none w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
        >
          {isLoading ? "Updating..." : "Update Book"}
        </button>
      </form>
    </div>
  );
};

export default EditPage;