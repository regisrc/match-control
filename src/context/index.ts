import { IUserSettingsCache } from "../models/interfaces";

export const VerifyCache = () => {
    const login = localStorage.getItem("userSettings");

    if (!login)
        return false

    const userSettings : IUserSettingsCache = JSON.parse(login);

    if (userSettings.id)
        return true;

    return false;
}

export const SetNewUser = (userSettings : IUserSettingsCache) => {
    localStorage.setItem("userSettings", JSON.stringify(userSettings));
}