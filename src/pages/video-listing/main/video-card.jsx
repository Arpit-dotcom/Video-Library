export const VideoCard = ({ id, image, title, views, days, time, creator }) => {
  return (
    <section className="card badge-card" key={id}>
      <button className="timing">{time}</button>
      <img className="img" src={image} alt="card-image" />
      <div className="card-text">
        <section class="avatar flex">
          <span class="round-avatar">
            <img
              class="round sm"
              src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=170667a&w=0&h=Ct4e1kIOdCOrEgvsQg4A1qeuQv944pPFORUQcaGw4oI="
              alt="avatar-image"
            />
          </span>
          <span>
            <h4>{title}</h4>
            <small>{creator}</small>
            <div>
              <small className="card-view">
                <i class="fas fa-eye"></i>
                {views}
              </small>
              <small>
                <i class="far fa-dot-circle"></i>
                {days}
              </small>
            </div>
          </span>
        </section>
      </div>
    </section>
  );
};
