import { Envelope, FigmaLogo, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import styles from "./ContactPanel.module.css";

import "@phosphor-icons/react";

export function ContanctPanel() {
    return (
        <aside className={styles.ContactPanel}>
            <ul>
                <li>
                    <a href="">
                        <GithubLogo size={24} />
                    </a>
                </li>
                <li>
                    <a href="">
                        <LinkedinLogo size={24} />
                    </a>
                </li>
                <li>
                    <a href="">
                        <Envelope size={24} />
                    </a>
                </li>
                <li>
                    <a href="">
                        <FigmaLogo size={24} />
                    </a>
                </li>
            </ul>
        </aside>
    );
}
