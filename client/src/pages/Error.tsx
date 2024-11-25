const Error = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="text-center">
                <h1 className="display-1 text-danger">404</h1>
                <h3 className="text-muted">Oops! Page Not Found</h3>
                <p className="lead">
                    The page you're looking for might have been removed or is temporarily unavailable.
                </p>
                <a href="/" className="btn btn-primary">
                    Go Back to Homepage
                </a>
            </div>
        </div>
    );
};

export default Error;
