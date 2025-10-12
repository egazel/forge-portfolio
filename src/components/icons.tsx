import { cn } from "@/lib/utils";

export const UnityIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    className={cn("fill-current", className)}
  >
    <path d="M64 0L0 32v64l64 32 64-32V32L64 0zm39.4 83L64 102.8 24.6 83V45l39.4-19.8L103.4 45v38z" />
    <path d="M43.9 86.8l-10.7-6.2 21-36.3 10.7 6.2zm40.1 0L114.7 83l-31-53.7-10.7 6.2zM80.2 34l-16.2-9-16.2 9v18.1l16.2 9 16.2-9z" />
  </svg>
);

export const UnrealEngineIcon = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn("fill-current", className)}
    >
        <path d="M12.56 3.24A1.5 1.5 0 0010.5 4.5v3.13a.5.5 0 01-.8.4L6.96 6.1a1.5 1.5 0 00-2.12 2.12l1.94 1.94a.5.5 0 01.06.63A6.49 6.49 0 003 17.5a1.5 1.5 0 003 0c0-1.82.78-3.48 2-4.63a.5.5 0 01.63.06l1.94 1.94a1.5 1.5 0 002.12-2.12l-1.88-1.88a.5.5 0 01.4-.8v-3a1.5 1.5 0 00-1.12-1.44z" />
        <path d="M17.5 3a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 003 0v-15A1.5 1.5 0 0017.5 3z" />
    </svg>
);

export const PythonIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={cn("fill-current", className)}
    >
        <path d="M15 11.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        <path fillRule="evenodd" d="M12.26 3.26a.75.75 0 00-1.06-.04l-3.25 3.25a.75.75 0 000 1.06l.88.88a.75.75 0 001.06 0l1.72-1.72v1.3a5.5 5.5 0 005.5 5.5h2.5a.75.75 0 000-1.5h-2.5a4 4 0 01-4-4V6.5h.33a.75.75 0 00.53-.22l1.5-1.5a.75.75 0 00-.04-1.06l-1.92-1.92zM9 12.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M11.74 20.74a.75.75 0 001.06.04l3.25-3.25a.75.75 0 000-1.06l-.88-.88a.75.75 0 00-1.06 0l-1.72 1.72v-1.3a5.5 5.5 0 00-5.5-5.5H4a.75.75 0 000 1.5h2.5a4 4 0 014 4V17.5h-.33a.75.75 0 00-.53.22l-1.5 1.5a.75.T75 0 00.04 1.06l1.92 1.92z" clipRule="evenodd" />
    </svg>
);

export const CppIcon = ({ className }: { className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={cn("fill-current", className)}
    >
        <path d="M14.5 10.5h-5v-5h5v5ZM16 9V4H8v5h2.5v2.5H8v5h8v-5h-2.5V9H16ZM18 20v-5h5v5h-5Zm-1-1.5h3v-2h-3v2ZM3 20V4h18v16H3Z"/>
    </svg>
);

export const ThreeDsMaxIcon = ({ className }: { className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={cn("fill-current", className)}
    >
        <path d="M19.982 6.51a.69.69 0 0 0-.547-.547L13.19 3.018a.69.69 0 0 0-.38-.018.69.69 0 0 0-.382.018L6.184 5.963a.69.69 0 0 0-.547.547L2.69 12.755a.69.69 0 0 0 .164.717l4.316 4.316a.69.69 0 0 0 .717.164l6.244-2.947a.69.69 0 0 0 .37 0l6.244 2.947a.69.69 0 0 0 .717-.164l4.316-4.316a.69.69 0 0 0 .164-.717l-2.947-6.244Z"/>
    </svg>
);

export const MaxscriptIcon = ({ className }: { className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={cn("fill-current", className)}
    >
        <path d="M4 3h16v2H4V3Zm2 18h12v-2H6v2Zm-2-4h16v-2H4v2Zm1-4h14v-2H5v2Zm-1-4h16V9H4v2Z"/>
    </svg>
);
