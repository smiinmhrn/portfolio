import mypicture from "@/assets/main/samin.png";
import parachute from "@/assets/main/parachute-40.png";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-2.5 px-5 py-10">
      <div className="flex flex-col items-center text-center order-1 lg:order-2">
        <h1
          className="kalam-text mb-10 lg:mb-20 text-3xl sm:text-4xl font-bold text-white"
          style={{
            textShadow: "3px 3px 0px #D06167",
          }}
        >
          Well This is me. Im{" "}
          <span
            className="text-[#D06167] text-4xl sm:text-5xl"
            style={{
              textShadow: "3px 3px 0px black",
            }}
          >
            Samin !
          </span>
        </h1>

        <img
          src={mypicture}
          alt="me"
          className="w-full max-w-2xl lg:w-3xl -rotate-6"
        />
      </div>

      {/* Front-end + parachute */}
      <div className="kalam-text text-center order-2 lg:order-1">
        <h1
          className="text-3xl sm:text-5xl text-white"
          style={{
            textShadow: "3px 3px 0px #D06167",
          }}
        >
          I am a{" "}
          <span
            className="block text-5xl sm:text-7xl font-bold text-[#D06167]"
            style={{
              textShadow: "3px 3px 0px black",
            }}
          >
            FRONT-END
            <br className="sm:hidden" /> DEVELOPER
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-10 lg:mt-20">
          <p className="text-xl sm:text-2xl">
            Wanna know more? Jump and Scroll.
          </p>

          <img src={parachute} alt="parachute" className="w-48 sm:w-62.5" />
        </div>
      </div>
    </div>
  );
}
