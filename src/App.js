import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";
import Chats from "./components/Chats";
import ChatScreen from "./screens/ChatScreen";
import Signup from "./screens/Signup";


export default function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/signup">
                        <Signup/>
                    </Route>
                    <Route path="/chat/:person">
                        <Header backButton="/chat"/>
                        <ChatScreen/>
                    </Route>
                    <Route path="/chat">
                        <Header backButton="/"/>
                        <Chats/>
                    </Route>
                    <Route path="/">
                        <Header/>
                        <TinderCards/>
                        <SwipeButtons/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
