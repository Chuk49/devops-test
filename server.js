import express from "express";
import fs from "fs/promises";
import path from "path";

const app = express();
const DATA_FILE = path.resolve("./visits.json");
app.use(express.urlencoded({ extended: false }));

async function readStore() {
  try {
    return JSON.parse(await fs.readFile(DATA_FILE, "utf8"));
  } catch (e) {
    if (e.code === "ENOENT") return { users: {} };
    throw e;
  }
}
async function writeStore(store) {
  const tmp = DATA_FILE + ".tmp";
  await fs.writeFile(tmp, JSON.stringify(store), "utf8");
  await fs.rename(tmp, DATA_FILE);
}
const norm = s => s.trim().toLowerCase();

app.all("/", async (req, res) => {
  if (req.method === "POST") {
    const raw = req.body.name || "";
    const name = norm(raw);
    if (!name) return res.type("text/plain").send("");
    const store = await readStore();
    const prev = store.users[name] || 0;
    store.users[name] = prev + 1;
    await writeStore(store);
    return res.type("text/plain").send(prev === 0 ? "hello" : "world");
  }

  res.type("html").send(`<!doctype html>
<meta charset="utf-8">
<script>
  (async function () {
    function getCookie(n){return document.cookie.split("; ").find(r=>r.startsWith(n+"="))?.split("=")[1]}
    const name = getCookie("name") ? decodeURIComponent(getCookie("name")) : prompt("Name");
    if(!name){document.body.textContent=""; return;}
    const body = new URLSearchParams(); body.set("name", name);
    const r = await fetch("/", {method:"POST", headers:{"Content-Type":"application/x-www-form-urlencoded"}, body: body.toString()});
    document.body.textContent = await r.text();
    document.cookie = "name="+encodeURIComponent(name)+"; Path=/; SameSite=Lax";
  })();
</script>`);
});

app.listen(3000);
