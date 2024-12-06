export default function ScrollIndicator() {
  return (
    <>
      <style>{`
      
            :root {
             animation: sync;
            animation-timeline: scroll();
             counter-reset: p var(--p);
            }

            @keyframes sync {
              to {
                --p: 100;
              }
            }
            .p::before {
              content: counter(p) "%";
            }
        `}</style>
      <div>
        <div className="h-1 bg-gradient-to-r from-cyan-500 to-cyan-600">
          <div className="h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 p-[var(--p)]"></div>
        </div>
      </div>
    </>
  );
}
