import styles from "./App.module.css";
import { ContanctPanel } from "./components/ContactPanel/ContactPanel.tsx";
import { Nav } from "./components/Nav/Nav.tsx";
import GearIcon from "./assets/GearIcon.svg";

export function App() {
    return (
        <div className={styles.App}>
            <header>
                <Nav />
            </header>
            <main className={styles.MainContent}>
                <h1>Front-End</h1>
                <h2>Developer</h2>
            </main>
            <ContanctPanel />
            <div className={styles.CodeIcon}>
                <img src={GearIcon} alt="Gear Icon" />
            </div>
            <div className={styles.GearIcons}></div>
        </div>
    );
}
