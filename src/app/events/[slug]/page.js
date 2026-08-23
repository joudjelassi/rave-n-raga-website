import { notFound } from 'next/navigation';
import { recaps } from '@/data/recaps';
import EventRecap from '@/components/EventRecap';

export function generateStaticParams() {
  return recaps.map((recap) => ({ slug: recap.slug }));
}

export default async function RecapPage({ params }) {
  const { slug } = await params;
  const recap = recaps.find((r) => r.slug === slug);

  if (!recap) {
    notFound();
  }

  return <EventRecap recap={recap} />;
}
