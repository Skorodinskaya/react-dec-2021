import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const postService = {
    getAll: () => axiosService.get(urls.posts),
    getById: (id) => axiosService.get(`${urls.post}/${id}`)
}