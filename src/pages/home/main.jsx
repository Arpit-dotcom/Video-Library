import { useVideoListing } from "contexts";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

const Main = ({ categories }) => {
  const navigate = useNavigate();
  const { videoDispatch } = useVideoListing();

  const categoryHandler = async (category) => {
    videoDispatch({ type: "FILTER_CATEGORY", payload: category });
    navigate("/explore");
  };

  return (
    <>
      <main className="container">
        <section className="banner">
          <div className="banner-text">
            <h1 className="banner-text-heading">
              View stand-up comedy in just single click.
            </h1>
            <Link to="/explore" className="banner-text-button">
              EXPLORE VIDEOS
              <AiOutlineRight className="banner-arrow" />
            </Link>
          </div>
        </section>
        <h1 className="home-heading">Videos By Category</h1>
        <section className="sub-container">
          {categories.map(({ categoryName, src, _id }) => (
            <span
              key={_id}
              className="cursor-pointer"
              onClick={() => categoryHandler(categoryName)}
            >
              <div className="retina">
                <h1 className="text-overlay">{categoryName}</h1>
                <img
                  className="img-size"
                  src={`https://yt3.ggpht.com/${src}=s176-c-k-c0x00ffffff-no-rj-mo`}
                  alt="card-image"
                />
              </div>
            </span>
          ))}
        </section>
      </main>
    </>
  );
};

export { Main };
