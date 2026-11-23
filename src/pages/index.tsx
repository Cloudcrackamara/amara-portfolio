import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BackToTop } from "@/components/ui/BackToTop";
import { NavPills } from "@/components/layout/NavPills";
import { Sidebar } from "@/components/layout/Sidebar";
import { Approach } from "@/components/sections/Approach";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Resume } from "@/components/sections/Resume";
import { Services } from "@/components/sections/Services";
import { SkillsStrip } from "@/components/sections/SkillsStrip";
import { Stack } from "@/components/sections/Stack";
import { StatusPanel } from "@/components/sections/StatusPanel";
import { Work } from "@/components/sections/Work";
import { featuredRepoNames } from "@/data/projects";
import { getGitHubData, type GitHubData } from "@/lib/github";

const title = "Amarachi Ekwebelem — Software Engineering & Cloud/DevOps";
const description =
  "I build practical software applications, engineer the infrastructure behind them, and automate the processes that make them reliable in production.";

export const getStaticProps = (async () => {
  const github = await getGitHubData(featuredRepoNames);
  // Re-check GitHub at most once an hour, so new repos and contributions appear on their own.
  return { props: { github }, revalidate: 3600 };
}) satisfies GetStaticProps<{ github: GitHubData }>;

export default function Home({ github }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/images/me-desk.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <NavPills />
      <main id="main">
        <Hero />
        <StatusPanel />
        <SkillsStrip />
        <div className="mx-auto max-w-[1200px] px-[clamp(20px,4vw,40px)]">
          <Work latest={github.latest} />
        </div>
        <div className="mx-auto flex max-w-[1200px] flex-wrap gap-12 px-[clamp(20px,4vw,40px)]">
          <div className="flex min-w-0 flex-[999_1_620px] flex-col">
            <Stack />
            <Approach />
          </div>
          <Sidebar recent={github.recent} contributions={github.contributions} />
        </div>
        <div className="mx-auto max-w-[1200px] px-[clamp(20px,4vw,40px)]">
          <Services />
          <Resume />
        </div>
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
