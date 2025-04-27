import { Outlet } from "react-router-dom";

const Profile = () => {
    return (
        <div>
            <h1>Hello from thr profile page!</h1>
            <p>How are you?</p>
            <hr />
            <h2>The profile visited is here:</h2>
            <Outlet />
        </div>
    );
};

export default Profile;
