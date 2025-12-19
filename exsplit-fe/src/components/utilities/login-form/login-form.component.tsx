import './login-form.component.css';

function LoginFormComponent() {
    return (
        <form className="login-form" noValidate>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="form-input"
                />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    className="form-input"
                />
            </div>

            <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                    Sign In
                </button>
            </div>

            <div className="form-footer">
                <a href="#forgot-password" className="forgot-password-link">
                    Forgot password?
                </a>
                <span className="footer-separator">•</span>
                <span className="footer-text">Don't have an account?</span>
                <a href="#/signup" className="signup-link">
                    Sign Up
                </a>
            </div>
        </form>
    );
}

export default LoginFormComponent;

