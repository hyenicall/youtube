import React from "react";
import { formatAge } from "../util/date";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const isList = type === "list";

  return (
    <li
      className={isList ? "flex gap-1 m-2" : ""}
      key={video.id}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img
        className={isList ? "w-60 mr-4" : "w-full"}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div className="">
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAge(publishedAt, "ko")}</p>
      </div>
    </li>
  );
}
