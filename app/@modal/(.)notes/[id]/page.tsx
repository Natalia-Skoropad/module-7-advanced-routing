import { getSingleNote } from '@/lib/api';
import { Modal } from '@/app/index';

//===========================================================================

interface NotePreviewProps {
  params: Promise<{ id: string }>;
}

//===========================================================================

async function NotePreview({ params }: NotePreviewProps) {
  const { id } = await params;
  const note = await getSingleNote(id);

  return (
    <Modal>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </Modal>
  );
}

export default NotePreview;
