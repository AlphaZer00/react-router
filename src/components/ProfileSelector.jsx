import { Link } from "react-router-dom";

const ProfileSelector = () => {
    return (
        <div>
            <h1>Select a profile</h1>
            <br />
            <Link to="/profile/popeye">Popeye</Link>
            <br />
            <Link to="/profile/spinach">Spinach"</Link>
            <br />
            <Link to="/profile">Default Profile</Link>
        </div>
    );
};

export default ProfileSelector;
