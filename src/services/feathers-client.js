import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import io from 'socket.io-client'

const createFeathersClient = url => {
  const socket = io(url, {
    transports: ['websocket'],
    perMessageDeflate: false
  })
  return feathers().configure(socketio(socket))
}

export const feathersClient = createFeathersClient('192.168.43.102:3030')
