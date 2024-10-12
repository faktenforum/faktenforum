// Define interfaces for the API responses
export interface Room {
  room_id: string; // The ID of the room.
  name?: string; // The name of the room.
  canonical_alias?: string; // The canonical (main) alias address of the room.
  joined_members?: number; // How many users are currently in the room.
  joined_local_members?: number; // How many local users are currently in the room.
  version?: string; // The version of the room as a string.
  creator?: string; // The user_id of the room creator.
  encryption?: string | null; // Algorithm of end-to-end encryption of messages. Is null if encryption is not active.
  federatable?: boolean; // Whether users on other servers can join this room.
  public?: boolean; // Whether the room is visible in room directory.
  join_rules?: "public" | "knock" | "invite" | "private"; // The type of rules used for users wishing to join this room.
  guest_access?: "can_join" | "forbidden"; // Whether guests can join the room.
  history_visibility?: "invited" | "joined" | "shared" | "world_readable"; // Who can see the room history.
  state_events?: number; // Total number of state_events of a room. Complexity of the room.
  room_type?: string | null; // The type of the room taken from the room's creation event; for example "m.space" if the room is a space. If the room does not define a type, the value will be null.
}

export interface RoomDetails extends Room {
  topic?: string; // The topic of the room.
  avatar?: string; // The mxc URI to the avatar of the room.
  joined_local_devices?: number; // How many local devices are currently in the room.
  forgotten?: boolean; // Whether all local users have forgotten the room.
}

export interface GetRoomsResponse {
  rooms: Room[]; // An array of objects, each containing information about a room.
  offset?: number; // The current pagination offset in rooms. This parameter should be used instead of next_token for room offset as next_token is not intended to be parsed.
  total_rooms: number; // The total number of rooms this query can return. Using this and offset, you have enough information to know the current progression through the list.
  next_batch?: string; // If this field is present, we know that there are potentially more rooms on the server that did not all fit into this response. We can use next_batch to get the "next page" of results. To do so, simply repeat your request, setting the from parameter to the value of next_batch.
  prev_batch?: string; // If this field is present, it is possible to paginate backwards. Use prev_batch for the from value in the next request to get the "previous page" of results.
}

// Define an interface for the query parameters
export interface GetRoomsQueryParams {
  from?: number;
  limit?: number;
  order_by?:
    | "name" // Rooms are ordered alphabetically by room name. This is the default.
    | "canonical_alias" // Rooms are ordered alphabetically by main alias address of the room.
    | "joined_members" // Rooms are ordered by the number of members. Largest to smallest.
    | "joined_local_members" // Rooms are ordered by the number of local members. Largest to smallest.
    | "version" // Rooms are ordered by room version. Largest to smallest.
    | "creator" // Rooms are ordered alphabetically by creator of the room.
    | "encryption" // Rooms are ordered alphabetically by the end-to-end encryption algorithm.
    | "federatable" // Rooms are ordered by whether the room is federatable.
    | "public" // Rooms are ordered by visibility in room list.
    | "join_rules" // Rooms are ordered alphabetically by join rules of the room.
    | "guest_access" // Rooms are ordered alphabetically by guest access option of the room.
    | "history_visibility" // Rooms are ordered alphabetically by visibility of history of the room.
    | "state_events"; // Rooms are ordered by number of state events. Largest to smallest.
  dir?: "f" | "b";
  search_term?: string;
  public_rooms?: boolean;
  empty_rooms?: boolean;
}
