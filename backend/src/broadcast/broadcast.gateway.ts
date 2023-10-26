import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Socket } from 'dgram';
import { Server } from 'socket.io';

@WebSocketGateway(3003, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PATCH'],
    transports: ['websocket', 'polling'],
    credentials: false,
  },
  allowEIO3: true,
})

export class BroadcastGateway  {

  @WebSocketServer()
  server: Server;

  constructor(){
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: string, @ConnectedSocket() client: Socket) {
    // Handle received message
    this.server.emit('message', data); // Broadcast the message to all connected clients
  }

  @SubscribeMessage('join_room')
  async handleSetClientDataEvent(
    @MessageBody()
    payload: any,
  ) {
    console.log(payload);
    const roomName = payload.roomName;
    this.server.socketsJoin(roomName);
  }

  async emitter(title: string, data: any, roomName?: string) {
    console.log('Emitting room...' + roomName);
    console.log('Emitting topic...' + title);
    console.log('Emitting data...' + data);
    if (roomName !== undefined || roomName !== null) {
      this.server.to(roomName).emit(title, data);
    } else {
      this.server.to('vehicle.list').emit(title, data);
    }
  }

}
