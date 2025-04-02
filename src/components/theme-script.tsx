// src/components/theme-script.tsx
'use client'

export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function () {
            try {
              var theme = localStorage.getItem('theme');
              var systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              var html = document.documentElement;

              if (theme === 'dark' || (!theme && systemPrefersDark)) {
                html.classList.add('dark');
              } else {
                html.classList.remove('dark');
              }
            } catch (_) {}
          })();
        `,
      }}
    />
  )
}
