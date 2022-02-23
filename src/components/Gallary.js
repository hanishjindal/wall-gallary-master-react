import React, { useEffect, useState } from "react";

const Gallary = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setisLoaded] = useState(false);
  const [imgData, setimgData] = useState([]);
  const getImg = async () => {
    const response = await fetch(
      "http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0"
    );
    setisLoaded(true);
    setimgData(await response.json());
  };
  useEffect(() => {
    getImg();
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="gallery">
        {imgData.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.urls.regular} alt={item.alt_description} />
            </div>
          );
        })}
      </div>
    );
  }
};

export default Gallary;
