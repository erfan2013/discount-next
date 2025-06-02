"use client";

import { createNewCategory } from "@/lib/firestore/categoreis/Write";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function From() {
  const [data, setData] = useState({});
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handledata = (key, value) => {
    setData((preDate) => {
      return {
        ...(preDate ?? {}),
        [key]: value,
      };
    });
  };
  const handleCreate = async () => {
    setLoading(true);

    try {
      await createNewCategory({ data: data, image: image });
      toast.success("category created successfully");
      setData({});
      setImage(null);
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  return (
    <main className=" flex flex-col gap-3 bg-white p-5 rounded-xl w-full md:w-[400px]">
      <h1 className="font-semibold capitalize">create category</h1>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate();
        }}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="category-image" className="text-gray-500 text-sm">
            Image <span className="text-red-500">*</span>
          </label>
          {image && (
            <div className="flex justify-center items-center p-3">
              <img
                className="h-20"
                src={URL.createObjectURL(image)}
                alt="image"
              />
            </div>
          )}
          <input
            onChange={(e) => {
              if (e.target.files.length > 0) {
                setImage(e.target.files[0]);
              }
            }}
            id="category-image"
            name="category-image"
            type="file"
            placeholder=" enter image"
            className="border px-4 py-2 rounded-lg w-full focus-:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="category-name" className="text-gray-500 text-sm">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="category-name"
            name="category-name"
            type="text"
            placeholder=" enter name"
            value={data.name ?? ""}
            onChange={(e) => handledata("name", e.target.value)}
            className="border px-4 py-2 rounded-lg w-full focus-:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="category-slug" className="text-gray-500 text-sm">
            Slug <span className="text-red-500">*</span>
          </label>
          <input
            id="category-slug"
            name="category-slug"
            type="text"
            placeholder=" enter Slug"
            value={data.slug ?? ""}
            onChange={(e) => handledata("slug", e.target.value)}
            className="border px-4 py-2 rounded-lg w-full focus-:outline-none"
          />
        </div>
        <Button
          isLoading={loading}
          isDisabled={loading}
          color="primary"
          type="submit"
        >
          Create
        </Button>
      </form>
    </main>
  );
}
