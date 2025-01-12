"use client";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="p-8 flex flex-col items-center text-center mt-32">
        <h2 className="text-6xl font-bold">momento</h2>
        <p className="m-6">
          fast tasks, quick work
        </p>
        <Link href="/dashboard">
          <button className="mt-4 bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded">
            {'>'}
          </button>
        </Link>
      </section>
      <section className="p-8 flex flex-col mt-4">
        <p className="m-6 text-right">
          conventional dev work is cumbersome <br/>
          we aim for freedom <br />
        </p>
      </section>
      <section className="p-8 flex flex-col mt-4 text-left">
        <h3 className="text-4xl font-semibold mb-4">features</h3>
        <p className="m-2">
          create and complete tasks
        </p>
        <p className="m-2">
          tasks can be paid or free
        </p>
        <p className="m-2">
          collaborate on discord
        </p>

      </section>
      <section className="text-right p-8 flex flex-col mt-4">
        <h3 className="text-4xl font-semibold mb-4">roadmap</h3>
        <p className="m-2">
          bounty board (from github and sponsored/custom bounties)
        </p>
        <p className="m-2">
          tailored tasks for your profile
        </p>
        <p className="m-2">
          sponsored jobs and bounties
        </p>
        <p className="m-2">
          p2p academy and courses
        </p>
        <p className="m-2">
          custom token for fast internal transactions
        </p>
      </section>
    </>
  );
}
