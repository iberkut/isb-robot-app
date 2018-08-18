import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import io from 'socket.io-client'

// const serverUrl = 'http://localhost:3030'
const serverUrl = 'http://192.168.43.102:3030'

const createFeathersClient = url => {
  const socket = io(url, {
    transports: ['websocket'],
    perMessageDeflate: false
  })
  return feathers().configure(socketio(socket))
}

export const feathersClient = createFeathersClient(serverUrl)
