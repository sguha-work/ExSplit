import firebaseService from '../core/firebase.service';
import type User from '../../interfaces/user.interface';
import type { SignupData, LoginData } from '../../interfaces/auth.interface';
import { COLLECTIONS } from '../../constants/collections.constant';

class AuthService {
    private static instance: AuthService;
    private readonly COLLECTION_NAME = COLLECTIONS.USER;

    private constructor() {
        // Private constructor to enforce singleton pattern
    }

    /**
     * Get the singleton instance of AuthService
     */
    public static getInstance(): AuthService {
        if (!AuthService.instance) {
            AuthService.instance = new AuthService();
        }
        return AuthService.instance;
    }

    /**
     * Hash a password using Web Crypto API (SHA-256)
     * @param password Plain text password
     * @returns Promise resolving to hashed password (hex string)
     */
    private async hashPassword(password: string): Promise<string> {
        try {
            // Encode password as UTF-8
            const encoder = new TextEncoder();
            const data = encoder.encode(password);

            // Hash the password using SHA-256
            const hashBuffer = await crypto.subtle.digest('SHA-256', data);

            // Convert hash buffer to hex string
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

            return hashHex;
        } catch (error) {
            console.error('Error hashing password:', error);
            throw new Error('Failed to hash password');
        }
    }

    /**
     * Verify a password against a hash
     * @param password Plain text password
     * @param hash Hashed password to compare against
     * @returns Promise resolving to true if passwords match, false otherwise
     */
    private async verifyPassword(password: string, hash: string): Promise<boolean> {
        try {
            const hashedPassword = await this.hashPassword(password);
            return hashedPassword === hash;
        } catch (error) {
            console.error('Error verifying password:', error);
            return false;
        }
    }

    /**
     * Generate a numeric ID for the user
     * This is a simple implementation - in production, consider using a more robust ID generation
     * @returns Numeric ID
     */
    private generateUserId(): number {
        return Date.now();
    }

    /**
     * Sign up a new user
     * @param signupData User signup data
     * @returns Promise resolving to the created user (without password)
     */
    public async signup(signupData: SignupData): Promise<Omit<User, 'password'>> {
        try {
            // Check if user already exists
            const existingUsers = await firebaseService.queryByField<User>(
                this.COLLECTION_NAME,
                'email',
                signupData.email
            );

            if (existingUsers.length > 0) {
                throw new Error('User with this email already exists');
            }

            // Hash the password
            const hashedPassword = await this.hashPassword(signupData.password);

            // Prepare user data
            const userId = this.generateUserId();
            const now = Date.now();

            const userData: Omit<User, 'id'> = {
                name: signupData.name,
                email: signupData.email,
                password: hashedPassword,
                city: signupData.city,
                state: signupData.state,
                country: signupData.country,
                address: signupData.address,
                zip: signupData.zip,
                mobile: signupData.mobile,
                verified: false,
                createdAt: now,
                updatedAt: now
            };

            // Save user to Firestore
            await firebaseService.put(
                this.COLLECTION_NAME,
                { ...userData, id: userId },
                userId.toString()
            );

            // Return user without password (with numeric ID)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { password: _, ...userWithoutPassword } = { ...userData, id: userId };
            return userWithoutPassword;
        } catch (error) {
            console.error('Error signing up user:', error);
            if (error instanceof Error) {
                throw error;
            }
            throw new Error('Failed to sign up user');
        }
    }

    /**
     * Login a user
     * @param loginData User login credentials
     * @returns Promise resolving to the user (without password)
     */
    public async login(loginData: LoginData): Promise<Omit<User, 'password'>> {
        try {
            // Find user by email
            const users = await firebaseService.queryByField<User>(
                this.COLLECTION_NAME,
                'email',
                loginData.email
            );

            if (users.length === 0) {
                throw new Error('Invalid email or password');
            }

            const user = users[0];

            // Verify password
            const isPasswordValid = await this.verifyPassword(
                loginData.password,
                user.password
            );

            if (!isPasswordValid) {
                throw new Error('Invalid email or password');
            }

            // Return user without password, ensuring numeric ID
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { password: _, ...userWithoutPassword } = user;
            // Ensure ID is numeric (in case it came from document ID as string)
            const numericId = typeof user.id === 'string' ? parseInt(user.id, 10) : user.id;
            return { ...userWithoutPassword, id: numericId };
        } catch (error) {
            console.error('Error logging in user:', error);
            if (error instanceof Error) {
                throw error;
            }
            throw new Error('Failed to login user');
        }
    }
}

// Export singleton instance
export default AuthService.getInstance();

