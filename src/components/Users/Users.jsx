import * as axios from 'axios';
import React from 'react';
import styles from './users.module.css'
import userPhoto from '../../assets/images/avatar.jpg';

class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }


    render() {

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }



        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && styles.selectedPage}>{p}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div key={u.id} className={styles.user}>
                    <div >
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} width={60} className={styles.userPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { this.props.unfollow(u.id) }} className={styles.button}>Unfollow</button>
                                : <button onClick={() => { this.props.follow(u.id) }} className={styles.button}>Follow</button>}
                        </div>
                    </div>
                    <div className={styles.info}>
                        <div>
                            <div className={styles.name}>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </div>

                    </div>
                </div>)

            }
        </div>
    }
}


export default Users;
