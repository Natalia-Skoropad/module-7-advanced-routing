import axios from 'axios';

//===========================================================================

export type Note = {
  id: string;
  title: string;
  content: string;
  categoryId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export type NoteListResponse = {
  notes: Note[];
  total: number;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

//===========================================================================

axios.defaults.baseURL = 'https://next-docs-9f0504b0a741.herokuapp.com/';

export const getNotes = async (categoryId?: string) => {
  const res = await axios.get<NoteListResponse>('/notes', {
    params: { categoryId },
  });
  return res.data;
};

export const getSingleNote = async (id: string) => {
  const res = await axios.get<Note>(`/notes/${id}`);
  return res.data;
};

export const getCategories = async () => {
  const res = await axios<Category[]>('/categories');
  return res.data;
};

// ===== Mock users for the Profile route =====
export type User = { id: string; name: string };

const MOCK_USERS: User[] = [
  { id: '1', name: 'Nataliia Skoropad' },
  { id: '2', name: 'Ada Lovelace' },
  { id: 'me', name: 'User name' },
];

export async function getUser(id: string): Promise<User | null> {
  // імітуємо мережеву затримку
  await new Promise(r => setTimeout(r, 200));
  return MOCK_USERS.find(u => u.id === id) ?? null;
}
