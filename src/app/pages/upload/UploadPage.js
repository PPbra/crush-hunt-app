import React, {Component} from "react";
import PropTypes from "prop-types";

import "./UploadPage.css"

class UploadPage extends Component {
    render() {
        return (
            <div className="UploadPage">
                <section className="Upload">

                    <div className="content">
                        <div className="header">
                            <h2>Upload Your Crush</h2>
                        </div>
                        <img className="thumb" src="https://3.bp.blogspot.com/-tw-rSrfdYq8/V44qWz9DezI/AAAAAAAAAtQ/a_h_avH6RKEwnfN9KNAjarW5bybcilnowCLcB/s640/hinh-anh-girl-xinh-de-thuong-12.jpg" sizes="614px" />

                        <form>
                            <input className="link" placeholder="Link ảnh"/>

                            <button className="link_button">Browse</button>
                            <br/>
                            <div>
                                <button className="border">
                                    <svg viewBox="0 0 18 18">
                                        <path  d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"/>
                                        <path  d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"/>
                                    </svg>
                                </button>
                                <button className="italic" type="button">
                                    <svg viewBox="0 0 18 18">
                                        <line  x1="7" x2="13" y1="4" y2="4"/>
                                        <line  x1="5" x2="11" y1="14" y2="14"/>
                                        <line  x1="8" x2="10" y1="14" y2="4"/>
                                    </svg>
                                </button>



                                <button className="ql-smiley" type="button">
                                    <svg viewBox="0 0 18 18">
                                        <circle className="ql-fill" cx="7" cy="7" r="1"/>
                                        <circle className="ql-fill" cx="11" cy="7" r="1"/>
                                        <path className="ql-stroke" d="M7,10a2,2,0,0,0,4,0H7Z"/>
                                        <circle className="ql-stroke" cx="9" cy="9" r="6"/>
                                    </svg>
                                </button>
                                <input id="caption" placeholder="Nói gì đó về bức ảnh"/>
                                <br/>
                            </div>


                            <button id="post" className="button_form" type="submit">Đăng Ảnh</button>
                        </form>
                    </div>

                    <div className="inforUser">

                        <span>
                        <img className="Avatar" src="http://sohanews.sohacdn.com/thumb_w/660/2017/photo1486969199024-1486969199175-0-32-308-529-crop-1486969281069.jpg" sizes="100px"/>
                            <p>TenNguoiDung</p>
                        </span>
                    </div>
                </section>
            </div>

        );
    }
}

export default UploadPage;