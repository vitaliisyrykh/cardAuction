import httpClient from "./index";

export const adminGetUsers = (id) => httpClient.get(`/users/${id}/admin/users/`);

export const adminDeleteUser = (data) => {
   const responsePromise = httpClient.delete(`/users/${data.adminId}/admin/users/`, {data});
   return responsePromise
}
