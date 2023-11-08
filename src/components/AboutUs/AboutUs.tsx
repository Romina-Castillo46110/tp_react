const AboutUs: React.FC = () => {
    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut metus nec libero vehicula rhoncus. Sed in justo sit amet urna vestibulum euismod. Nullam at condimentum libero, sit amet malesuada arcu. Vivamus nec facilisis tortor. Sed eu justo at dolor lacinia tristique.</p>
                    </div>
                    <div className="col-md-6">
                        <img src="src/assets/images/aboutus.jpg" alt="About Us" className="img-fluid" style={{ width: "300px", height: "200px" }}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;