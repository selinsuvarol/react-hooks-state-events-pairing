import video from "../data/video.js";
import React from "react";
import { useState } from "react";
function App() {
  console.log("Here's your data:", video);
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  const [comments, setComments] = useState(false);

  const handleUpvote = ()=>{
    setUpvotes(upvotes+1);
  }
  const handleDownvote = ()=>{
    setDownvotes(downvotes-1);
  }
  function handleComments() {
    setComments(!comments);
  }
  return (
    <>
    <div className="App">
      <iframe
        width="300"
        height="100"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    </div>
    <div style={{margin:"auto", textAlign:"center"}}>
      <h1 style={{textAlign:"center"}}>{video.title}</h1>
      <p style={{textAlign:"center"}}>{video.views} views</p>
      <p style={{textAlign:"center"}}>{video.createdAt}</p>

      <button 
      style={{textAlign:"center"}}
      onClick={handleUpvote}>
        👍{upvotes} upvotes</button>
      <button 
      style={{textAlign:"center"}}
      onClick={handleDownvote}>
        👎{downvotes} downvotes</button>

      <p style={{textAlign:"center"}}>{video.comments.length} comments</p>

      <hr></hr>
      <button  onClick={handleComments}>
        {comments ? "Hide Comments" : "Show Comments"}
      </button>
        {comments && (
          <div>
            <p>
              {video.comments.map((comment) => (
                <div key={comment.id}>
                  <p>
                    <strong>{comment.user}</strong> commented:<hr></hr> {comment.comment}
                  </p>
                </div>
              ))}
            </p>
          </div>
        )}

    </div>
    </>
    
  );
}

export default App;
