import { Link } from "react-router-dom";

const Content = () => {
    return (
        <div>
            <p>
                Here is some content. This is sample content for the main page.
                Perhaps an article or a blog feed.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
                odio id tellus rutrum pharetra sed eget elit. Donec blandit
                metus vel enim auctor blandit. Aliquam tempor suscipit justo,
                eget maximus metus posuere vitae. Proin rutrum hendrerit congue.
                Sed quam ipsum, egestas at placerat eget, posuere non ex. Sed
                ullamcorper elementum nisi, sed varius magna bibendum in. Nunc
                fermentum dolor sed nibh gravida tristique. Mauris luctus
                aliquet metus, sed tristique metus placerat eget. Pellentesque
                non scelerisque sapien. Pellentesque aliquam rhoncus risus,
                vitae pulvinar nunc pulvinar quis. Sed quis cursus mi. Nunc quis
                faucibus odio.
            </p>
            <Link to="/">Return to home page by clicking here.</Link>
        </div>
    );
};

export default Content;
