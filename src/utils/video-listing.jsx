import { useVideoListing } from "contexts";
import { useEffect, useState } from "react";

export const useSearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const { videos } = useVideoListing();

  useEffect(() => {
    const array = [...videos];
    if (searchInput === "") {
      return videos;
    }
    console.log(
      array.filter((video) => {
        if (video.title.toLowerCase().includes(searchInput.toLowerCase())) {
          return video;
        }
      })
    );
  }, [searchInput]);

  const searchHandler = (event) => {
    const value = event.target.value;
    setSearchInput(value);
  };
  return { searchHandler, searchInput };
};

export const getFilteredVideos = ([...videos], category) => {
  return category === "" || category === "all"
    ? videos
    : videos.filter((video) => video.creator === category);
};
