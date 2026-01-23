import { getCollection } from "astro:content";
import chalk from "chalk";
import figlet from "figlet";

export function makeBanner(): string {
  let b: string = ""; // b is the body
  b += chalk.bold.white(figlet.textSync("Team SMP"));
  b += `\r     ${chalk.dim("UNITE · SURVIVE · THRIVE")}             ${chalk.cyan("CLI")}`;

  return b;
}

export async function getHeadline() {
  const posts = await getCollection("news");
  posts.sort((a, b) => b.data.date.localeCompare(a.data.date));
  const post = posts[0];

  return post;
}

export function wrap(
  text: string,
  width: number,
  firstLinePrefix: string,
  otherLinesPrefix: string
): string {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = "";

  for (const word of words) {
    const currentWidth =
      lines.length === 0
        ? width - firstLinePrefix.length
        : width - otherLinesPrefix.length;

    if ((line + word).length > currentWidth) {
      lines.push(line.trimEnd());
      line = "";
    }
    line += word + " ";
  }

  if (line) lines.push(line.trimEnd());

  return lines
    .map((l, i) => (i === 0 ? firstLinePrefix + l : otherLinesPrefix + l))
    .join("\n");
}
