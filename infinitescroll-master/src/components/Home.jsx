import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import MovieComponent from "./MovieComponent";

const Home = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getCardData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
    );
    const data = await res.json();
    // console.log(data);
    setCard((prev) => [...prev, ...data]);
    setLoading(false);
  };

  const getVideoData = async () => {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=9&pageToken=${page}&key=YOUR_YOUTUBE_API_KEY`
    );
    const data = await res.json();
    // console.log(data.items);
    setCard((prev) => [...prev, ...data.items]);
    setLoading(false);
  };

  useEffect(() => {
    getVideoData();
  }, [page]);

  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <>
      <MovieComponent movieInfo={card} />
      {loading && <Loading />}
    </>
  );
};

export default Home;
