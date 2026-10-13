'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const closeMenu = (): void => setIsOpen(false);

    const isActive = (href: string): boolean => {
        if (href === "/") {
            return pathname === "/";
        }

        return pathname.startsWith(href);
    };

    function onClickHandler(): void {
        setIsOpen((prev) => !prev);
    }

    return (
        <>
            <header className={styles.header}>
                <div className={`${styles.headerContainer} container`}>
                    <Link className={styles.logo} href="/" onClick={closeMenu} aria-label="PlayDex home">
                        <img className={styles.logoIcon} src="/logo-mark.svg" alt="" aria-hidden="true" />
                        <span className={styles.logoText}>PlayDex</span>
                    </Link>

                    <nav className={styles.nav} aria-label="Main navigation">
                        <ul className={styles.navList}>
                            <li>
                                <Link className={`${styles.navLink} ${isActive("/") ? styles.activeLink : ""}`} href="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className={`${styles.navLink} ${isActive("/games") ? styles.activeLink : ""}`} href="/games">
                                    Games
                                </Link>
                            </li>
                            <li>
                                <Link className={`${styles.navLink} ${isActive("/collection") ? styles.activeLink : ""}`} href="/collection">
                                    Collection
                                </Link>
                            </li>
                            <li>
                                <Link className={`${styles.navLink} ${isActive("#contacts") ? styles.activeLink : ""}`} href="#contacts" onClick={closeMenu}>
                                    Contacts
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <ul className={styles.authList}>
                        <li>
                            <Link className={styles.authLink} href="/login" onClick={closeMenu}>
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.authLink} href="/register" onClick={closeMenu}>
                                Register
                            </Link>
                        </li>
                    </ul>

                    <button
                        className={`${styles.burgerButton} ${isOpen ? styles.active : ""}`}
                        type="button"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        onClick={onClickHandler}
                    >
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                    </button>

                    <div id="mobile-menu" className={`${styles.burgerMenuOverlay} ${isOpen ? styles.active : ""}`}>
                        <div className="container">
                            <div className={styles.mobileMenuContent}>
                                <nav className={styles.mobileNav} aria-label="Mobile navigation">
                                    <ul className={styles.mobileNavList}>
                                        <li>
                                            <Link className={`${styles.mobileNavLink} ${isActive("/") ? styles.activeLink : ""}`} href="/" onClick={closeMenu}>
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className={`${styles.mobileNavLink} ${isActive("/games") ? styles.activeLink : ""}`} href="/games" onClick={closeMenu}>
                                                Games
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className={`${styles.mobileNavLink} ${isActive("/collection") ? styles.activeLink : ""}`} href="/collection" onClick={closeMenu}>
                                                Collection
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className={`${styles.mobileNavLink} ${isActive("#contacts") ? styles.activeLink : ""}`} href="#contacts" onClick={closeMenu}>
                                                Contacts
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>

                                <ul className={styles.mobileAuthList}>
                                    <li>
                                        <Link className={styles.mobileAuthLink} href="/login" onClick={closeMenu}>
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={styles.mobileAuthLink} href="/register" onClick={closeMenu}>
                                            Register
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}