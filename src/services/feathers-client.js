import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import io from 'socket.io-client'

export const createFeathersClient = url => {
  const socket = io(url, {
    transports: ['websocket'],
    perMessageDeflate: false
  })
  return feathers().configure(socketio(socket))
}
