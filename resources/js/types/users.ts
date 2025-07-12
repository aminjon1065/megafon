export interface User {
    id: number;
    name: string;
    email: string;
    login: string;
    role: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}
