export const EventDate = () => {
  return (
    <section className="bg-tertiary px-4 py-3 relative">
      <div className="p-2 mt-10 -mb-11 flex gap-10 items-center justify-center relative z-10">
        <span className=" font-normal px-10 py-2 bg-orange-bg rounded-full text-white text-4xl font-thunderhouse flex items-center justify-center max-w-60">
          INÍCIO: 12H
        </span>
        <span className="px-5 py-2 bg-orange-bg rounded-full text-white text-4xl font-thunderhouse font-normal flex items-center justify-center max-w-140">
          ENCERRAMENTO PREVISTO: 00H
        </span>
      </div>
    </section>
  );
};
