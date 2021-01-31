import React from 'react'
import Lottie from 'react-lottie'
import { makeStyles } from '@material-ui/core/styles'

import animationData from '../animations/landinganimation/data'

const useStyles = makeStyles(theme => ({

}))

export default function LandingPage() {
    const classes = useStyles()
    const defaultOptions = { // react-lottie options
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRation: 'xMidMid slice'
        }
    }
    return (
        <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
    )
}
