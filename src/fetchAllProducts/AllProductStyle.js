import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    navbar: {
        marginBottom: "20px",
    },
    card: {
        height: '300px',
    },
    cardTitle: {
        minHeight: "30px",
        maxHeight: "70px",
        fontSize: '10px',
    },
    detailBtn: {
        alignSelf: "flex-end",
        justifySelf:"flex-end"
    },
    linkStyle: {
        textDecoration: "none",
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
    },
    marginBottom: {
        marginBottom: '30px'
    },
    cartIconWrapper:{
        position: 'relative'
    },
    items: {
        position: "absolute",
        top: '-8px',
        right: '25%',
        backgroundColor: 'red',
        padding: '5px',
        width: '10px',
        height: '10px',
        borderRadius: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
    },
    cartIcon: {
        marginRight: "20px"
    },
    detailPageToolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    iconAndBtnWrapper: {
        display: 'flex',
        alignItems: 'center'
    },
    yourCartWrapper: {
        display: 'flex',
        alignItems: 'center'
    },
    detailPageIconWrapper: {
        display: 'flex',
        alignItems: 'center'
    }
})
export default useStyles;