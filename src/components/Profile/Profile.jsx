
import css from "./Profile.module.css";


export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.profileInfo}>
        <img src={image} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className={css.spanTitel}>Followers</span>
          <span className={css.spanText}>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.spanTitel}>Views</span>
          <span className={css.spanText}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.spanTitel}>Likes</span>
          <span className={css.spanText}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};