import { NoteList } from '@/app/index';
import { getNotes } from '@/lib/api';

import css from './page.module.css';

//===========================================================================

async function Notes() {
  const response = await getNotes();

  return (
    <section className={css.section}>
      <h1 className={css.title}>Notes List</h1>
      {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
    </section>
  );
}

export default Notes;
