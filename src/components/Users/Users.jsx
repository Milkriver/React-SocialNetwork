import React from 'react';
import styles from './users.module.css'


let Users = (props) => {
    if (props.users.length === 0) {

        axios.get("");

        props.setUsers([
            { id: 1, photoUrl: 'https://yt3.ggpht.com/a/AATXAJwlB86wImVyNi1rj5SAKuoYl8Mj3TUltjXtGA=s900-c-k-c0xffffffff-no-rj-mo', followed: false, fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 2, photoUrl: 'https://yt3.ggpht.com/a/AATXAJwlB86wImVyNi1rj5SAKuoYl8Mj3TUltjXtGA=s900-c-k-c0xffffffff-no-rj-mo', followed: true, fullName: 'Sasha', status: 'I am a boss too', location: { city: 'Moscow', country: 'Russia' } },
            { id: 3, photoUrl: 'https://yt3.ggpht.com/a/AATXAJwlB86wImVyNi1rj5SAKuoYl8Mj3TUltjXtGA=s900-c-k-c0xffffffff-no-rj-mo', followed: false, fullName: 'Andrew', status: 'I am a boss too', location: { city: 'Kiev', country: 'Ukraine' } },
            { id: 4, photoUrl: 'https://yt3.ggpht.com/a/AATXAJwlB86wImVyNi1rj5SAKuoYl8Mj3TUltjXtGA=s900-c-k-c0xffffffff-no-rj-mo', followed: false, fullName: 'Antonie', status: 'Big Deal', location: { city: 'Saint-Petersburg', country: 'Russia' } },
            { id: 5, photoUrl: 'https://yt3.ggpht.com/a/AATXAJwlB86wImVyNi1rj5SAKuoYl8Mj3TUltjXtGA=s900-c-k-c0xffffffff-no-rj-mo', followed: true, fullName: 'Sofie', status: 'Happiness', location: { city: 'Vladivostok', country: 'Russia' } },
        ]
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} width={60} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>

                </span>
            </div>)

        }
    </div>
}

export default Users;
