import React, { useState } from "react";
import { Pagination } from "@mui/material";
import data from "../../../db.json";
import { Link, useNavigate } from "react-router-dom";
import FadeIn from "../../components/FadeIn/FadeIn";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import SelectComponent from "../../components/SelectComponent/SelectComponent";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [sortValue, setSortValue] = useState("");

  const navigate = useNavigate();

  const filteredCategories =
    selectedCategory === "All"
      ? data.shopPage
      : data.shopPage.filter((item) => item.category === selectedCategory);

  let searchData = filteredCategories.filter((i) =>
    i.title.toLowerCase().includes(search.toLowerCase())
  );

  if (searchData == "")
    return (
      <div className="flex items-center justify-center text-center mt-[8rem]">
        <p className="text-red-600 text-[30px] font-medium">
          Belə məlumat yoxdur
        </p>
      </div>
    );

  // sort by price
  if (sortValue === "asc") {
    searchData = [...searchData].sort((a, b) => a.price - b.price);
  } else if (sortValue === "desc") {
    searchData = [...searchData].sort((a, b) => b.price - a.price);
  }

  // Pagination
  const itemsPerPage = page === 1 ? 9 : 4;
  const startIndex = page === 1 ? 0 : 9;
  const selectedItems = searchData.slice(startIndex, startIndex + itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <div className="w-[90%] m-auto">
        <FadeIn>
          <div className="flex md:items-end items-center md:gap-18 gap-6 md:flex-row flex-col">
            <div className="md:w-[80%] w-full flex justify-between mt-[40px]">
              <h3>Məhsullar</h3>
              <SelectComponent
                sortValue={sortValue}
                setSortValue={setSortValue}
              />
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
          <div className="flex justify-between md:flex-row flex-col mt-9">
            <div className="flex justify-center flex-wrap gap-20 md:w-[80%] w-full md:justify-between">
              {selectedItems.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="cursor-pointer w-[300px] h-[350px]"
                  >
                    <div className="overflow-hidden group">
                      <img
                        className="w-full transition-transform duration-300 group-hover:scale-110"
                        src={`./img/${item.img}`}
                        alt={item.title}
                      />
                    </div>
                    <div className="flex items-center flex-col text-center mt-3">
                      <h4 className="text-[#6B6B6B]">{item.category}</h4>
                      <p className="font-medium text-[17px]">{item.title}</p>
                      <span className="text-[#6B6B6B] text-[16px]">
                        {item.price}$
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
                        ? "font-medium text-[#a65009]"
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
                          ? "font-medium text-[#a65009]"
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
        </FadeIn>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Shop;
