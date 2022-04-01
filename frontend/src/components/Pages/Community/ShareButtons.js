import {FacebookShareButton, TwitterShareButton, LinkedinShareButton} from "react-share";
import {FacebookIcon, TwitterIcon, LinkedinIcon} from "react-share";
import React from 'react';

const ShareButtons = (props) => {
    const link = "http://localhost:3000/community/" + props.post._id
    const title = props.post.title
    const summary = props.post.description

    return (
        <>
            <FacebookShareButton url={link} quote={title} hashtag="BCHub">
                <FacebookIcon size={32} round />
            </FacebookShareButton>

            <TwitterShareButton url={link} title={title} hashtags={["BCHub"]}>
                <TwitterIcon size={32} round />
            </TwitterShareButton>

            <LinkedinShareButton url={link} title={title} summary={summary} source={"BC Hub"}>
                <LinkedinIcon size={32} round />
            </LinkedinShareButton>
        </>
    );
}
 
export default ShareButtons;