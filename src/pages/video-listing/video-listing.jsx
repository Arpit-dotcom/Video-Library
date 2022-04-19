import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar"
import { Main } from "./main/main";
import "../../styles/video-listing.css";

export const VideoListing = () =>{
    return (
      <>
        <Navbar />
        <Main />
        <Footer />
      </>
    );
}