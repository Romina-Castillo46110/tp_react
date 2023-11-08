
const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-light p-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h4>Company Name</h4>
                        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                    </div>
                    <div className="col-md-6">
                        <h4>Contact Us</h4>
                        <address>
                            123 Main Street<br />
                            City, State, ZIP<br />
                            <a href="mailto:contact@example.com">contact@example.com</a>
                        </address>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;