import RsvpForm from "@/components/RsvpForm";

export default function Home() {
  return (
    <main>
      {/*hero and logo section with back ground*/}
      <section className="relative px-6 md:px-[100px] min-h-[600px] md:h-screen w-full flex flex-col justify-center py-20">
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/images/hero-bg.png"
            alt="hero"
            className="w-full h-full object-cover object-right md:object-center"
          />
        </div>

        <img
          src="/images/new_logo 2.png"
          alt="logo"
          className="absolute left-6 top-8 md:left-[100px] md:top-[55px] w-[150px] md:w-[280px] z-50"
        />

        <div className="relative z-10 flex flex-col gap-6 mt-16 md:mt-24">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="w-fit px-6 py-2 rounded-[6px] bg-[#00FFFF] shadow-lg">
              <span className="text-[16px] md:text-[25px] font-bold text-gray-900">
                Invite-Only
              </span>
            </div>
            <span className="text-[20px] md:text-[24px] font-bold text-[#00FFFF] drop-shadow-lg">
              An Executive Roundtable · Lunch
            </span>
          </div>

          <h1 className="flex flex-col">
            <span className="text-[32px] md:text-[46px] font-black leading-tight text-[#F5AB40] drop-shadow-2xl">
              The Skills That Matter Next:
            </span>
            <span className="text-[32px] md:text-[46px] font-medium leading-tight text-[#F5AB40] drop-shadow-2xl">
              Preparing Your Workforce & Leaders for the AI Era
            </span>
          </h1>

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-4 text-white">
              <img
                src="/images/calender-vector.png"
                alt="cal"
                className="w-6 md:w-8"
              />
              <span className="text-[18px] md:text-[30px] font-black">
                February 20, 2026
              </span>
            </div>
            <div className="flex items-center gap-4 text-white">
              <img
                src="/images/location-vector.png"
                alt="loc"
                className="w-6 md:w-8"
              />
              <span className="text-[18px] md:text-[30px] font-black">
                Chamberlain’s Steak & Fish House, Dallas
              </span>
            </div>
          </div>
        </div>
      </section>
      {/*second section*/}
      <section className="bg-white px-6 md:px-[100px] py-16 md:py-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <RsvpForm formId="first" variant="dark" />
          <div className="space-y-6 text-[18px] md:text-[27px] font-medium leading-relaxed">
            <p>
              AI is accelerating change across every operational layer. Roles
              are shifting. Leadership models are collapsing and reforming.
            </p>
            <p>
              But even the most advanced enterprises are asking the same
              question:
            </p>
          </div>
          <div className="text-center py-8">
            <span className="text-[22px] md:text-[40px] font-black leading-tight">
              Which capabilities will matter most, and how do we build them at
              scale?
            </span>
          </div>
          <p className="text-[18px] md:text-[27px] font-medium">
            This invite-only roundtable gathers CHROs, CLOs, and enterprise
            workforce leaders for a candid discussion.
          </p>
        </div>
      </section>
      {/*3rd section*/}
      <section className="relative bg-[#CDDCFB80] min-h-[1140px] md:min-h-screen px-[20px] py-[30px] md:py-[43px] md:px-[100px] min-w-screen">
        <div className="absolute px-4">
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="text-[#F5AB40] text-[24px] md:text-[40px] font-black leading-none">
                What We’ll Explore
              </div>
              <div className="text-black py-2 text-[15px] md:text-[25px] font-medium leading-none ">
                The critical shifts every enterprise must plan for:
              </div>
            </div>
            <div className="flex flex-col gap-3 md:gap-8">
              <div className="flex flex-col md:flex-row gap-3 md:gap-8 items-center">
                <div className="flex flex-col w-[390px] h-[151px] md:w-[390px] md:h-[203px] bg-white rounded-[8px] drop-shadow-xl">
                  <div className="flex gap-4 px-4 py-6 md:px-[32px] md:py-[32px]">
                    <img
                      src="/images/history-vector.png"
                      alt="skills-decay"
                      className="w-[30px] h-[30px] md:w-[36px] md:h-[36px]"
                    />
                    <span className="text-[20px] md:text-[24px] font-bold md:leading-[30px]">
                      Skills Decay
                    </span>
                  </div>
                  <p className="px-4 md:px-[32px] md:top-[94px] text-[16px] md:text-[22px] font-medium left-[32px]">
                    every 2-3 years <br />
                    faster for technical skills
                  </p>
                </div>
                <div className="flex flex-col w-[390px] h-[151px] md:w-[390px] md:h-[203px] bg-white rounded-[8px] drop-shadow-xl">
                  <div className="flex gap-4 px-4 py-6 md:px-[32px] md:py-[32px]">
                    <img
                      src="/images/orchestrating-vector.png"
                      alt="orchestrating"
                      className="w-[33.33px] h-[30px] md:w-[40px] md:h-[36px]"
                    />
                    <span className="text-[20px] md:text-[24px] font-bold leading-[30px]">
                      Manager Role Shift
                    </span>
                  </div>
                  <p className="px-4 md:px-[32px] md:top-[94px] text-[16px] md:text-[22px] font-medium left-[32px]">
                    orchestrating
                    <br /> people + AI agents
                  </p>
                </div>
                <div className="flex flex-col w-[390px] h-[151px] md:w-[390px] md:h-[203px] bg-white rounded-[8px] drop-shadow-xl">
                  <div className="flex gap-4 px-4 py-6 md:px-[32px] md:py-[32px]">
                    <img
                      src="/images/leader-vector.png"
                      alt="leaders"
                      className="w-[30px] h-[30px] md:w-[36px] md:h-[36px]"
                    />
                    <span className="text-[20px] md:text-[24px] font-bold leading-[30px]">
                      Leaders + AI Copilots
                    </span>
                  </div>
                  <p className="px-4 md:px-[32px] md:top-[94px] text-[16px] md:text-[22px] font-medium left-[32px]">
                    requires sensemaking
                    <br /> and systems thinking
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3 md:gap-8 items-center top-[410px] ">
                <div className="flex flex-col w-[390px] h-[151px] md:w-[390px] md:h-[203px] bg-white rounded-[8px] drop-shadow-xl">
                  <div className="flex gap-4 px-4 py-6 md:px-[32px] md:py-[32px]">
                    <img
                      src="/images/front-vector.png"
                      alt="frontline"
                      className="w-[26px] h-[33px] md:w-[32px] md:h-[40px]"
                    />
                    <span className="text-[20px] md:text-[24px] font-bold leading-[30px]">
                      Frontline Capability
                    </span>
                  </div>
                  <p className="px-4 md:px-[32px] md:top-[94px] text-[16px] md:text-[22px] font-medium left-[32px]">
                    now depends
                    <br /> on digital fluency
                  </p>
                </div>
                <div className="flex flex-col w-[390px] h-[151px] md:w-[390px] md:h-[203px] bg-white rounded-[8px] drop-shadow-xl">
                  <div className="flex gap-4 px-4 py-6 md:px-[32px] md:py-[32px]">
                    <img
                      src="/images/core-vector.png"
                      alt="core"
                      className="w-[35px] h-[31px] md:w-[40px] md:h-[36px]"
                    />
                    <span className="text-[20px] md:text-[24px] font-bold leading-[30px]">
                      Core Human Capabilities
                    </span>
                  </div>
                  <p className="px-4 md:px-[32px] md:top-[94px] text-[16px] md:text-[22px] font-medium left-[32px]">
                    analytical reasoning
                    <br /> and scenario planning
                  </p>
                </div>
                <div className="flex flex-col w-[390px] h-[151px] md:w-[390px] md:h-[203px] bg-white rounded-[8px] drop-shadow-xl">
                  <div className="flex gap-4 px-4 py-6 md:px-[32px] md:py-[32px]">
                    <img
                      src="/images/winning-vector.png"
                      alt="winnings"
                      className="w-[33px] h-[33px] md:w-[40px] md:h-[40px]"
                    />
                    <span className="text-[20px] md:text-[24px] font-bold leading-[30px]">
                      Winning Organizations
                    </span>
                  </div>
                  <p className="px-4 md:px-[32px] md:top-[94px] text-[16px] md:text-[22px] font-medium left-[32px]">
                    predict skills
                    <br /> ahead of demand
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*4th section */}
      <section className="relative py-[30px] px-[40px] md:py-[43px] md:px-[100px] h-[1769px] sm:h-[1769px] md:h-[1564px] bg-gradient-to-b from-[#1D4DF4] to-[#112D8E] min-w-screen">
        <div className="absolute">
          <div className="text-[24px] py-4 md:text-[40px] font-black text-[#F5AB40]">
            Featured Speakers
          </div>
          <div className="flex flex-col gap-1 md:gap-8 w-full max-w-md">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-6 md:min-w-screen mx-auto p-4">
              <img
                src="/images/RobLauber 1.png"
                alt="RobLauber"
                className="w-[192px] h-[183px] md:w-[340px] md:h-[325px] rounded-[8px] object-cover"
              />
              <div className="md:w-[850px] md:max-w-none md:px-[20px]">
                <h3 className="text-[22px] text-center md:text-start md:text-[30px] font-black text-[#00FFFF] mb-1">
                  Rob Lauber
                </h3>
                <p className="text-[15px] text-center md:text-start md:text-[24px] font-medium text-white leading-[25px] md:leading-[35px]">
                  Rob Lauber is a global workforce and capability-building
                  leader with over 25 years of experience helping organizations
                  prepare leaders and frontline teams for change. Most recently,
                  he served as SVP and Chief Learning Officer at McDonald’s,
                  leading learning and development across 37,000+ restaurants
                  worldwide. His perspective is especially relevant as
                  organizations rethink leadership and capability models in the
                  age of AI.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-8 md:min-w-screen mx-auto p-4">
              <img
                src="/images/KrishnaKumar.png"
                alt="KrishnaKumar"
                className="w-[192px] h-[183px] md:w-[340px] md:h-[325px]"
              />
              <div className="md:w-[850px] md:max-w-none md:px-[20px]">
                <h3 className="text-[22px] text-center md:text-start md:text-[30px] font-black text-[#00FFFF] mb-1">
                  Krishna Kumar
                </h3>
                <p className="text-[15px] md:text-[24px] text-center md:text-start font-medium text-white leading-[25px] md:leading-[35px]">
                  Krishna Kumar is the Founder and CEO of Simplilearn, working
                  closely with enterprises navigating workforce transformation
                  driven by AI and digital change. At the center of the learning
                  and skills ecosystem, he brings a unique perspective on how
                  roles, leadership expectations, and capabilities are evolving
                  across industries. Through direct engagement with enterprise
                  leaders and education partners, he sees what scales, and what
                  doesn’t, in building workforce readiness for the AI era,
                  offering a cross-enterprise view of the priorities shaping
                  workforce strategy today.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-8 md:min-w-screen mx-auto p-4">
              <img
                src="/images/SudiptoMitra.png"
                alt="SudiptoMitra"
                className="w-[192px] h-[183px] md:w-[340px] md:h-[325px]"
              />
              <div className="md:w-[850px] md:max-w-none md:px-[20px]">
                <h3 className="text-[22px] text-center md:text-start md:text-[30px] font-black text-[#00FFFF] mb-1">
                  Sudipto Mitra
                </h3>
                <p className="text-[15px] text-center md:text-start md:text-[24px] font-medium text-white leading-[25px] md:leading-[35px]">
                  Sudipto Mitra is a senior transformation and growth leader
                  with over 20 years of experience helping enterprises navigate
                  large-scale change across technology, operations, and talent.
                  As Chief Revenue Officer at Simplilearn, he works with
                  executive teams to address workforce capability gaps as AI
                  reshapes roles and operating models. He previously held
                  leadership roles at Accenture, IBM Consulting, and WorkFusion.
                </p>
              </div>
            </div>
            <div
              className="w-[389px] h-[195px] rounded-[8px] md:w-[1240px] md:h-[224px] relative "
              style={{
                backgroundImage: `url(${"/images/try-SLH+.png"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-col gap-2 pl-4 pt-4 md:gap-1 md:pl-[86px] md:pt-[36px]">
                <span className="md:top-[36px] md:left-[86px] font-black text-[20px] md:text-[30px] leading-none text-[#00FFFF]">
                  Additional Expert Perspectives
                </span>
                <span className="md:top-[77px] md:left-[86px] font-medium text-[15px] md:text-[24px] text-white leading-[25px] md:leading-[35px]">
                  Invited experts from leading consulting and enterprise
                  learning organizations will contribute short perspectives,
                  offering insight into how large organizations are evolving
                  skills and leadership models in the AI era.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative px-6 py-10 md:py-[58px] md:px-[100px] min-h-screen md:h-auto overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-12">
          <div className="flex flex-col gap-6 w-full md:w-3/5">
            <h2 className="px-4 text-[24px] md:text-[40px] font-black leading-tight md:leading-[50px] text-[#F5AB40]">
              Go behind the curtain with real
              <br /> examples and high-scale insights
            </h2>

            <div className="px-4 text-[20px] md:text-[25px] font-medium text-white">
              You’ll walk away with:
            </div>
            <div className="flex flex-col gap-7">
              {[
                "A clear view of the leadership & workforce capabilities that will matter most over the next 24-36 months.",
                "Insights from high-scale operating environments including the former CLO of McDonald’s on what truly scales and what breaks under pressure.",
                "Signals for where capability gaps may already be forming in your organization.",
                "Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems at scale.",
                "Actionable insights you can take straight into your next exec meeting.",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="px-4 flex flex-row gap-5 items-stretch"
                >
                  <div className="w-[3px] bg-[#F5AB40] shrink-0"></div>
                  <p className="text-[16px] md:text-[20px] font-medium text-black leading-relaxed max-w-2xl">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center">
              <RsvpForm formId="Second" variant="dark" />
            </div>
          </div>

          <div className="w-full md:w-2/5 flex justify-center">
            <img
              src="/images/checkmate.png"
              alt="checkmate"
              className="w-full max-w-[350px] md:max-w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="relative px-4 py-10 md:py-[43px] md:px-[100px] min-h-fit bg-[#00FFFF] w-full flex justify-center">
        <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto">
          <div className="text-[24px] md:text-[40px] font-black text-[#1D4DF4]">
            Event Agenda
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Welcome & Opening",
                name: "Sudipto Mitra, CRO Simplilearn",
                desc: "Why capability-building is now a board-level issue and what's changing in the workforce landscape.",
              },
              {
                title: (
                  <>
                    Keynote:
                    <br className="hidden lg:block" /> What Enterprise Leaders
                    Are Seeing on the Ground
                  </>
                ),
                name: "Rob Lauber, Former CLO McDonald's",
                desc: "A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries.",
              },
              {
                title: "Lunch & Executive Conversation",
                name: "Industry Experts Invited",
                desc: "What large enterprise talent ecosystems are learning about capability-building at scale.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="flex flex-col w-full bg-white rounded-[8px] p-6 lg:p-8 shadow-sm min-h-[250px] lg:h-[350px]"
              >
                <h3 className="text-[18px] lg:text-[22px] font-black text-[#1D4DF4] leading-tight mb-4">
                  {card.title}
                </h3>
                <div className="mt-auto">
                  <p className="text-[15px] lg:text-[18px] font-bold leading-tight mb-2">
                    {card.name}
                  </p>
                  <p className="text-[14px] lg:text-[16px] font-medium leading-relaxed text-gray-700">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden w-full min-h-[400px] md:h-[475px] px-4 py-8 md:px-[100px] md:py-[50px]">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/images/unnamed-1.png')",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        <div className="relative z-10 flex flex-col h-full justify-between gap-10">
          <div>
            <h2 className="text-[24px] px-4 md:text-[30px] font-black text-white">
              Space is limited.
            </h2>
            <div className="mt-6">
              <RsvpForm formId="last" variant="light" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4">
            <div className="px-4 w-[120px] md:w-[280px]">
              <img
                src="/images/new_logo 2.png"
                alt="logo"
                className="w-full object-contain"
              />
            </div>
            <p className="px-4 text-[12px] md:text-[18px] text-white opacity-80 max-w-full">
              © 2009-2025 - Simplilearn Solutions. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
