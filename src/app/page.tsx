import Image from "next/image";
import { DM_Sans, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const HERO_BACKGROUND = "/bg.avif";
const MED_LOGO = "/logo.png";
const NAV_BUILDINGS = "/navbuildings.png";

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f5f5f3]">
      <header className="relative z-20 w-full overflow-hidden border-b border-[#e8e4dc]/70 py-3 sm:py-4 lg:py-5">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#faf9f7] via-[#f5f5f3] to-[#ebe8e2]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(232,228,220,0.55)_0%,rgba(245,245,243,0)_24%,rgba(245,245,243,0)_76%,rgba(232,228,220,0.55)_100%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b from-transparent to-[#1e2356]/[0.04]"
        />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 overflow-hidden sm:w-20 md:w-24 lg:w-28">
            <Image
              src={NAV_BUILDINGS}
              alt=""
              fill
              className="-translate-x-[46%] object-cover object-left opacity-80"
              sizes="112px"
            />
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-10 hidden w-20 overflow-hidden min-[390px]:block sm:left-14 sm:w-24 md:left-20 md:w-28 lg:left-24">
            <Image
              src={NAV_BUILDINGS}
              alt=""
              fill
              className="-translate-x-[40%] object-cover object-left opacity-65"
              sizes="112px"
            />
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-10 hidden w-20 overflow-hidden min-[390px]:block sm:right-14 sm:w-24 md:right-20 md:w-28 lg:right-24">
            <Image
              src={NAV_BUILDINGS}
              alt=""
              fill
              className="-translate-x-[34%] object-cover object-right opacity-65"
              sizes="112px"
            />
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 overflow-hidden sm:w-20 md:w-24 lg:w-28">
            <Image
              src={NAV_BUILDINGS}
              alt=""
              fill
              className="-translate-x-[30%] object-cover object-right opacity-80"
              sizes="112px"
            />
          </div>
          <div className="relative z-30 flex items-center justify-center">
            <Image
              src={MED_LOGO}
              alt="MED Projects logo"
              width={329}
              height={96}
              priority
              className="h-auto w-[180px] max-w-[62vw] object-contain sm:w-[220px] md:w-[250px] lg:w-[280px]"
            />
          </div>
        </div>
      </header>

      <section className="relative flex-1">
        <Image
          src={HERO_BACKGROUND}
          alt=""
          fill
          priority
          className="object-cover object-[58%_center] md:object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(30, 35, 86, 0.86) 38%, rgba(74, 78, 107, 0.62) 78%)",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-full w-full max-w-7xl items-center px-5 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="w-full max-w-[44rem] space-y-4 sm:space-y-5 lg:space-y-6">
            <p
              className={`${montserrat.className} text-xs font-semibold tracking-[0.12em] text-[#c8302a] sm:text-sm`}
            >
              LAND DEVELOPMENT · HYDERABAD
            </p>
            <h1
              className={`${montserrat.className} text-4xl font-bold leading-[1.12] text-[#f5f5f3] sm:text-[2.65rem] md:text-5xl lg:text-6xl`}
            >
              <span className="block sm:hidden">
                Low density development in Hyderabad&apos;s South-East corrididor
              </span>
              <span className="hidden whitespace-nowrap sm:block">
                Low density development in Hyderabad&apos;s
              </span>
              <span className="hidden whitespace-nowrap sm:block">
                South-East corrididor
              </span>
            </h1>
            <p
              className={`${dmSans.className} max-w-[38rem] text-base font-normal leading-relaxed text-[#f5f5f3] lg:text-lg`}
            >
              A family-owned land development company crafting thoughtfully planned
              plots in Ibrahimpatnam, Telangana — built for the next generation.
            </p>
            <div className="pt-2 sm:pt-3">
              <span
                className={`${montserrat.className} inline-flex h-12 items-center justify-center rounded-xl bg-[#c8302a] px-7 text-lg font-bold leading-none text-[#f5f5f3] sm:h-[50px] sm:px-8 sm:text-xl`}
                role="status"
                aria-label="Coming soon"
              >
                COMING SOON
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#e8e4dc] bg-[#f5f5f3]">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-1 px-5 py-3 sm:flex-row sm:gap-4 sm:px-6 sm:py-3.5 lg:px-8">
          <p className={`${dmSans.className} text-xs text-[#4a4e6b] sm:text-sm`}>
          © {new Date().getFullYear()} MED Projects
          </p>
          <p className={`${dmSans.className} text-xs text-[#4a4e6b] sm:text-sm`}>
            Hyderabad, Telangana
          </p>
        </div>
      </footer>

      <section className="sr-only">
        <h1>
          Low density development in Hyderabad&apos;s South-East corrididor
        </h1>
        <p>
          LAND DEVELOPMENT · HYDERABAD
          {" - "}
          A family-owned land development company crafting thoughtfully planned
          plots in Ibrahimpatnam, Telangana — built for the next generation.
        </p>
        <p>
          COMING SOON
        </p>
      </section>
    </main>
  );
}
