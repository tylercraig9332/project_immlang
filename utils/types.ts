export interface TokenState {
    login: (email: string, password: string) => void;
    signup: (email: string, password: string) => void;
    logout: () => void;
    isTokenExpired: () => void;
}

interface User {
    $id: string;
    email: string;
    name: string;
}

export interface UserState {
    user: User;
    isLoggedIn: boolean;
    userObject: UserObject | undefined;
}


interface UserObject {
    $id: string;
    $createdAt: number;
    userId: string;
    expire: number;
    provider: string;
    providerUid: string;
    providerAccessToken: string;
    providerAccessTokenExpiry: number;
    providerRefreshToken: string;
    ip: string;
    osCode: string;
    osName: string;
    osVersion: string;
    clientType: string;
    clientCode: string;
    clientName: string;
    clientVersion: string;
    clientEngine: string;
    clientEngineVersion: string;
    deviceName: string;
    deviceBrand: string;
    deviceModel: string;
    countryCode: string;
    countryName: string;
    current: boolean;
}