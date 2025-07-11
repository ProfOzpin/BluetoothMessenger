
import { open, QuickSQLiteConnection } from 'react-native-quick-sqlite';

const db: QuickSQLiteConnection = open({ name: 'chat.db' });

export const initializeDatabase = () => {
  db.execute('CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, content TEXT, sender_id TEXT, recipient_id TEXT, timestamp INTEGER, encrypted_content TEXT);');
  db.execute('CREATE TABLE IF NOT EXISTS contacts (device_id TEXT PRIMARY KEY, device_name TEXT, last_seen INTEGER, public_key TEXT);');
  db.execute('CREATE TABLE IF NOT EXISTS conversations (conversation_id TEXT PRIMARY KEY, participants TEXT, last_message_id INTEGER, created_at INTEGER);');
};

export default db;
