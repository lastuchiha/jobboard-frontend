import { JobContainer } from "./components/containers/job-container";
import { JobCard } from "./components/jobcard";
import { Title } from "./components/title";
import "./main.css";
import jobs from "./jobs.json";

function App() {
  return (
    <main className="max-w-[800px] mx-auto p-5">
      <Title>Jobs</Title>
      <JobContainer>
        {jobs.map((job) => {
          return <JobCard {...job} />;
        })}
      </JobContainer>
    </main>
  );
}

export default App;
