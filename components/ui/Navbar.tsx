import { Spacer, Text, useTheme, Link } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <Link href={"/"}>
        <Image
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          }
          alt="icono"
          width={70}
          height={70}
        />
      </Link>
      <NextLink href={"/"} passHref>
        <Link>
          <Text color="white" h3 css={{ paddingBottom: "6px" }}>
            P
          </Text>
          <Text>okemon</Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }}></Spacer>
      <NextLink href={"/favorites"}>
        <Link>
          <Text color="white">Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  );
};
