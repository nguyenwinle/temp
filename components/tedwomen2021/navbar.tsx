import React from 'react';
import styles from './css/navbar.module.css';
import Link from 'next/link'

export const Navbar = ({selected}) => {

    let pageSelect = ["","","",""];
    if (selected === "home") {
      pageSelect[0] = styles.selected;
    } else if (selected === "program") {
      pageSelect[1] = styles.selected;
    } else if (selected === "speakers") {
      pageSelect[2] = styles.selected;
    }else if (selected === "partners") {
      pageSelect[3] = styles.selected;
    }
    
    return (
      <nav className={styles.navbar}>  
        <div>
        <Link href="/"><a className={pageSelect[0]}>Home</a></Link>
        <Link href="/tedwomen2021/program"><a className={pageSelect[1]}>Program</a></Link>
        <Link href="/tedwomen2021/speakers"><a className={pageSelect[2]}>Speakers</a></Link>
        <Link href="/tedwomen2021/partners"><a className={pageSelect[3]}>Partners</a></Link>
          {/* <ul>
            <li><a href="default.asp">Home</a></li>
            <li><a href="news.asp">Program</a></li>
            <li><a href="contact.asp">Speakers</a></li>
            <li><a href="about.asp">Partners</a></li>
          </ul> */}
        </div>
      </nav>
    )
}