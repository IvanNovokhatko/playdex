'use client'

import Link from "next/link";
import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function onClickHandler(): void {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header className={styles.header}>
                <div className={`${styles.headerContainer} container`}>
                    <Link className={styles.logo} href="/">
                        PlayDex
                    </Link>

                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            <li>
                                <Link className={styles.navLink} href="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.navLink} href="/games">
                                    Games
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.navLink} href="/collection">
                                    Collection
                                </Link>
                            </li>
                            <li>
                                <Link className={styles.navLink} href="#contacts">
                                    Contacts
                                </Link>
                            </li>
                        </ul>

                    </nav>

                    <ul className={styles.authList}>
                        <li>
                            <Link className={styles.authLink} href="/login">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.authLink} href="/register">
                                Register
                            </Link>
                        </li>
                    </ul>

                    <button className={`${styles.burgerButton} ${isOpen ? styles.active : ''}`} type="button" onClick={onClickHandler}>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>    
                    </button>

                    <div className={`${styles.burgerMenuOverlay} ${isOpen ? styles.active : ''}`}>

                        <div className="container">
                            <div className={`${styles.mobileMenuContent}`}>
                                <nav className={styles.mobileNav}>
                                    <ul className={styles.mobileNavList}>
                                        <li>
                                            <Link className={styles.mobileNavLink} href="/">
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className={styles.mobileNavLink} href="/games">
                                                Games
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className={styles.mobileNavLink} href="/collection">
                                                Collection
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className={styles.mobileNavLink} href="#contacts">
                                                Contacts
                                            </Link>
                                        </li>
                                    </ul>

                                </nav>

                                <ul className={styles.mobileAuthList}>
                                    <li>
                                        <Link className={styles.mobileAuthLink} href="/login">
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={styles.mobileAuthLink} href="/register">
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
    )
}