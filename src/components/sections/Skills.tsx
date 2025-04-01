"use client";

const categories = [
  {
    title: "Languages & Development",
    skills: ["Go", "JS", "Bash", "Rust"],
  },
  {
    title: "DevOps",
    skills: ["Docker", "Kubernetes", "Helm", "Terraform",
        "Ansible", "Gitlab"
    ],
  },
  {
    title: "Cloud & Platforms",
    skills: ["AWS", "GCP", "Cloudflare"],
  },
  {
    title: "Security",
    skills: [
      "Cilium",
      "eBPF",
      "XDR",
      "CrowdStrike",
      "Nessus",
      "Trivy",
      "Vault",
    ],
  },
];

export function IconGrid() {
    return (
        <section className="flex flex-col items-center justify-center py-12 px-4">
        {/* Заголовок и описание */}
        <div className="mb-8 text-center max-w-[700px] w-full">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white tracking-wide">
            Skills
          </h2>
          {/* Подчеркивание */}
          <div className="h-[2px] w-20 bg-gray-400 dark:bg-gray-500 mx-auto my-2 rounded-full" />
          {/* Описание */}
          <p className="text-gray-700 dark:text-gray-300 text-base max-w-xl mx-auto">
            Here are some of the tools and technologies I use across development, DevOps, and cloud security.
          </p>
        </div>
      
        {/* Сетка карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[700px]">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="bg-[#f2f2f2] dark:bg-[#2a2a2a] rounded-xl p-4 flex flex-col items-center
  shadow-[0_10px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_40px_rgba(255,255,255,0.06)]
  border border-white/60 dark:border-white/10
  transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold mb-4 text-center text-black dark:text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, i) => (
                  <button
                    key={i}
                    className="px-2 py-[-1] rounded-full relative bg-[#616467] text-white text-sm hover:shadow-lg  transition duration-200 border border-slate-600"
                  >
                    <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent to-transparent" />
                    <span className="relative z-20">{skill}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
    );
  }
  
