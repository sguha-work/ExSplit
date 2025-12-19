export interface SignupData {
    name: string;
    email: string;
    password: string;
    city?: string;
    state?: string;
    country?: string;
    address?: string;
    zip?: string;
    mobile?: string;
}

export interface LoginData {
    email: string;
    password: string;
}

