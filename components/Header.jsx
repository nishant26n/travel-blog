/* eslint-disable @next/next/link-passhref */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-10">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block text-center font-mono">
          <Link href="/">
            <span className="cursor-pointer font-bold text-2xl text-pink-900 lg:text-3xl">
              Fearless Outing Blog
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left  md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-pink-900 ml-4 font-semibold cursor-pointer ">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
