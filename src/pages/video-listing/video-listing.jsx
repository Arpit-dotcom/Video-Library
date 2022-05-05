import { Main } from "./main";
import "styles/video-listing.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useVideoListing } from "contexts";

export const VideoListing = () =>{

  const getVideoListing = (category, videoDispatch) =>{
    if(category){
      if(category === "Zakir Khan"){
        videoDispatch({ type: "category", payload: "Zakir Khan" });
      }
      if (category === "Abhishek Upmanyu") {
        videoDispatch({ type: "category", payload: "Abhishek Upmanyu" });
      }
      if (category === "Munawar Faruqui") {
        videoDispatch({ type: "category", payload: "Munawar Faruqui" });
      }
      if (category === "Haseeb Khan") {
        videoDispatch({ type: "category", payload: "Haseeb Khan" });
      }
      if (category === "Aakash Gupta") {
        videoDispatch({ type: "category", payload: "Aakash Gupta" });
      }
      if (category === "Harsh Gujral") {
        videoDispatch({ type: "category", payload: "Harsh Gujral" });
      }
    }
  }

  useEffect(() =>{
    document.title = "VideoListing | Laugh Factory";
    getVideoListing(category, videoDispatch);
  },[])

  const {videoDispatch} = useVideoListing();
  const {category} = useParams();

    return (
      <>
        <Main />
      </>
    );
}