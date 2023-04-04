import React from "react";

const MovieCard = ({ myData }) => {
  const { id, snippet } = myData;

  if (snippet) {
    const { title, channelTitle, thumbnails } = snippet;
    const thumbnailUrl = thumbnails?.default?.url;
    return (
      <div className="card">
        <div className="card-info">
          <div className="video-wrapper">
            <iframe
              title={title}
              src={`https://www.youtube.com/embed/${id}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
          <h2>{title}</h2>
          <p>{channelTitle}</p>
        </div>
      </div>
    );
  } else {
    const { title, body } = myData;
    return (
      <div className="card">
        <div className="card-info">
          <p className="card-id">{id}</p>
          <p>{body.substr(0, 150)}</p>
          <h2>{title.substr(0, 15)}</h2>
        </div>
      </div>
    );
  }
};

export default MovieCard;
