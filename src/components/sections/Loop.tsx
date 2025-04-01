// InfiniteLogoScroller.tsx
"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteLogoScroller() {
  const logos = [
    "/svg/loop/aws-svgrepo-com.svg",
    "/svg/loop/kubernetes-svgrepo-com.svg",
    "/svg/loop/mysql-svgrepo-com.svg",
    "/svg/loop/github-142-svgrepo-com.svg",
    "/svg/loop/terraform-icon-svgrepo-com.svg",
    "/svg/loop/react.svg",
    "/svg/loop/grafana-svgrepo-com.svg",
    "/svg/loop/go.svg",
    "/svg/loop/ansible.svg",
    "/svg/loop/helm-svgrepo-com.svg",
    "/svg/loop/docker-svgrepo-com.svg",
  ];

  const items = logos.map((src, idx) => (
    <div
      key={`logo-${idx}`}
      className="w-20 h-20 flex items-center justify-center rounded-xl bg-[#f2f2f2] dark:bg-[#3a3a3a] shadow-sm"
    >
      <img src={src} alt={`Logo ${idx}`} className="w-44 h-44 object-contain" />
    </div>
  ));

  return (
    <section className="w-full max-w-[700px] h-[120px] flex items-center justify-center mx-auto overflow-hidden bg-white dark:bg-black transition-colors duration-500 px-4 sm:px-0">
      <div className="w-full">
        <InfiniteMovingCards items={items} direction="left" speed="slow" />
      </div>
    </section>
  );
}
