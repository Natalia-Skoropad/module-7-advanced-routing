import { Note } from '@/lib/api';
import { NoteItem } from '@/app/index';

import css from './NoteList.module.css';

//===========================================================================

interface NoteListProps {
  notes: Note[];
}

//===========================================================================

function NoteList({ notes }: NoteListProps) {
  return (
    <ul className={css.list}>
      {notes.map(note => (
        <NoteItem key={note.id} item={note} />
      ))}
    </ul>
  );
}

export default NoteList;
