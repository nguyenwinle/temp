/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import * as React from "react";
import { mq } from "../../lib/breakpoints";
import LeftSmallAdornment from "./LeftSmallAdornment"
import RightSmallAdornment from "./RightSmallAdornment"
import TedLogo from "./TedLogo";
import styles from './css/header.module.css';

const Header = () => {
	return (
		<div className={styles.header}>
			<img className={styles.leftLogo} src={require('./images/leftFrame.png')} alt="logo" />
			<img className={styles.middleLogo} src={require('./images/middleFrame.png')}alt="logo" />
			<img className={styles.rightLogo} src={require('./images/rightFrame.png')} alt="logo" />
		</div>
	);
};

export default Header;