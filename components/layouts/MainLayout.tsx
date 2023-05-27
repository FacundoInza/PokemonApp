import Head from "next/head";
import React from "react";
import { Navbar } from "../ui";
import { useRouter } from "next/router";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const oringin = typeof window === "undefined" ? "" : window.location.origin;

export const MainLayout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Facundo Inza" />
        <meta name="description" content={`Info about Pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex, ash`} />
        <meta property="og:title" content={`Info about Pokemon ${title}`} />
        <meta
          property="og:description"
          content={`This is the page about ${title}`}
        />
        <meta property="og:image" content={`${oringin}/img/016banner.png`} />
      </Head>

      <Navbar />
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
