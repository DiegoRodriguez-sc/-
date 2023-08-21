import React, { useState, useEffect } from "react";
import Count from "../Count";
import "../../index.css";
import Cat from "../Cat";


const DashBoardCount = () => {
  const apiKey = "422KBcZZNP1aO8cDsH0ExZgLgBiduwgGDHtlMKGZ1HrSY8Q67fDIXy8b";
  const query = "cats";
  const perPage = 15;
  const totalResults = 8000;
  const totalPages = Math.ceil(totalResults / perPage);
  const randomPage = Math.floor(Math.random() * totalPages) + 1;
  const url = `https://api.pexels.com/v1/search?query=${query}&page=${randomPage}&per_page=${perPage}`;

  const [photoUrl, setPhotoUrl] = useState("");
  const [loading, setLoading] = useState(true);

  const loadRandomCatImage = () => {
    setLoading(true);

    fetch(url, {
      headers: {
        Authorization: apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const photos = data.photos;
        const randomIndex = Math.floor(Math.random() * photos.length);
        const randomPhoto = photos[randomIndex];
        const newPhotoUrl = randomPhoto.src.portrait;

        const img = new Image();
        img.src = newPhotoUrl;
        img.onload = () => {
          setPhotoUrl(newPhotoUrl);
          setLoading(false);
        };
      })
      .catch((error) => {
        console.error("Error fetching photo:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadRandomCatImage();
  }, []);

  return (
    <>
      {loading ? (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <div className="py-6">
              <Cat/>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="hero min-h-screen"
          style={{ backgroundImage: `url(${photoUrl})` }}
        >
          <div className="hero-overlay bg-opacity-60 transition-opacity"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-7xl font-bold">
                <Count />
              </h1>
              <p className="mb-5 text-4xl">항상 옆에 있어줘서 고마워</p>
              <span className="cursor-pointer" onClick={loadRandomCatImage}>😺</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashBoardCount;
