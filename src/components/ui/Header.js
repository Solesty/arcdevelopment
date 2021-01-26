import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'

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
        marginBottom: '3em'
    },
    logo: {
        height: '8em'
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
    }
}))


export default function Header(props) {
    const classes = useStyles()
    const [value, setValue] = useState(0)

    const handleChange = (e, value) => {
        setValue(value)
    }

    // a user effect to highlight the active menu on the page
    // use one use effect for one particular thing? 
    useEffect(() => {
        // code we want to run anytime a component updates

        // check the current url and set the approviate value
        if (window.location.pathname === '/' && value !== 0) {
            setValue(0)
        } else if (window.location.pathname === '/services' && value !== 1) {
            setValue(1)
        } else if (window.location.pathname === '/revolution' && value !== 2) {
            setValue(2)
        } else if (window.location.pathname === '/about' && value !== 3) {
            setValue(3)
        } else if (window.location.pathname === '/contact' && value !== 4) {
            setValue(4)
        } else if (window.location.pathname === '/estimate' && value !== 5) {
            setValue(5)
        }
    }, [value]) // we are depending on this state value

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position='fixed' color='primary' >
                    {/* disableGutters remove padding around the component */}
                    <Toolbar disableGutters  >
                        <Button
                            disableRipple
                            onClick={() => {
                                setValue(0)
                            }} component={Link} to='/' className={classes.logoContainer} >
                            <img src={logo} alt='company logo' className={classes.logo} />
                        </Button>
                        <Tabs onChange={handleChange} value={value} className={classes.tabContainer} >
                            <Tab component={Link} to='/' className={classes.tab} label='Home' ></Tab>
                            <Tab component={Link} to='/services' className={classes.tab} label='Services' ></Tab>
                            <Tab component={Link} to='/revolution' className={classes.tab} label='Revolution' ></Tab>
                            <Tab component={Link} to='/about' className={classes.tab} label='About Us' ></Tab>
                            <Tab component={Link} to='/contact' className={classes.tab} label='Contact Us' ></Tab>
                        </Tabs>
                        <Button variant='contained' color='secondary' className={classes.button} >
                            Free Estimate
                        </Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            {/* adds space between the appbar and the content below */}
            <div className={classes.toolbarMargin} ></div>
        </React.Fragment >
    )
}
