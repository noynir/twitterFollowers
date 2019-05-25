import { TwitterUser } from "./TwitterUser";

export type QuerySortBy = keyof TwitterUser | '' ;
export interface Query {
    username: string,
    sortBy: QuerySortBy
}