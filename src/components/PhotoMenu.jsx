import React, { useEffect, useState } from "react";
import Shimmer from "../utils/Shimmer";
import { useParams } from "react-router-dom";
import { PHOTOS_API } from "../utils/utility";

const PhotoMenu = () => {
  const [photos, setPhotos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchedPhotos = async () => {
      const data = await fetch(`${PHOTOS_API}/${id}`);
      const resJson = await data.json();
      // console.log(resJson);
      setPhotos(resJson.photo);
    };
    fetchedPhotos();
  }, [id]);

  if (!photos) <Shimmer />;

  const { title, description, url } = photos;

  return (
    <div className="photo-card">
      <div className="mapVal">
        <h1>{title}</h1>
        <p>{description}</p>
        {url && <img src={url} alt={title} />}
      </div>
    </div>
  );
};

export default PhotoMenu;
