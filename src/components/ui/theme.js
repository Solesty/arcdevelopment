import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60'
const arcGrey = '#H6H6H6'

export default createMuiTheme({
    palette: {
        common: {
            arcBlue: `${arcBlue}`,
            arcOrange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
        tab: {
            fontFamily: 'Raleway',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '1rem',
        },
        estimate: {
            fontFamily: 'Pacifico',
            fontSize: '1rem',
            color: 'white',
            textTransform: 'none',
        },
        h2: {
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: '2.5rem',
            color: `${arcBlue}`,
            lineHeight: 1.5
        },
        h4: {
            fontFamily: 'Raleway',
            fontSize: '1.75rem',
            color: `${arcBlue}`,
            fontWeight: 700
        },
        subtitle1: {
            fontSize: '1.25rem',
            fontWeight: 300,
            color: `${arcGrey}`
        },
        learnButton: {
            borderColor: arcBlue,
            color: arcBlue,
            borderWidth: 2,
            textTransform: 'none',
            borderRadius: 50,
            fontFamily: 'Roboto',
            fontWeight: 'bold',
        }
    }
})

// const theme = createMuiTheme({
//     palette: {
//         primary: {
//             main: purple[500],
//         },
//         secondary: {
//             main: green[500],
//         },
//     },
// });