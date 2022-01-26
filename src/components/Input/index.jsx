import PropTypes from 'prop-types';
import styles from './Input.module.css';

import { Link } from 'react-router-dom';

const SearchInput = ({ onSubmit, onChange, value }) => {
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <input
            onChange={onChange}
            className={styles.input}
            type="text"
            placeholder="List"
            />
            
            <div className={styles.addButton}>
                <Link
                to={`/${value}`}
                className={styles.textButton}
                >
                    Search
                </Link>
            </div>

        </form>
    )
}

SearchInput.propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string
}

export default SearchInput