// Socket.IO client version (install: npm i socket.io-client)
import { io } from 'socket.io-client';
// Optional: import { useSceneCleanup } from '@/key_cleaners/destroy_keybinds';

export default function CheckConnections(scene) {
  // In Next.js, expose env var as NEXT_PUBLIC_SOCKET_URL (set in .env.local)
  const url = process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3010';

  const socket = io(url, {
    transports: ['websocket'],
    reconnection: true,
    reconnectionAttempts: Infinity,
    reconnectionDelay: 1000
  });

  socket.on('connect', () => {
    console.log('[socket] connected', socket.id);
  });

  socket.on('disconnect', reason => {
    console.log('[socket] disconnected', reason);
  });

  socket.on('connect_error', err => {
    console.warn('[socket] connect_error', err.message);
  });

  // Example custom event
  socket.on('server:ping', data => {
    console.log('[socket] ping', data);
    socket.emit('client:pong', { t: Date.now() });
  });

  // Expose (attach to scene) + provide accessor
  scene.socket = socket;
  scene.getSocket = () => socket;

  // Cleanup (uncomment if you want auto destroy with your scene helper)
  /*
  const clean = useSceneCleanup(scene);
  clean.add(() => {
    socket.removeAllListeners();
    socket.close();
    if (scene.socket === socket) scene.socket = null;
  });
  */
}
