import React, { Component } from 'react';
import imgHero from "../assets/images/hero.jpg"
import "../assets/css/Home.css"
import CardPost from '../components/CardPost';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <section className="hero">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7">
                                <h1>Nhat Minh's Blog - Interesting content for you on all topics in life.</h1><a href="#" className="hero-link">Discover More</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="intro">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8">
                                <h2>Welcome to my blog!</h2>
                                <p>Place a nice <strong>introduction</strong> here <strong>to catch reader's attention</strong>. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderi.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="latest-posts"> 
                    <div class="container">
                        <header> 
                        <h2>Latest from the blog</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </header>
                        <div class="row">
                            <div className="col-md-3">
                                <CardPost />
                            </div>
                            <div className="col-md-3">
                                <CardPost />
                            </div>
                            <div className="col-md-3">
                                <CardPost />
                            </div>
                            <div className="col-md-3">
                                <CardPost />
                            </div>
                        </div>
                    </div>
                </section>

                <section class="newsletter">    
                    <div class="container">
                        <div class="row">
                        <div class="col-md-6">
                            <h2>Subscribe to Newsletter</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div class="col-md-8">
                            <div class="form-holder">
                            <form action="#">
                                <div class="form-group">
                                <input type="email" name="email" id="email" placeholder="Type your email address" />
                                <button type="submit" class="submit">Subscribe</button>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;