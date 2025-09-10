import React, { useState } from "react";
import { Pagination } from "@mui/material";
import data from "../../../db.json";
import { Link, useNavigate } from "react-router-dom";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const filteredCategories =
    selectedCategory === "All"
      ? data.shopPage
      : data.shopPage.filter((item) => item.category === selectedCategory);

  let searchData = filteredCategories.filter((i) =>
    i.title.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const itemsPerPage = page === 1 ? 9 : 4;
  const startIndex = page === 1 ? 0 : 9;
  const selectedItems = searchData.slice(startIndex, startIndex + itemsPerPage);

  const handleChange = (value) => {
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
          <div className="flex justify-center flex-wrap gap-20 md:w-[80%] w-full md:justify-between mt-[30px]">
            {selectedItems.map((item) => {
              return (
                <div
                  key={item.id}
                  className="cursor-pointer w-[300px] h-[350px]"
                >
                  <div>
                    <img
                      className="w-full"
                      src={`./img/${item.img}`}
                      alt={item.title}
                    />
                  </div>
                  <div className="flex items-center flex-col text-center mt-3">
                    <h4 className="text-[#6B6B6B]">{item.category}</h4>
                    <p className="font-medium text-[17px]">{item.title}</p>
                    <span className="text-[#6B6B6B] text-[16px]">
                      {item.price}
                    </span>
                    <Link
                      className="underline text-[#2F2D2D] text-[18px]"
                      onClick={() => navigate(`/shop-detail/${item.id}`)}
                    >
                      read more
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
          <div className="md:w-[15%] w-full flex flex-col gap-5">
            <div>
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

export default Shop;
