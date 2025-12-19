import './signup-form.component.css';

function SignupFormComponent() {
    return (
        <form className="signup-form" noValidate>
            <div className="form-section">
                <div className="form-group">
                    <label htmlFor="name">
                        Name <span className="required">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        className="form-input"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">
                        Email <span className="required">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className="form-input"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">
                        Password <span className="required">*</span>
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        className="form-input"
                        required
                    />
                </div>
            </div>

            <div className="form-section">
                <div className="form-row form-row-three">
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Enter your city"
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            placeholder="Enter your state"
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            placeholder="Enter your country"
                            className="form-input"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Enter your address"
                        className="form-input"
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="zip">Zip Code</label>
                        <input
                            type="text"
                            id="zip"
                            name="zip"
                            placeholder="Enter zip code"
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mobile">Mobile</label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            placeholder="Enter mobile number"
                            className="form-input"
                        />
                    </div>
                </div>
            </div>

            <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                    Sign Up
                </button>
            </div>

            <div className="form-footer">
                <span className="footer-text">Already have an account?</span>
                <a href="#/" className="signin-link">
                    Sign In
                </a>
            </div>
        </form>
    );
}

export default SignupFormComponent;

