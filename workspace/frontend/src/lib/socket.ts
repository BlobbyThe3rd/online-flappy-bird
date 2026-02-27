import { io, Socket } from 'socket.io-client';

export interface FlappySocket extends Socket {
  // Add custom event types here later
}

export function createSocket(token: string | null): FlappySocket {
  return io('http://localhost:5000', { 
    auth: { token } 
  }) as FlappySocket;
}