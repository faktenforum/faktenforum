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

export interface GetRoomsOptions {
  fetch_all?: boolean;
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

// Define an interface for the request body to delete a room
export interface DeleteRoomRequest {
  new_room_user_id: string; // The user ID to create the new room.
  room_name: string; // The name of the new room.
  message: string; // The message to send to users.
  block: boolean; // If true, the room will be blocked.
  purge: boolean; // If true, the room will be purged.
}

// Define an interface for the response from the delete room API
export interface DeleteRoomResponse {
  kicked_users: string[]; // List of users who were kicked.
  failed_to_kick_users: string[]; // List of users who failed to be kicked.
  local_aliases: string[]; // List of local aliases of the room.
  new_room_id: string; // The ID of the new room created.
}

// Define an interface for the request body to block or unblock a room
export interface BlockRoomRequest {
  block: boolean; // If true, the room will be blocked; if false, the room will be unblocked.
}

// Define an interface for the response from the block/unblock room API
export interface BlockRoomResponse {
  block: boolean; // true if the room is blocked, otherwise false.
}

// Define an interface for the response from the get block status API
export interface GetBlockStatusResponse {
  block: boolean; // true if the room is blocked, otherwise false.
  user_id?: string; // Optional: The user who added the room to the blocking list, if applicable.
}

// Define an interface for the query parameters for the Room Timestamp to Event API
export interface RoomTimestampToEventQueryParams {
  ts: number; // A timestamp in milliseconds to find the closest event.
  dir?: "f" | "b"; // The direction to search from the timestamp. Defaults to "f".
}

// Define an interface for the response from the Room Timestamp to Event API
export interface RoomTimestampToEventResponse {
  event_id: string; // The event ID closest to the given timestamp.
  origin_server_ts: number; // The timestamp of the event in milliseconds since the Unix epoch.
}

// Define an interface for the query parameters for the Room Messages API
export interface GetRoomMessagesQueryParams {
  from: string; // Required: The token to start returning events from.
  to?: string; // Optional: The token to stop returning events at.
  limit?: number; // Optional: The maximum number of events to return.
  filter?: object; // Optional: A JSON RoomEventFilter to filter returned events with.
  dir?: "f" | "b"; // Optional: The direction to return events from. Defaults to "f".
}

// Define an interface for the response from the Room Messages API
export interface GetRoomMessagesResponse {
  chunk: Array<{
    content: object; // The content of the event.
    event_id: string; // The unique identifier for the event.
    origin_server_ts: number; // The timestamp in milliseconds on the originating homeserver when this event was sent.
    room_id: string; // The ID of the room associated with this event.
    sender: string; // The user ID of the sender of this event.
    type: string; // The type of event.
    unsigned?: object; // Optional: Additional data not signed by the sender.
  }>;
  end?: string; // Optional: A token corresponding to the end of chunk.
  start: string; // A token corresponding to the start of chunk.
  state?: Array<object>; // Optional: A list of state events relevant to showing the chunk.
}

// Define an interface for the request body to make a user a room admin
export interface MakeRoomAdminRequest {
  user_id: string; // The user ID to be granted the highest power in the room.
}
