import styles from "./Nav.module.css";

export function Nav() {
    return (
        <div className={styles.Header}>
            <div></div>
            <nav className={styles.Nav}>
                <ul>
                    <li>
                        <a href="">About Me</a>
                    </li>
                    <li>
                        <a href="">Projects</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
