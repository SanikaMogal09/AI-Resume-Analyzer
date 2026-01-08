import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import {callbackify} from "node:util";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "RM – Analyze. Improve. Get Hired" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg -cover">
    <Navbar />
    <section>
      <div className="page-heading">
        <h1>Track Your Applications & Resume Ratings</h1>
        <h2>Review your submissions and check AI-powered feedback</h2>
      </div>
    </section>

    {resumes.map(resume => (
        <div>
          <h1>{resume.jobTitle}</h1>
        </div>
    ))}
  </main>;
}
