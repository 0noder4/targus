import React from "react";
import { useSuspenseQuery } from "@apollo/client/react";

// Queries
import { GET_JOBS } from "../../../graphql/jobs/getJobs";

// Types
import { JobBrief } from "../../../interfaces/jobs/JobBrief";

// Components
import JobWallEntry from "./components/JobWallEntry";

// Styles
import styles from "./JobWall.module.scss";

type Filters = {
  search: string;
  field: string;
  model: string;
  type: string;
};

type Props = {
  filters: Filters;
};

const JobWall = ({ filters }: Props) => {
  const {
    data: { jobs },
  } = useSuspenseQuery<{
    jobs: JobBrief[] | null;
  }>(GET_JOBS, {
    variables: {
      filters: {
        title: {
          containsi: filters.search,
        },
        ...(filters.model && {
          workModels: {
            internalName: {
              eq: filters.model,
            },
          },
        }),
        ...(filters.type && {
          employmentTypes: {
            internalName: {
              eq: filters.type,
            },
          },
        }),
      },
    },
  });

  if (!jobs) return <div className={styles.container} />;

  return (
    <div className={styles.container}>
      {jobs.map((job) => (
        <JobWallEntry key={job.documentId} {...job} />
      ))}
    </div>
  );
};

export default JobWall;
