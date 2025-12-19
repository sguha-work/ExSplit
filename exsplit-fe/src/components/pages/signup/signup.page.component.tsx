import SignupFormComponent from '../../utilities/signup-form/signup-form.component';
import './signup.page.component.css';

function SignupPageComponent() {
    return (
        <main className="signup-page-container">
            <div className="signup-card">
                <header className="signup-header">
                    <h1>Sign up to get started with ExSplit</h1>
                </header>
                <SignupFormComponent />
            </div>
        </main>
    );
}

export default SignupPageComponent;

