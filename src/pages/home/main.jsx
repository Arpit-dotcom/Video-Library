import { Link } from "react-router-dom";

const Main = ({ categories }) => {
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
          {categories.map((item, index) => (
            <Link
              to={`/videoListing/${item.title}`}
              key={index}
              style={{ cursor: "pointer" }}
            >
              <div className="retina">
                <h1 className="banner">{item.title}</h1>
                <img className="img-size" src={item.src} alt="card-image" />
              </div>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
};

export { Main };
