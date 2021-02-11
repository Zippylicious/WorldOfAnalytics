import React, {Component} from 'react';
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, makeStyles, Button } from "@material-ui/core";
import './footer.css';

export default function Footer() {

	const headerList = [
		{
			label: "About",
			href: "/"
		},
		{
			label: "Books",
			href: "/books"
		},
		{
			label: "Blog",
			href: "/blog"
		},
		{
			label: "Stuff I Share",
			href: "/share"
		},
		{
			label: "Speaking Engagements",
			href: "/engagements"
		},
		{
			label: "Contact",
			href: "/contact"
		}
	]

	const getHeaderList = () => {
		return headerList.map(( { label, href }) => {
			return (
	    <Button
	      {...{
	        key: label,
	        color: "inherit",
	        to: href,
	        component: RouterLink,
	      }}
	      className="footerItem"
	      >

	      {label}

	    </Button>
	  ); 
		});
	};

	return (
		<div className="footer">
			<div className="footerItems">
				{getHeaderList()}
			</div>
		</div>
	);
}