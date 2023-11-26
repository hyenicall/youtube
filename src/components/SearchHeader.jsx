import React, { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SearchHeader() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  return (
    <header className="w-full flex p-4 text-2xl border-b border-gray-600 mb-4">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-red-600" />
        <h1 className="text-3xl font-bold ml-2">YouTube</h1>
      </Link>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-7/12 p-2 outline-none bg-gray-100"s
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button className="bg-gray-300 px-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
