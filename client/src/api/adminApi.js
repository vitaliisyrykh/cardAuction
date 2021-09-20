import httpClient from "./index";
import queryString from 'query-string';

export const adminGetUsers = ({id, limit, offset}) =>{
   const responsePromise = httpClient.get(`/users/${id}/admin/users/?${queryString.stringify({limit,offset})}`);
   return responsePromise;
}

export const adminDeleteUser = (data) => httpClient.delete(`/users/${data.adminId}/admin/users/`, {data});

export const adminUpdateUser = data => httpClient.patch(`/users/${data.adminId}/admin/users/`, data);

export const adminUserCreate = data => httpClient.post(`/users/${data.adminId}/admin/users.`, data);
