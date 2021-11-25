import React from 'react'
import Title from "../Title";
export default function Contact() {
    return ( 
    <section className="py-5">
        <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="Contact us"/>
        <form className="mt-5" 
        action="https://formspree.io/stancilyasmir@gmail.com" method="post">
            {/* first */}
            <div className="form-group">
            <input 
            type="text"
            name="firstName"
            className="form-control"
            placeholder="john smith"
            />
            </div>
            {/* email */}
            <div className="form-group">
            <input 
            type="email"
            name="email"
            className="form-control"
            placeholder="john123@aol.com"
            />
            </div>
            {/* subject */}
            <div className="form-group">
            <input 
            type="text"
            name="subject"
            className="form-control"
            placeholder="important!!"
            />
            </div>
            {/* message */}
            <div className="form">
            <textarea name="messaage"
            className="form-control" rows="10"
            placeholder="hello there text"></textarea>
            </div>
            {/* submit */}
            <div className= "form-group mt-3">
                <input type="submit" value="Send"
                className="form=control bg-primary text-white"/>
            </div>
        </form>
        </div>
        </div>
    </section>
        
    )
};
