import React from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {
    const styles = {
        navbar: {
            backgroundColor: '#87CEEB', // Sky blue color
            padding: '15px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        logo: {
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'white',
        },
        menu: {
            listStyleType: 'none',
            display: 'flex',
            margin: 0,
            padding: 0,
        },
        menuItem: {
            marginLeft: '20px',
        },
        link: {
            textDecoration: 'none',
            color: 'white',
            fontSize: '18px',
            fontWeight: '500',
        },
    };

    return (
        <nav>
            <div style={styles.navbar}>
                <div style={styles.logo}>
                    Letmetalktohuman AI
                </div>
                <ul style={styles.menu}>
                    <li style={styles.menuItem}>
                        <Link to="/" style={styles.link}>Home</Link>
                    </li>
                    <li style={styles.menuItem}>
                        <Link to="/app" style={styles.link}>Application</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
