import { Main } from "./main";
import { Footer } from "components";
import "styles/home.css";
import { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    (async () => {
      const response = await axios("/api/categories");
      setCategories(response.data.categories);
    })();
  }, []);
  
  return (
    <>
      <Main categories={categories} />
      <Footer />
    </>
  );
};
