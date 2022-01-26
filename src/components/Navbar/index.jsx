
// Kita menggunakan API LINK dari react-router-dom
// supaya menghindari refresh pada browser
// jika kita menggunakan element anchor atau <a></a> maka akan melakukan refresh
// yang membuat aplikasi web menjadi berat
// hadirnya API LINK dari react-router-dom untuk meringankan aplikasi web

import classnames from 'classnames';
import newsIcon from '../../assets/news-icon.svg';
import styles from './Navbar.module.css';

import { CATEGORIES } from '../../constants/categories';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [selected, setSelected] = useState('')

    return (
        <nav className={styles.nav}>
            <div className={styles.navIconWrapper}>
                <img className={styles.navIcon} src={newsIcon} alt="navbar icon" />
                <h1 className={styles.navTitle}>NEWS</h1>
            </div>

            <div className={styles.categories}>
                {CATEGORIES.map((category, index) => (
                        <Link
                            key={index}
                            onClick={() => setSelected(category.name)}
                            to={`/${category.slug}`}
                            className={classnames(styles.category, {
                                [styles.selected]: selected === category.name
                                // styles.selected akan aktif jika text selected sama dengan category.name
                            })}
                        >
                            {category.name}
                        </Link>
                ))}
            </div>
        </nav>
    )
}



export default Navbar