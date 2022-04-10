import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const usersService = {
    getAllUsers:() => axiosService.get(urls.users)
}