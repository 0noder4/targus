"use client";

import React, { createContext, useContext } from "react";

const DEFAULT_TITLE = "Oferty 2025";

const JobWallTitleContext = createContext<string>(DEFAULT_TITLE);

export function JobWallTitleProvider({
  pageTitle,
  children,
}: {
  pageTitle?: string | null;
  children: React.ReactNode;
}) {
  const value = pageTitle?.trim() || DEFAULT_TITLE;
  return (
    <JobWallTitleContext.Provider value={value}>
      {children}
    </JobWallTitleContext.Provider>
  );
}

export function useJobWallTitle() {
  return useContext(JobWallTitleContext);
}
