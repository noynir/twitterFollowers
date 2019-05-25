import { TwitterUser } from "./TwitterUser";

export interface ApiResponse { 
    next_cursor: number;
    next_cursor_str: string;
    previous_cursor: number;
    previous_cursor_str: string;
    total_count: null;
}

export interface FollowersApiResponse extends ApiResponse {
    users: TwitterUser[];
}

export interface AccessTokenApiResponse {
        token_type: string;
        access_token: string;
}
