import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function ChannelInfo({ channelId, channelTitle }) {
  const { youtube } = useYoutubeApi();

  const { isLoading, error, data: url } = useQuery({
    queryKey: ["channels", channelId],
    queryFn: () => youtube.channelImageURL(channelId)
  });

  console.log(url)

  return (
    <div className="flex my-4 mb-8 items-center">
      <img
        className="w-10 h-10 rounded-full"
        src={url}
        alt={channelTitle}
      />
      <p className="text-lg font-medium ml-2">{channelTitle}</p>
    </div>
  );
}
