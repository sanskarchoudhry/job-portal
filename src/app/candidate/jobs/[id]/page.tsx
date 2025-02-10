"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface Job {
  id: number;
  title: string;
  description: string;
  category: string;
  location: string;
}

export default function JobDetails() {
  const [job, setJob] = useState<Job | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      async function fetchJobDetails() {
        const response = await fetch(`/api/jobs/${id}`);
        const data = await response.json();
        setJob(data);
      }
      fetchJobDetails();
    }
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
      <p className="text-gray-600 mb-4">
        {job.category} | {job.location}
      </p>
      <p>{job.description}</p>
      <Link href={`/candidate/apply/${job.id}`}>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
          Apply Now
        </button>
      </Link>
    </div>
  );
}
