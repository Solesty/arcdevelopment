import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

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
        height: '7em'
    },
    tabContainer: {
        marginLeft: 'auto' // push the children to the right side
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '25px' // we use pixel here to main a constant spacing hence we don't use rem (responsive unit)
    }
}))

export default function Header(props) {
    const classes = useStyles()
    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position='fixed' color='primary' >
                    {/* disableGutters remove padding around the component */}
                    <Toolbar disableGutters  >
                        <img src={logo} alt='company logo' className={classes.logo} />
                        <Tabs className={classes.tabContainer} >
                            <Tab className={classes.tab} label='Home' ></Tab>
                            <Tab className={classes.tab} label='Services' ></Tab>
                            <Tab className={classes.tab} label='Revolution' ></Tab>
                            <Tab className={classes.tab} label='About Us' ></Tab>
                            <Tab className={classes.tab} label='Contact Us' ></Tab>
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            {/* adds space between the appbar and the content below */}
            <div className={classes.toolbarMargin} ></div>
        </React.Fragment>
    )
}
