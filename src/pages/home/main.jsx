import { useVideoListing } from "contexts";
import { useNavigate } from "react-router-dom";

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
        <div className="deals">
          <img
            className="carousal"
            src="https://media.istockphoto.com/photos/rendered-laughing-tears-emoji-faces-stock-photo-picture-id1294429156?b=1&k=20&m=1294429156&s=170667a&w=0&h=IBsUjI6TkvtIgRKE5tvwfEyCINNV-VTPdaDaz5oXAmo="
            alt="deals.img"
          />
        </div>
        <h1 className="home-heading">Sort By Categories</h1>
        <section className="sub-container">
          {categories.map(({ categoryName, src, _id }) => (
            <span
              // to={`/videoListing/${categoryName}`}
              key={_id}
              style={{ cursor: "pointer" }}
              onClick={() => categoryHandler(categoryName)}
            >
              <div className="retina">
                <h1 className="banner">{categoryName}</h1>
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
