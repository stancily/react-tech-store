import React from 'react';
import Title from '../Title';
import aboutBcg from '../../images/aboutBcg.jpeg';

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
            <div className="row">
            <div className= "col-10 mx-auto col-md-6 my-3">
            <img src={aboutBcg} className="img-fluid  img-thubnail"
            alt="about company"
            style={{background: "var(--darkGrey"}} />
            </div>
            <div className= "col-10 mx-auto col-md-6 my-3">
            <Title title="about us" center/>
            <p className="text-lead text-muted my-3"> 
            fusbdcdvc cbdhjnx  djncsdnc dnc osc aiu9hdn 
            vfbdkjm sklcmd yerbfc sguvd usp poed inkd
            </p>
            <p className="text-lead text-muted my-3"> 
            fusbdcdvc cbdhjnx  djncsdnc dnc osc aiu9hdn 
            vfbdkjm sklcmd yerbfc sguvd usp poed inkd
            </p>
            <button className="main-link"
            type="button" style={{marginTop: "2rem"}}>
                more Info
            </button>
            </div>
            </div>
            </div>
        </section >

    
    );
}
