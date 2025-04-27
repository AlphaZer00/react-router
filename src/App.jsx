import "./App.css";
import { Link } from "react-router-dom";
import ProfileSelector from "./components/ProfileSelector";

function App() {
    return (
        <div>
            <h1>Hello from the main page of the App!</h1>
            <p>Here are some examples of links to other pages:</p>
            <nav>
                <ul>
                    <li>
                        <Link to="profile">Profile Page</Link>
                    </li>
                    <li>
                        <Link to="content">Content Page</Link>
                    </li>
                </ul>
            </nav>

            <ProfileSelector></ProfileSelector>
        </div>
    );
}

export default App;
