import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60'

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