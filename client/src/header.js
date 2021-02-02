import { AppBar, Toolbar, Typography, makeStyles, Button } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC"
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left"
  },
  headerItem: {
  	fontFamily: "Open Sans, sans-serif",
  	fontWeight: 700,
  	size: "18px",
  	marginLeft: "38px"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

const headerList = [
	{
		label: "About",
		href: "/about"
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

export default function Header() {

  const { header, logo, headerItem, toolbar } = useStyles();

  const displayDesktop = () => {
    return (
    	<Toolbar className= { toolbar } >
    		{headerLogo}
    		<div>{getHeaderList()}</div>
    	</Toolbar>
    );
  };

  const headerLogo = (
  	<Typography variant="h6" component="h1" className={logo}>
  		World of Analytics
  	</Typography>
  );

  const getHeaderList = () => {
  	return headerList.map(( { label, href }) => {
  		return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: headerItem
          }}>

          {label}

        </Button>
      ); 
  	});
  };
  
  return (
    <header>
      <AppBar className= { header } >{displayDesktop()}</AppBar>
    </header>
  );

}