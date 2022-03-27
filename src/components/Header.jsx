import {Forum, Person} from "@material-ui/icons";
import {IconButton} from '@material-ui/core';
import {Link, useHistory} from "react-router-dom";
import {ArrowBackIos} from "@material-ui/icons";

function Header({backButton}) {
    const history = useHistory();

    return (
        <div className="flex justify-between align-middle border-b-2 ">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIos fontSize="large" className="m-5"/>
                </IconButton>
            ) : (
                <IconButton>
                    <Person fontSize="large" className="m-5"/>
                </IconButton>
            )}
            <Link to="/">
                <img className="h-10 my-7 " src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg" alt="tinder logo"/>
            </Link>
            <Link to="/chat">
                <IconButton>
                    <Forum fontSize="large" className="m-5"/>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header;
