import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function RelatedVideos({ id }) {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const { isLoading, error, data: videos } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () =>
      axios.get(`/videos/related.json`).then((res) => res.data.items)
  });

  // const { isLoading, error, data: videos } = useQuery({
  //   queryKey: ["videos", keyword],
  //   queryFn: () => youtube.search(keyword)
  // });

  return (
    <>
      {isLoading && <p>Loding...</p>}
      {error && <p>Somthing is wrong</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id.videoId} video={video} type="list" />
          ))}
        </ul>
      )}
    </>
  );
}
