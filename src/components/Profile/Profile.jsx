
import "./Profile.css";


export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className="profile">
      <div className="profile-info">
        <img src={image} alt="User avatar" className="avatar"/>
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li className="stats-item">
          <span className="span-titel">Followers</span>
          <span className="span-text">{stats.followers}</span>
        </li>
        <li className="stats-item">
          <span className="span-titel">Views</span>
          <span className="span-text">{stats.views}</span>
        </li>
        <li className="stats-item item-last">
          <span className="span-titel">Likes</span>
          <span className="span-text">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};