export default interface User {
    id: number;
    name: string;
    email: string;
    city?: string;
    state?: string;
    country?: string;
    address?: string;
    zip?: string;
    latitude?: number;
    longitude?: number;
    mobile?: string;
    verified?: boolean;
    password: string;
    createdAt: number;
    updatedAt: number;
}