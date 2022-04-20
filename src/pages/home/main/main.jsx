import { home } from "staticData/data";

const Main = () => {
  return (
    <>
      <main className="container">
        {home.map((sale, index) => (
          <>
            <div className="deals">
              <img className="carousal" src={sale.banner} alt="deals.img" />
            </div>
            <h1 className="home-heading">Sort By Categories</h1>
            <section className="sub-container">
              {sale.data.map((item) => (
                <a href="#" style={{ cursor: "pointer" }}>
                  <div className="retina">
                    <h1 className="banner">{item.title}</h1>
                    <img className="img-size" src={item.src} alt="card-image" />
                  </div>
                </a>
              ))}
            </section>
          </>
        ))}
      </main>
    </>
  );
};

export { Main };
