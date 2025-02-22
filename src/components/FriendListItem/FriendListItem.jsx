import clsx from "clsx";
import css from './FriendListItem.module.css'


export default function FriendListItem({ friend }) {
    const { avatar, name, isOnline } = friend;
    const statusClsx = clsx(css.status, isOnline ? css.online : css.ofline);


    return (
        <div className={css.card}>
            <img src={avatar} alt="Avatar" width="60px" />
            <p className={css.name}>{name}</p>
            <p className={statusClsx}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>

    );
    }
