import React from "react";
import Article from "./Article";
import Video from "./Video";
import withHighlight from "./WithHighlight";

export default function List(props) {
    const HighlightedVideo = withHighlight(Video);
    const HighlightedArticle = withHighlight(Article); 

    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <HighlightedVideo {...item} />
                );

            case 'article':
                return (
                    <HighlightedArticle {...item} />
                );
        }
    });
};
