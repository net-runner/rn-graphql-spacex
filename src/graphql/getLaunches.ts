import { gql } from "../generatedGraphQL";

export const GET_LAUNCHES = gql(`
  query getLaunches($limit: Int, $offset: Int, $sort: String) {
    launches(limit: $limit, offset: $offset, sort: $sort) {
      id
      launch_date_utc
      launch_success
      mission_name
      rocket {
        rocket_name
      }
    }
  }
`);
