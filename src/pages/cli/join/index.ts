import type { APIRoute } from "astro";
import * as utils from "../../../lib/cli";
import chalk from "chalk";

export const prerender = true;

export const GET: APIRoute = async () => {
  let b: string = "\n";

  b += utils.makeBanner();

  b += utils.wrap(
    "Joining the Team SMP on Minecraft Java Edition is simple! Just copy the server IP into your game:",
    55,
    "\n\n",
    ""
  );
  b += `\n └ ${chalk.bold("mc.teamsmp.uk")}`;

  b += utils.wrap(
    "We strongly recommend playing the Team SMP on Java, but if you aren't able to, you can join using Bedrock edition",
    55,
    "\n\n",
    ""
  );
  b += `\n └ ${chalk.bold("ADDRESS")}  be.teamsmp.uk\n   ${chalk.bold("PORT")}     19132`;

  b += utils.wrap(
    "The Team SMP can also be played on console, but the system that is used for this usually does not work. If you must play on console, please [1] contact JunglTemple.",
    55,
    "\n\n",
    ""
  );

  b += `\n\n [1] ${chalk.green("teamsmp.uk/about")}`;

  return new Response(b);
};
