

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <h1
        className={`font-extrabold text-5xl text-slate-700 dark:text-slate-50 `}
      >
        BANDARU SURYA PRABHAS
      </h1>
      <div className="flex items-center justify-center gap-8 uppercase cursor-pointer ">

      <span
        className={`text-3xl first-letter:text-5xl underline underline-offset-8 decoration-sky-500`}
        >
      Bio
      </span>
      <span
        className={`text-3xl first-letter:text-5xl underline underline-offset-8 decoration-sky-500`}
        >
      Stack
      </span>
      <span
        className={`text-3xl first-letter:text-5xl underline underline-offset-8 decoration-sky-500`}
        >
      Projects
      </span>
        </div>
     
    </div>
  );
}
