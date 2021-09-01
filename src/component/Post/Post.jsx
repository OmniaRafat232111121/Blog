import React from 'react'
import { Link } from "react-router-dom";
import './Post.css'
export default function Post({ img }) {
    return (
        <div className="Post">
            <img
                className="PostImg"
                src={img}
                alt=""
            />
            <div className="PostInfo">
                <div className="PostCats">
                    <span className="PostCat">
                        <Link className="link" to="/posts?cat=Music">
                            Music
                        </Link>
                    </span>
                    <span className="PostCat">
                        <Link className="link" to="/posts?cat=Music">
                            Life
                        </Link>
                    </span>


                    <span className="PostTitle">
                        <Link to="/post/abc" className="link">
                          Natural color </Link>
                    </span>
                    <hr />
                    <span className="PostDate">1 hour ago</span>
                </div>
                <p className="PostDesc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                    officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                    fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione

                </p>
            </div>
        </div>



    )
}
