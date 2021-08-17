export interface User {
    id?: string;
    name: string;
    lastName: string;
    email: string;
    dateOfBirth: Date;
    address: Array<UserAddress>;
    role: Roles;
}

interface UserAddress {
    country: string;
    city: string;
    street: string;
    buildingNumber: string;
    flatNumber: string;
}