import httpClient from "./index";

export const adminGetUsers = (id) => {
    const responsePromise = httpClient.get(`/users/${id}/admin/users/`)
    console.log(responsePromise)
    return responsePromise;
};