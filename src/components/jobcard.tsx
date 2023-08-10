import { Button } from "./ui/button";

type JobCardProps = {
  title: string;
  image_url: string;
  posted_at: string;
  job_url: string;
};

export const JobCard = (props: JobCardProps) => {
  return (
    <li className="flex flex-col items-center md:flex-row md:items-start my-5 items-start justify-start border px-10 py-7 rounded-lg gap-x-10 bg-gray-50">
      <div className="h-28 aspect-square bg-white border">
        <img
          className="object-cover"
          src={props.image_url}
          alt={props.title.split(" ")[0]}
        />
      </div>
      <div className="flex items-center md:items-start flex-col gap-y-5 min-h-28">
        <div>
          <h1 className="font-semibold">{props.title}</h1>
          <p className="font-light text-gray-500 text-sm">{props.posted_at}</p>
        </div>
        <a href={props.job_url} target="_blank">
          <Button className="bg-pink-500 hover:bg-pink-400">
            Apply now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </Button>
        </a>
      </div>
    </li>
  );
};
