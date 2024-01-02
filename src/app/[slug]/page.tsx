// http://worldtimeapi.org/api/timezone/Europe/Zurich

import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const { slug } = params;
  const res = await fetch(`http://worldtimeapi.org/api/timezone/europe/${slug}`);
  const data = await res.json();

  if (res.status === 404) {
    return <div>{`time for "${slug}" not found...`}</div>;
  }

  return (
    <div>
      <h2>{slug}</h2>
      <p>
        datetime: <code>{data.datetime}</code>
      </p>
      <p>
        timezone: <code>{data.timezone}</code>
      </p>
    </div>
  );
}

export async function generateStaticParams() {
  return ['zurich', 'london'].map((slug) => ({ slug }));
}
