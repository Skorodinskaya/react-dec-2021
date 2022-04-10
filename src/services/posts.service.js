import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const postsService = {
    getPostsOfUser: (id) => axiosService.get(`${urls.posts}/?userId=${id}`)
}