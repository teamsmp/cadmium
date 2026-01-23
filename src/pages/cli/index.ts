import type { APIRoute } from "astro";
import chalk from "chalk";
import * as utils from "../../lib/cli";

export const prerender = false;

export const GET: APIRoute = async () => {
  const headline = await utils.getHeadline();

  let b: string = "\n"; // b is the body
  b += utils.makeBanner();
  b += utils.wrap(
    "The Team SMP is a public survival Minecraft server run by XxDreamXxXx and JunglTemple.",
    55,
    "\n\n",
    ""
  );

  b += `\n\n${chalk.bold.yellow("LATEST NEWS")} ${chalk.bold(headline.data.title)}`;
  b += utils.wrap(headline.data.summary, 55, "\n └ ", "   ");

  b += `\n\n - ${chalk.bold("JOIN THE SERVER")}  ${chalk.green("teamsmp.uk/join")}`;
  b += `\n - ${chalk.bold("ABOUT US")}         ${chalk.green("teamsmp.uk/about")}`;
  b += `\n - ${chalk.bold("NEWS")}             ${chalk.green("teamsmp.uk/news")}`;

  b +=
    "\n\n" +
    chalk.bgYellow.black.bold(
      " The CLI version of this website \n is still work-in-progress! :)   "
    );

  b += "\n";

  return new Response(b);
};
