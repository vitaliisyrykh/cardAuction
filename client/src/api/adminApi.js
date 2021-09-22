import httpClient from "./index";
import queryString from 'query-string';

export const adminGetUsers = ({id, limit, offset}) =>
    httpClient.get(`/users/${id}/admin/users/?${queryString.stringify({limit, offset})}`);

export const adminDeleteUser = (data) =>
    httpClient.delete(`/users/${data.adminId}/admin/users/`, {data});

export const adminUpdateUser = data =>
    httpClient.patch(`/users/${data.adminId}/admin/users/`, data);

export const adminUserCreate = data =>
    httpClient.post(`/users/${data.adminId}/admin/users.`, data);

export const adminGetCards = ({adminId, limit, offset}) =>
    httpClient.get(`/users/${adminId}/admin/cards/?${queryString.stringify({limit, offset})}`);

export const adminUpdateCard = ({adminId, cardId, data}) =>
    httpClient.patch(`/users/${adminId}/cards/${cardId}`, data);

