interface DocsPageProps {
  params: Promise<{ slug?: string[] }>;
}

//===============================================================

async function DocsPage({ params }: DocsPageProps) {
  const { slug } = await params;

  return (
    <div>
      <h1>Docs page</h1>
      <p>Current path: {slug?.join(' / ') || 'home'}</p>
    </div>
  );
}

export default DocsPage;
