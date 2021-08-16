import '../App.css';
import SideMenu from './SideMenu.js';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Header from './Header.js';

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {

  const classes = useStyles();

  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
