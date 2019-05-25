import { FollowersApiResponse, AccessTokenApiResponse } from "../models/ApiResponse";
import axios, { AxiosResponse } from 'axios' ;


const API_BASE = process.env.REACT_APP_API_HOST;

const apiUrl = (endpoint: string) => {
    return `${API_BASE}/${endpoint}`;
}


function parseResponse<T>(res: AxiosResponse<T> ): T {
    return res.data;
}

function parseError(err: any): string{
    if(err.resopnse && err.data){
        return err.response.data.error;
    }

    return 'Whoops, Something went wrong';
}

export const twitterService =  {
    
    fetchFollowers(username: string, cursor= '-1', count= 30 ): Promise<FollowersApiResponse>{
        const defaultParams = { 
            skip_status:true,
            include_user_entities:false
         }
        
        return axios.get<FollowersApiResponse>(apiUrl('followers'),{
            params: {  ...defaultParams, 
                    screen_name:username,
                    cursor,
                    count
            }  
        }).then( (res) => parseResponse<FollowersApiResponse>(res))
            .catch((err)=> { 
                throw parseError(err);
            })
    }
}

