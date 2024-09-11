import React from 'react';
import styles from './css/SearchBar.module.css'

const SearchBar = () => {
    return (
        <div className={styles.searchContainer}>
            <input type="text" placeholder="Search AI..." className={styles.searchInput} />
            <button className={styles.searchButton}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="#693EE0"
                >
                    <path d="M23.707 22.293l-6.742-6.742C18.334 13.82 19 12.006 19 10c0-4.963-4.037-9-9-9S1 5.037 1 10s4.037 9 9 9c2.006 0 3.82-.666 5.551-1.849l6.742 6.742a.999.999 0 1 0 1.414-1.414zM3 10c0-3.86 3.141-7 7-7s7 3.14 7 7-3.141 7-7 7-7-3.14-7-7z" />
                </svg>
            </button>
        </div>
    );
};

export default SearchBar;
