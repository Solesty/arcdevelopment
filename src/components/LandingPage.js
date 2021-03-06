import React from 'react'
import Lottie from 'react-lottie'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import animationData from '../animations/landinganimation/data'
import customSoftwareIcon from '../assets/Custom Software Icon.svg'

import Grid from '@material-ui/core/Grid'
import { Button, Typography } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ButtonArrow from '../components/ui/ButtonArrow'

const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: '50em',
        minWidth: '21em',
        marginTop: '2em',
        marginLeft: '10%',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '30em'
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.arcOrange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    },
    buttonContainer: {
        marginTop: '1em'
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: '0.9rem',
        height: 45,
        width: 145
    },
    mainContainer: {
        marginTop: '5em',
        [theme.breakpoints.down('md')]: {
            marginTop: '3em'
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '2em'
        }
    },
    heroTextContainer: {
        minWidth: '21.5em',
        marginLeft: '1em',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0
        }
    },
    specialText: {
        fontFamily: 'Pacifico',
        color: theme.palette.common.arcOrange
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '0.7rem',
        height: 35,
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: '2em'
        }
    },
    subtitle: {
        marginBottom: '1em'
    },
    icon: {
        marginLeft: '2em',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop: '12em',
        [theme.breakpoints.down('sm')]: {
            padding: 25
        }
    }
}))

export default function LandingPage() {
    const classes = useStyles()
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

    const defaultOptions = { // react-lottie options
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRation: 'xMidMid slice'
        }
    }
    return (
        <Grid container direction='column' className={classes.mainContainer} >
            <Grid item> {/**----- Hero Block -----*/}
                <Grid container justify='flex-end' alignItems='center' direction='row'>
                    <Grid sm item className={classes.heroTextContainer} >
                        <Typography variant='h2' align='center'  >Bringing West Coast Technology<br />to the</Typography>
                        <Grid justify='center' container className={classes.buttonContainer} >
                            <Grid item>
                                <Button className={classes.estimateButton} variant='contained'>Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button className={classes.learnButtonHero} variant='outlined'>
                                    <span style={{ marginRight: 10 }} >Learn More</span>
                                    <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation}>
                        <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/**----- Services Block -----*/}
                <Grid container direction='row' className={classes.serviceContainer} justify={matchesSM ? 'center' : undefined} >
                    <Grid item style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }}  >
                        <Typography variant='h4' >Custom Software Development</Typography>
                        <Typography variant='subtitle1' className={classes.subtitle} >Save energy. Save Time. Save Money.</Typography>
                        <Typography variant='subtitle1' >Complete digital solutions, from investigation to{" "}<span className={classes.specialText} >celebration.</span></Typography>
                        <Button className={classes.learnButton} variant='outlined'> <span style={{ marginRight: 10 }} >Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue} />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} src={customSoftwareIcon} alt='Custom Software Icon' />>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}
