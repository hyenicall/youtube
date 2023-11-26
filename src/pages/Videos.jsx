import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import axios from "axios";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const { isLoading, error, data: videos } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => youtube.search(keyword)
  });


  return (
    <>
      <div>Videos {keyword ? `${keyword}` : "hot"}</div>
      {isLoading && <p>Loding...</p>}
      {error && <p>Somthing is wrong</p>}
      {videos && (
        <ul className="grid grid-rows-4 grid-flow-col gap-4">
          {videos.map((video) => (
            <VideoCard key={video.id.videoId} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
