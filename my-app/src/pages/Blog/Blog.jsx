import React, { useState } from "react";
import { Pagination } from "@mui/material";
import data from "../../../db.json";
import { Link, useNavigate } from "react-router-dom";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const filteredCategories =
    selectedCategory === "All"
      ? data.blogPage
      : data.blogPage.filter((item) => item.category === selectedCategory);

  let searchData = filteredCategories.filter((i) =>
    i.title.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const itemsPerPage = page === 1 ? 3 : 2;
  const startIndex = page === 1 ? 0 : 3;
  const selectedItems = searchData.slice(startIndex, startIndex + itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <div className="w-[90%] m-auto">
        <div className="flex md:items-end items-center md:gap-18 gap-6 md:flex-row flex-col">
          <div className="md:w-[80%] w-full flex justify-between mt-[30px]">
            <h3>Məhsullar</h3>
            <div>salam</div>
          </div>
          <div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-[#A9A3A3] p-2 outline-none"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="flex justify-between md:flex-row flex-col mt-5">
          <div className="flex justify-center flex-col md:w-[75%] w-full md:justify-between mt-[30px]">
            {selectedItems.map((item) => {
              return (
                <div key={item.id} className="cursor-pointer mb-10">
                  <div>
                    <img
                      className="w-full"
                      src={`/img/${item.img}`}
                      alt={item.title}
                    />
                  </div>
                  <div className="flex items-center gap-5 mt-3">
                    <h3 className="text-[#898989] border-r border-[#a4a4a4] pr-[15px] font-medium">
                      {item.date}
                    </h3>
                    <h4 className="text-[#898989] border-r border-[#a4a4a4] pr-[15px] font-medium">
                      {item.category}
                    </h4>
                    <span className="text-[#898989] font-medium">
                      {item.auther}
                    </span>
                    <span className="text-[#898989] text-[16px]">
                      {item.price}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-[30px] py-5 font-bold">{item.title}</h2>
                    <span className="text-[#898989] font-normal text-[18px] leading-7">
                      {item.desc}
                    </span>
                    <Link
                      className="mt-5 underline text-[#2F2D2D] text-[20px]"
                      onClick={() => navigate(`/blog-detail/${item.id}`)}
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              );
            })}
            <div className="w-full flex justify-center mt-6">
              <Pagination
                count={2}
                page={page}
                onChange={handleChange}
                color="primary"
              />
            </div>
          </div>
          <div className="md:w-[20%] w-full flex flex-col gap-5">
            <div>
              {data.blogSidebar.map((item) => {
                return (
                  <div className="mt-5 mb-8">
                    <h2 className="text-[#2D2D2D] font-bold text-[21px]">
                      {item.title}
                    </h2>
                    <img
                      className="my-4"
                      src={`/img/${item.img}`}
                      alt={item.title}
                    />
                    <span className="text-[#898989] font-normal text-[18px]">
                      {item.desc}
                    </span>
                  </div>
                );
              })}
              <h2 className="text-xl font-semibold mb-4">
                {data.category.categoryName}
              </h2>
              <ul>
                <li
                  className={`text-[18px] mb-4 cursor-pointer ${
                    selectedCategory === "All"
                      ? "font-bold text-black"
                      : "text-[#7E7E7E]"
                  }`}
                  onClick={() => setSelectedCategory("All")}
                >
                  All
                </li>
                {data.category.items.map((item) => (
                  <li
                    key={item.id}
                    className={`text-[18px] mb-4 cursor-pointer ${
                      selectedCategory === item.name
                        ? "font-bold text-black"
                        : "text-[#7E7E7E]"
                    }`}
                    onClick={() => setSelectedCategory(item.name)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
