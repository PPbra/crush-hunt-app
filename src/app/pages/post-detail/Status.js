import React from "react";
import ListCommentPostDetails from "./ListCommentPostDetails.js";

class Status extends React.Component {
    state = {
        numberOfComments: 7
    }
    loadMoreComment = () => {
        this.setState({numberOfComments: this.state.numberOfComments + 7});
    }
    render() {
        const commentArray = this.props.comment.map((text, i) => {
           return <ListCommentPostDetails key={"key" + i}
                comment={text} />
                                                                                        
        });
        const displayComment = [];
        for(let i = commentArray.length - this.state.numberOfComments ;i < commentArray.length ;i++){
                 displayComment.push(commentArray[i]);
        }
        const loadCommentElement = (this.props.comment.length > this.state.numberOfComments) ? 
        <span onClick={this.loadMoreComment}>View more comments</span> : null ;
        return (
            <div className="status">
                {loadCommentElement}
                <ul className="list">
                    {displayComment}
                </ul>
            </div>
        )
    }
}

export default Status;