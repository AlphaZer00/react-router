import { useParams } from "react-router-dom";
import Spinach from "./Spinach";
import Popeye from "./Popeye";
import DefaultProfile from "./DefaultProfile";
import ProfileSelector from "./ProfileSelector";

const Profile = () => {
    const { name } = useParams();

    return (
        <div>
            <h1>Hello from the profile page!</h1>
            <p>How are you?</p>
            <hr />
            <h2>The profile visited is here:</h2>
            {name === "popeye" ? (
                <Popeye />
            ) : name === "spinach" ? (
                <Spinach />
            ) : (
                <DefaultProfile />
            )}

            <hr />
            <ProfileSelector></ProfileSelector>
        </div>
    );
};

export default Profile;
