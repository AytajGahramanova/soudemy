import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../../db.json";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredCategories =
    selectedCategory === "All"
      ? data.blogPage
      : data.blogPage.filter((item) => item.category === selectedCategory);

  const searchData = filteredCategories.filter((i) =>
    i.title.toLowerCase().includes(search.toLowerCase())
  );

  const blogItem = data.blogPage.find((item) => item.id === parseInt(id));

  if (!blogItem) return <div>Blog tapılmadı</div>;

  return (
    <div className="w-[90%] m-auto">
      <div className="flex md:flex-row flex-col justify-between mt-10 gap-5">
        <div className="md:w-[75%] w-full flex flex-col">
          <div className="cursor-pointer mb-10">
            <div>
              <img
                className="w-full"
                src={`/img/${blogItem.img}`}
                alt={blogItem.title}
              />
            </div>
            <div className="flex items-center gap-5 mt-3">
              <h3 className="text-[#898989] border-r border-[#a4a4a4] pr-[15px] font-medium">
                {blogItem.date}
              </h3>
              <h4 className="text-[#898989] border-r border-[#a4a4a4] pr-[15px] font-medium">
                {blogItem.category}
              </h4>
              <span className="text-[#898989] font-medium">
                {blogItem.auther}
              </span>
            </div>
            <div>
              <h2 className="text-[30px] py-5 font-bold">{blogItem.title}</h2>
              <span className="text-[#898989] font-normal text-[18px] leading-7">
                {blogItem.desc}
              </span>
            </div>
          </div>

          {searchData
            .filter((item) => item.id !== blogItem.id)
            .map((item) => (
              <div
                key={item.id}
                className="cursor-pointer mb-5 border-t border-gray-200 pt-5"
                onClick={() => navigate(`/blog-detail/${item.id}`)}
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            ))}
        </div>

        <div className="md:w-[20%] w-full flex flex-col gap-5">
          <div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-[#A9A3A3] p-2 outline-none w-full mb-4"
              placeholder="Search..."
            />

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
  );
};

export default BlogDetail;
