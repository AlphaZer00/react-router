import { Link } from "react-router-dom";

const DefaultProfile = () => {
    return (
        <>
            <p>Nothing to see here.</p>
            <Link to={"/"}>Click here to return</Link>
        </>
    );
};

export default DefaultProfile;
