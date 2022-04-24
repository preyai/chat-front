import io from 'socket.io-client';
import feathers from '@feathersjs/client';
import {SERVER} from "../constants";

// Socket.io is exposed as the `io` global.
const socket = io(SERVER);
// @feathersjs/client is exposed as the `feathers` global.
const app = feathers()

app.configure(feathers.socketio(socket));
app.configure(feathers.authentication());

export { app }