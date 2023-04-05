import {Button, Container} from "react-bootstrap";
import "./home.css";

function homePage() {
    return (
        <>
            <div className={"landing-sect"}>
                <h1 className={"text-center"}>DocHair</h1>
                <div className={"hmpg-desc"}>Say goodbye to hair loss worries with Doc Hair – the revolutionary web app
                    that predicts hair fall like never before. Our advanced technology uses the latest scientific
                    research to analyze your hair and scalp, providing personalized insights into your hair health. Take
                    control of your hair and prevent hair fall before it even starts with Doc Hair. Try it now and
                    experience the future of hair care!
                </div>
                <h6>Your Favorite Trichologist</h6>
                <Button className={"butt-home"}>Try It</Button>

                <img src="/assets/images/home/beckam_home.png" className={"landing-img"} alt="home page img"/>
            </div>

            <div className={"second-sect"}>
                <Container>
                    <div className="black-bg"></div>
                    <h4>WELCOME TO DOC-HAIR!</h4>
                    <h5>Your Favorite Trichologist, Away From one Touch</h5>
                    <img src="/assets/images/home/sec-pg.png" className={"secpg-img"} alt="doctor-checking-hair"/>
                    <p className={"secPgDesc"}> "DOC-Hair" is a software solution designed to help individuals
                        identify
                        and track hair thinning and hair loss. The software uses advanced algorithms and machine
                        learning techniques to analyze images of the user's hair and provide detailed assessments of
                        the
                        current state of their hair. The program then suggests personalized solutions based on the
                        analysis, including products and treatments that have been shown to be effective in
                        promoting
                        hair growth and reducing hair loss.
                        Additionally, the software allows users to track their progress over time, providing them
                        with
                        detailed reports on their hair's health and the effectiveness of their chosen solutions.
                        Overall, "DOC-Hair" is an innovative and user-friendly tool that empowers individuals to
                        take
                        control of their hair health and achieve the results they desire.</p>
                    <Button className={"create-acc-home"} href={"/signup"}>Create an Account</Button>
                    <h2>What features does this application bring?</h2>
                </Container>
            </div>
            <Container>
                <div className="image-grid">
                    <div className="image-placeholder">
                        <img src="/assets/images/home/blue-hud-ui-hologram-human-hair.png" alt="img1"/>
                    </div>
                    <div className="image-placeholder">
                        <img src="/assets/images/home/Medicine-Delivery-img.png" alt="img1"/>
                    </div>
                    <div className="image-placeholder">
                        <img src="/assets/images/home/customer-care.png" alt="img1"/>
                    </div>
                </div>
                <div className={"l-para"}><p className={"last-para"}>Our new app is designed to make healthcare more
                    convenient. IN THIS APP There is a scanning feature,. The
                    prescribing feature allows you to receive electronic prescriptions from your healthcare provider,
                    eliminating the need to visit the pharmacy in person. And if you have any questions or concerns, you
                    can
                    easily talk to one of our agents, getting the support you need anytime, anywhere. Try our
                    app today and
                    take control of your healthcare! USE DOC- HAIR! PROTECT YOUR HAIR!</p></div>
            </Container>
            {/*        <Footer className={"footer-homePG"}/>*/}
        </>
    );
}

export default homePage;