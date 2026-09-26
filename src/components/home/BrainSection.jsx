export default function BrainSection({ isVisible }) {
  return (
    <section
      className={`fixed inset-0 z-30 bg-black transition-opacity duration-1500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="h-full w-full flex items-center justify-center">
        {/* <h1 className="text-white text-6xl font-bold">INSIDE MY BRAIN</h1> */}
      </div>
    </section>
  );
}
