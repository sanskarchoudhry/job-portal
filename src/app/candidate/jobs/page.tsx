import { useEffect, useState } from "react";
import Link from "next/link";
import { Job } from "@/schema/types";

export default function JobListings() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    async function fetchJobs() {
      const response = await fetch("/api/jobs");
      const data = await response.json();
      setJobs(data);
    }
    fetchJobs();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Job Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs.map((job) => (
          <Link key={job.id} href={`/candidate/jobs/${job.id}`}>
            <div className="p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-sm text-gray-600">{job.category}</p>
              <p className="text-sm text-gray-600">{job.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
