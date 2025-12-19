import LoginFormComponent from '../../utilities/login-form/login-form.component';
import './login.page.component.css';

function LoginPageComponent() {
    return (
        <main className="login-page-container">
            <div className="login-card">
                <header className="login-header">
                    <h1>Welcome to ExSplit</h1>
                </header>
                <LoginFormComponent />
            </div>
        </main>
    );
}

export default LoginPageComponent;

