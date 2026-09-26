import mypicture from "@/assets/samin.png";
import parachute from "@/assets/parachute-40.png";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center gap-2.5">
      <div className="kalam-text">
        <h1
          className="text-5xl text-white"
          style={{
            textShadow: "3px 3px 0px #D06167",
          }}
        >
          I am a{" "}
          <span
            className="text-7xl font-bold text-[#D06167]"
            style={{
              textShadow: "3px 3px 0px black",
            }}
          >
            FRONT-END DEVELOPER
          </span>
        </h1>

        <div className="flex justify-center items-center gap-5 mt-20">
          <p className="text-2xl">Wanna know more? Jump and Scroll.</p>
          <img src={parachute} alt="parachute" className="w-62.5" />
        </div>
      </div>
      <div className="text-center">
        <h1
          className="kalam-text mb-20 text-4xl font-bold text-white"
          style={{
            textShadow: "3px 3px 0px #D06167",
          }}
        >
          Well This is me. Im{" "}
          <span
            className="text-[#D06167] text-5xl"
            style={{
              textShadow: "3px 3px 0px black",
            }}
          >
            Samin !
          </span>
        </h1>
        <img src={mypicture} alt="me" className="w-3xl -rotate-6" />
      </div>
    </div>
  );
}
