export const Band = () => {
  return (
    <div className="w-full bg-tertiary px-10 py-2 flex gap-8 items-center justify-center -rotate-1 overflow-hidden">
      {Array.from({ length: 10}).map((_, i) => (
        <>
          <strong key={i} className="text-6xl font-thunderhouse text-white text-nowrap">18 ANOS</strong>
          <strong className="text-6xl font-thunderhouse font-normal text-pink-bg">
            MAI
          </strong>
        </>
      ))}
    </div>
  );
};
