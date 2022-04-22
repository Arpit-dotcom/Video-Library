import { Link } from "react-router-dom";
import { home } from "staticData/data";

const Main = () => {
  return (
    <>
      <main className="container">
        <div className="deals">
          <img className="carousal" src={home.banner} alt="deals.img" />
        </div>
        <h1 className="home-heading">Sort By Categories</h1>
        <section className="sub-container">
          {home.data.map((item, index) => (
            <Link
              to={`/product/${item.creator}`}
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
