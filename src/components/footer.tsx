import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "./icons";

const hoverLinkStyles = "hover:underline underline-offset-2";

export function Footer() {
  return (
    <footer className="border-t-2 border-primary">
      <article className="container flex flex-col py-6 gap-x-8 gap-y-4 lg:flex-row lg:justify-between lg:py-4">
        <section className="flex flex-col lg:flex-row gap-x-2 gap-y-4 lg:items-center">
          <Link href={"/"} title="CodeRacer Home">
            <Icons.logo width={36} height={36} />
          </Link>
          <p>
            Built by&nbsp;
            <Link
              href={siteConfig.links.codyTwitter}
              target="_blank"
              title="See Web Dev Cody's Twitter"
              rel="noreferrer"
              className={`font-medium text-primary ${hoverLinkStyles}`}
            >
              Cody
            </Link>
            &nbsp; & his community.
          </p>
          <p>
            The source code is available on&nbsp;
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={`font-medium text-primary ${hoverLinkStyles}`}
            >
              Github.
            </Link>
          </p>
        </section>

        <section
          data-name="legal-links"
          className="text-sm flex flex-wrap flex-row gap-4 lg:items-center"
        >
          <Link
            href={"/privacy"}
            title="See our privacy policy."
            className={hoverLinkStyles}
          >
            Privacy
          </Link>
          <Link
            href={"/terms"}
            title="See our terms & conditions"
            className={hoverLinkStyles}
          >
            Terms
          </Link>
          <Link
            href={"/about"}
            title="See what this website is about"
            className={hoverLinkStyles}
          >
            About
          </Link>
        </section>
      </article>
      {/* <article className="container flex flex-col items-center justify-center gap-4 py-5 lg:h-16 lg:flex-row lg:py-0">
        <section className="flex flex-col items-center gap-4 lg:justify-between lg:flex-row lg:gap-2 lg:px-0">
          <Link href="/">
            <Icons.logo width={36} height={36} />
          </Link>
          <p className="text-sm leading-loose text-center lg:text-left">
            Built by{" "}
            <Link
              href={siteConfig.links.codyTwitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Cody
            </Link>{" "}
            & his community. The source code is available on{" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </section>

        <div className="text-center mb-2">
          <Link href={"/privacy"} className="text-xs font-medium">
            Privacy Policy
          </Link>
        </div>
      </article> */}
    </footer>
  );
}
