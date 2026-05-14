import { useEffect, useState } from "react";
import { getAllResourceByCategory } from "../services/resource.service";
import { useParams } from "react-router-dom";

export const ResourcesPage = () => {
  const [resources, setResources] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchResourcesByCategory = async () => {
      try {
        const data = await getAllResourceByCategory(categoryId);
        setResources(data.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchResourcesByCategory(categoryId);
  }, [categoryId]);


  return (
    <div>
      <h1>Resources</h1>

      {resources.length === 0
        ? (
          <p>No Resources available yet.</p>)
        : (
          resources.map((resource) => (
            <div key={resource._id}>
              <h2>{resource.name}</h2>
              <p>{resource.description}</p>
              <p>{resource.capacity}</p>
              <p>{resource.price}</p>
              <p>{resource.pricingType}</p>
              <p>{resource.amenities}</p>
              <p>{resource.images}</p>
            </div>
          ))
        )}
    </div>
  )
}