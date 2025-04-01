"use client";

import React from "react";

const projects = [
  {
    user: "nomaderr",
    repo: "ebpf_permission_manager",
    title: "eBPF Permission Manager",
    description:
      "A lightweight, fast and powerful tool for managing permissions in Linux using eBPF. Protects the system from unauthorized operations by controlling access at the kernel level.",
  },
  {
    user: "nomaderr",
    repo: "ebpf-file-blocker",
    title: "eBPF File Creation Blocker",
    description:
      "eBPF-based security module for blocking file creation in specific directories using Eunomia eBPF Runtime.",
  },
  {
    user: "nomaderr",
    repo: "k8s_helm_chart",
    title: "Kubernetes Helm Chart Template",
    description:
      "Helm chart structure for deploying modular applications across multiple Kubernetes clusters.",
  },
  {
    user: "nomaderr",
    repo: "database_job_monitor",
    title: "DB Partitions Monitoring Tool",
    description:
      "Monitor and alert on DB partition growth using Grafana dashboards and custom logic.",
  },
];

export function GitHubCards() {
    return (
      <section className="mt-22 md:mt-16 flex flex-col items-center justify-center py-20">
        <div className="w-full max-w-[700px]">
          {/* Заголовок и описание */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white tracking-wide">
              Projects
            </h2>
            <div className="mx-auto w-35 mt-1 mb-4 h-0.5 w-20 bg-gray-400 dark:bg-gray-500 rounded-full" />
            <p className="text-gray-700 dark:text-gray-300 text-base max-w-xl mx-auto">
              A showcase of open-source tools, monitoring dashboards, and secure cloud-native systems I've worked on.
            </p>
          </div>
  
          {/* Сетка карточек */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <a
                key={index}
                href={`https://github.com/${project.user}/${project.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-[320px] bg-[#f2f2f2] dark:bg-[#2a2a2a] rounded-xl
shadow-[0_10px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_40px_rgba(255,255,255,0.06)]
border border-white/60 dark:border-white/10
hover:scale-[1.03] transition-transform duration-300 flex flex-col"

              >
                <img
                  src={`https://opengraph.githubassets.com/1/${project.user}/${project.repo}`}
                  alt={`${project.repo} preview`}
                  className="w-full h-[160px] object-cover"
                />
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-neutral-400 line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
  