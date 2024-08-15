"use client";
import Dynamic from 'next/dynamic';

const Detail = Dynamic(() => import('@/components/Details'));

export default function Home() {
  return (
    <>
      <div className="mt-4">
        <Detail />
      </div>
    </>
  );
}
