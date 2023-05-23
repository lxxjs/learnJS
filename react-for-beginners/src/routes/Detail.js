import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setDetails(json.data.movie);
      setLoading(false);
    };
    getMovie();
    console.log(details);
  }, [id, details]);

  return (
    <div>
      {loading ? (
        <div>
          <h1>loading ...</h1>
        </div>
      ) : (
        <div>
          <img src={details.large_cover_image} alt={details.title} />
          <h2>{details.title}</h2>
          <p>{details.description_full}</p>
          <ul>
            {details.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Detail;
