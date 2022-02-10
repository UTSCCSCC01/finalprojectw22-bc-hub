import React, {Component} from 'react';
import ShowMoreText from "react-show-more-text";

// ...

class Foo extends Component {
    executeOnClick(isExpanded) {
        console.log(isExpanded);
    }

    render() {
        return (
            <ShowMoreText
                /* Default options */
                lines={3}
                more="Show more"
                less="Show less"
                className="content-css"
                anchorClass="my-anchor-css-class"
                onClick={this.executeOnClick}
                expanded={false}
                width={280}
                truncatedEndingComponent={"... "}
            >
                Lorem ipsum dolor sit amet, consectetur{" "}
                <a
                    href="https://www.yahoo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    yahoo.com
                </a>{" "}
                adipiscing elit, sed do eiusmod tempor incididunt
                <a
                    href="https://www.google.bg/"
                    title="Google"
                    rel="nofollow"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    www.google.bg
                </a> ut labore et dolore magna amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </ShowMoreText>
        );
    }
}

export default Foo;