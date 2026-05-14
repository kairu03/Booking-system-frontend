import { useState, useEffect } from "react";
import { getAllCategories } from "../services/category.service";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);


  return (
    <div>
      <h1>Browse Categories</h1>

      {categories.length === 0
        ? (
          <p>No categories available yet.</p>)
        : (
          categories.map((category) => (
            <div
              key={category._id}
              onClick={() => navigate(`categories/${category._id}/resources`)}
              style={{ cursor: "pointer", border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}
            >
              <h2>{category.name}</h2>
              <p>{category.description}</p>
            </div>
          ))
        )}
    </div>
  );
};