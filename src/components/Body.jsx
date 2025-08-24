import React, { useEffect, useState } from "react";
import Cards from "../utils/Cards";
import "../scss/Body.scss";
import Shimmer from "../utils/Shimmer";

const Body = () => {
  const [photo, setPhoto] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredPhotos, setFilteredPhotos] = useState([]);

  // fetch the data
  useEffect(() => {
    fetchedData();
  }, []);

  const fetchedData = async () => {
    try {
      const data = await fetch("https://boringapi.com/api/v1/photos");
      const resJson = await data.json();
      setPhoto(resJson.photos);
      setFilteredPhotos(resJson.photos);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    if (search.trim() === "") {
      setFilteredPhotos(photo); //all
    } else {
      const result = photo.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      });
      setFilteredPhotos(result);
    }
  };

  const handleReset = () => {
    setFilteredPhotos(photo);
    setSearch("");
  };

  if (photo.length === 0) {
    return (
      <div className="shimmer-grid">
        {Array.from({ length: 8 }).map((_, index) => (
          <Shimmer key={index} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="input-btn">
        <button onClick={handleReset}>Reset</button>
        <input
          value={search}
          type="text"
          placeholder="Search keyword"
          onChange={handleChange}
        />
        <button type="search" onClick={handleSearch}>
          Search
        </button>
      </div>

      {filteredPhotos.length > 0 ? (
        filteredPhotos.map((photoData) => (
          <Cards key={photoData.id} photos={photoData} />
        ))
      ) : (
        <p>No photos found</p>
      )}
    </div>
  );
};

export default Body;
