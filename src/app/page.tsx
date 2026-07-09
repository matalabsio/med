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
      <header className="relative z-20 w-full overflow-hidden border-b border-[#e8e4dc]/70 py-1 sm:py-1.5">
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
          <div className="pointer-events-none absolute bottom-[-1px] left-0 h-[72px] w-[88px] overflow-hidden sm:h-[84px] sm:w-[104px] md:h-[92px] md:w-[120px] lg:h-[104px] lg:w-[138px]">
            <Image
              src={NAV_BUILDINGS}
              alt=""
              fill
              className="-translate-x-[42%] scale-125 object-cover object-bottom opacity-95"
              sizes="112px"
            />
          </div>
          <div className="pointer-events-none absolute bottom-[-1px] left-12 hidden h-[68px] w-[96px] overflow-hidden min-[390px]:block sm:left-16 sm:h-[78px] sm:w-[112px] md:left-20 md:h-[88px] md:w-[126px] lg:left-24 lg:h-[96px] lg:w-[140px]">
            <Image
              src={NAV_BUILDINGS}
              alt=""
              fill
              className="-translate-x-[38%] scale-125 object-cover object-bottom opacity-84"
              sizes="112px"
            />
          </div>
          <div className="pointer-events-none absolute bottom-[-1px] right-12 hidden h-[68px] w-[96px] overflow-hidden min-[390px]:block sm:right-16 sm:h-[78px] sm:w-[112px] md:right-20 md:h-[88px] md:w-[126px] lg:right-24 lg:h-[96px] lg:w-[140px]">
            <Image
              src={NAV_BUILDINGS}
              alt=""
              fill
              className="-translate-x-[34%] scale-125 object-cover object-bottom opacity-84"
              sizes="112px"
            />
          </div>
          <div className="pointer-events-none absolute bottom-[-1px] right-0 h-[72px] w-[88px] overflow-hidden sm:h-[84px] sm:w-[104px] md:h-[92px] md:w-[120px] lg:h-[104px] lg:w-[138px]">
            <Image
              src={NAV_BUILDINGS}
              alt=""
              fill
              className="-translate-x-[27%] scale-125 object-cover object-bottom opacity-95"
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
              className="h-auto w-[178px] max-w-[60vw] object-contain sm:w-[210px] md:w-[235px] lg:w-[260px]"
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
              <span className="block md:whitespace-nowrap">
                Low density development
              </span>
              <span className="block md:whitespace-nowrap">
                in Hyderabad&apos;s
              </span>
              <span className="block md:whitespace-nowrap">
                South-East corridor
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
