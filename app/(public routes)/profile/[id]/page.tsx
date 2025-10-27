import { notFound } from 'next/navigation';
import { getUser } from '@/lib/api';

//===========================================================================

interface ProfilePageProps {
  params: { id: string };
}

//===========================================================================

async function ProfilePage({ params }: ProfilePageProps) {
  const user = await getUser(params.id);

  if (!user) {
    notFound();
  }

  return <div>{user.name}</div>;
}

export default ProfilePage;
