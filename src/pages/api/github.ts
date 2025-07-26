import fs from "fs/promises";
import path from "path";

const CACHE_FILE = path.resolve("cache/github.json");
const CACHE_DURATION = 1000 * 60 * 60 * 10;

export async function GET() {
  try {
    const stat = await fs.stat(CACHE_FILE);
    const now = Date.now();
    const modified = new Date(stat.mtime).getTime();

    if (now - modified < CACHE_DURATION) {
      const cached = await fs.readFile(CACHE_FILE, "utf-8");
      return new Response(cached, {
        headers: { "Content-Type": "application/json", "X-Cache": "HIT" },
      });
    }
  } catch (err) {
    // Cache file might not exist yet
  }

  const res = await fetch("https://api.github.com/users/malvin555/repos", {
    headers: {
      Authorization: `token ${import.meta.env.GITHUB_TOKEN}`,
    },
  });

  const repos = await res.json();

  await fs.mkdir(path.dirname(CACHE_FILE), { recursive: true });
  await fs.writeFile(CACHE_FILE, JSON.stringify(repos));

  return new Response(JSON.stringify(repos), {
    headers: { "Content-Type": "application/json", "X-Cache": "MISS" },
  });
}
