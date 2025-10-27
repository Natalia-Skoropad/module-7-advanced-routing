import Link from 'next/link';
import { getCategories } from '@/lib/api';

import css from '../notes.module.css';

//===========================================================================

async function NotesSidebar() {
  const categories = await getCategories();

  return (
    <ul className={css.catList}>
      <li>
        <Link className={css.link} href={`/notes/filter/all`}>
          All notes
        </Link>
      </li>
      {categories.map(c => (
        <li key={c.id}>
          <Link className={css.link} href={`/notes/filter/${c.id}`}>
            {c.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NotesSidebar;
