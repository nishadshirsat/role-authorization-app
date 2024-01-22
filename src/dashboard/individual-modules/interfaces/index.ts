export interface IBasicDetails {
    name: string;
    mobileNumber: string;
    email: string;
    birthDate?: Date | null;
    isStored?: boolean
}

export interface IAddressDetails {
    address: string;
    district: string;
    city: string;
    state: string;
    pincode: number | null;
    isStored?: boolean
}

export interface IPersonalDetails {
    panNumber: string;
    vehicleNumber: string;
    isStored?: boolean
}


