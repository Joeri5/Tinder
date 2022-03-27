import {Replay, Close, StarRate, Favorite, FlashOn} from "@material-ui/icons"
import {IconButton} from '@material-ui/core';

function SwipeButtons() {
    return (
        <div className="fixed flex bottom-10vh w-full justify-evenly ">
            <IconButton className="bg-white shadow-button">
                <Replay fontSize="large" htmlColor={"#f5b748"}/>
            </IconButton>
            <IconButton className="bg-white shadow-button">
                <Close fontSize="large" htmlColor={"#ec5e6f"}/>
            </IconButton>
            <IconButton className="bg-white shadow-button">
                <StarRate fontSize="large" htmlColor={"#62b4f9"}/>
            </IconButton>
            <IconButton className="bg-white shadow-button">
                <Favorite fontSize="large" htmlColor={"#76e2b3"}/>
            </IconButton>
            <IconButton className="bg-white shadow-button">
                <FlashOn fontSize="large" htmlColor={"#915dd1"}/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons;