import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import logo from '../../assets/logo.svg'
import { IconButton } from '@material-ui/core';

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '3em',
        [theme.breakpoints.down('md')]: {
            marginBottom: '2em'
        }, [theme.breakpoints.down('xs')]: {
            marginBottom: '1.25em'
        },
    },
    logo: {
        height: '8em',
        [theme.breakpoints.down('md')]: {
            'height': '7em'
        },
        [theme.breakpoints.down('xs')]: { // mobile phones 600 below
            'height': '5.5em'
        }
    },
    tabContainer: {
        marginLeft: 'auto' // push the children to the right side
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '25px' // we use pixel here to main a constant spacing hence we don't use rem (responsive unit)
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: '30px',
        marginRight: '25px',
        marginLeft: '25px',
        height: '45px',
    },
    logoContainer: {
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    menu: {
        backgroundColor: theme.palette.common.arcBlue,
        color: 'white',
        borderRadius: 0
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        '&:hover': {
            'opacity': 1
        }
    },
    drawIcon: {
        height: '50px',
        width: '50px'
    },
    drawerIconContainer: {
        marginLeft: 'auto',
        '&;hover': {
            backgroundColor: 'transparent',
        }
    },
    drawer: {
        backgroundColor: theme.palette.common.arcBlue,
    },
    drawerItem: {
        ...theme.typography.tab,
        color: 'white',
        opacity: 0.7
    },
    drawItemEstimate: {
        backgroundColor: theme.palette.common.arcOrange
    },
    drawItemSelected: {
        '& .MuiListItemText-root': {
            opacity: 1
        },
    },
    appBar: {
        zIndex: theme.zIndex.modal + 1
    }
}))


export default function Header(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMediumAndBelow = useMediaQuery(theme.breakpoints.down('md')) //medium and below

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer, setOpenDrawer] = useState(false)

    const [anchorEl, setAnchorEl] = useState(null)
    const [openMenu, setOpenMenu] = useState(false)

    const handleChange = (e, newValue) => {
        props.setValue(newValue)
    }

    const handleMenuItemClick = (e, index) => {
        setAnchorEl(null)
        setOpenMenu(false)
        props.setSelectedIndex(index)
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        setOpenMenu(true)
    }

    const handleClose = (e) => {
        setAnchorEl(null)
        setOpenMenu(false)
    }

    const menuOptions = [
        { name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0 },
        { name: 'Custom Software Development', link: '/customsoftware', activeIndex: 1, selectedIndex: 1 },
        { name: 'Mobile App Development', link: '/mobileapps', activeIndex: 1, selectedIndex: 3 },
        { name: 'Website Development', link: '/websites', activeIndex: 1, selectedIndex: 4 },
    ]
    const routes = [
        { name: 'Home', link: '/', activeIndex: 0 },
        {
            name: 'Services', link: '/services', activeIndex: 1,
            ariaOwns: anchorEl ? 'simple-menu' : undefined,
            ariaPopup: anchorEl ? 'true' : undefined,
            mouseOver: (event) => handleClick(event)
        },
        { name: 'Revolution', link: '/revolution', activeIndex: 2 },
        { name: 'About Us', link: '/about', activeIndex: 3 },
        { name: 'Contact', link: '/contact', activeIndex: 4 },
    ]

    // a use effect to highlight the active menu on the page
    // use one use effect for one particular thing? 
    useEffect(() => {
        // code we want to run anytime a component updates

        [...menuOptions, ...routes].forEach((route => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (props.value !== route.activeIndex) {
                        // check the current url and set the approviate value
                        props.setValue(route.activeIndex)
                        if (route.selectedIndex && route.selectedIndex !== props.selectedIndex) {
                            props.setSelectedIndex(route.selectedIndex)
                        }
                    }
                    break
                default:
                    break
            }
        }))


    }, [props.value, menuOptions, props.selectedIndex, routes]) // we are depending on this state value

    const tabs = (
        <React.Fragment>
            <Tabs onChange={handleChange} value={props.value} className={classes.tabContainer} >
                {
                    routes.map((route, index) => {
                        return <Tab key={`route${index}`} component={Link} to={route.link} className={classes.tab} label={route.name}
                            aria-owns={route.ariaOwns}
                            aria-haspopup={route.ariaPopup}
                            onMouseOver={route.mouseOver}
                        ></Tab>
                    })
                }
            </Tabs>
            <Button variant='contained' color='secondary' className={classes.button} >
                Free Estimate
        </Button>
            <Menu id='simple-menu' anchorEl={anchorEl}
                open={openMenu} onClose={handleClose}
                classes={{ paper: classes.menu }}
                style={{ zIndex: 1302 }}
                MenuListProps={{ onMouseLeave: handleClose }}
                elevation={0}
                keepMounted
            >
                {
                    menuOptions.map((option, index) => {
                        return <MenuItem
                            key={`${option}${index}`}
                            onClick={(e) => { handleMenuItemClick(e, index); props.setValue(1); handleClose(); }}
                            component={Link}
                            classes={{ root: classes.menuItem }}
                            to={option.link}
                            selected={index === props.selectedIndex && props.value === 1}
                        >
                            {option.name}
                        </MenuItem>
                    })
                }
            </Menu>
        </React.Fragment>
    )
    const drawer = (
        <React.Fragment>
            <SwipeableDrawer disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer} onOpen={() => setOpenDrawer(true)} onClose={() => setOpenDrawer(false)}
                classes={{ paper: classes.drawer }}
            >
                <div className={classes.toolbarMargin} ></div>
                <List disablePadding >
                    {
                        routes.map((route, index) => {
                            return <ListItem
                                key={`route${route.activeIndex}`}
                                onClick={() => { setOpenDrawer(false); props.setValue(route.activeIndex) }}
                                divider button
                                component={Link}
                                to={route.link}
                                selected={props.value === route.activeIndex}
                                classes={{ selected: classes.drawerItemSelected }}
                            >
                                <ListItemText className={classes.drawerItem} disableTypography >{route.name}</ListItemText>
                            </ListItem>
                        })
                    }
                    <ListItem className={{ root: classes.drawItemEstimate, selected: classes.drawerItemSelected }} onClick={() => { setOpenDrawer(false); props.setValue(5) }} divider button component={Link} to='/estimate' selected={props.value === 5} >
                        <ListItemText className={classes.drawerItem} disableTypography >Free Estimate</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple className={classes.drawerIconContainer} >
                <MenuIcon className={classes.drawIcon} />
            </IconButton>
        </React.Fragment>
    )
    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position='fixed' color='primary' className={classes.appBar} >
                    {/* disableGutters remove padding around the component */}
                    <Toolbar disableGutters  >
                        <Button
                            disableRipple
                            onClick={() => {
                                props.setValue(0)
                            }} component={Link} to='/' className={classes.logoContainer} >
                            <img src={logo} alt='company logo' className={classes.logo} />
                        </Button>
                        {matchesMediumAndBelow ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            {/* adds space between the appbar and the content below */}
            <div className={classes.toolbarMargin} ></div>
        </React.Fragment >
    )
}
