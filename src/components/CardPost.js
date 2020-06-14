import React, { Component } from 'react';
import '../assets/css/CardPost.css'
import img from "../assets/images/blog-1.jpg"
class CardPost extends Component {
    render() {
        return (
            <div className="post">
                <div className="post-thumbnail">
                    <a href="post.html">
                        <img src={img} alt="..." className="img-fluid"/>
                    </a>
                </div>
                <div className="post-details">
                <div className="post-meta d-flex justify-content-between">
                    <div className="date">20 May | 2016</div>
                    <div className="category"><a href="#">Business</a></div>
                </div><a href="post.html">
                    <h3 class="h4">Ways to remember your important ideas</h3></a>
                <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
          </div>
        );
    }
}

export default CardPost;