# How to use SomPlanner

Choose **one** option:

- **[Option 1: Claude in Chrome](#option-1-claude-in-chrome)**: the easiest; recommended for most parents.
- **[Option 2: Claude Code](#option-2-claude-code)**: for people who use a terminal.

## What you need

- Your **[Somtoday](https://som.today/) login** for the student portal, <https://leerling.somtoday.nl>
- A **Claude account** on a plan that supports Skills ([claude.ai](https://claude.ai))
- **Google Chrome**

> 💡 **Best time to run it: Friday or the weekend.** The school week is then finished, so you get a clean plan for the next two weeks.

---

## Option 1: Claude in Chrome

### Set up (once)

1. **Install Claude in Chrome**: add the Claude extension to Chrome and sign in.
2. **Download the skill**: click 👉 **[somtoday-study-plan.zip](https://github.com/viralypatel/SomPlanner/releases/latest/download/somtoday-study-plan.zip)**. Don't unzip it.
3. **Upload it**: in [claude.ai](https://claude.ai), go to **Settings → Capabilities → Skills**, click **Upload skill**, choose the downloaded zip, and switch it **on**.

### Make a plan

1. Open <https://leerling.somtoday.nl/studiewijzer> in Chrome and log in.
2. Open Claude in that tab.
3. Type **`Make the study plan`**.
4. Wait a few minutes while Claude reads the next two weeks.
5. Copy the plan to WhatsApp. See [Send it on WhatsApp](#send-it-on-whatsapp).

---

## Option 2: Claude Code

### Set up (once)

1. **Install** [Node.js](https://nodejs.org) and [Claude Code](https://claude.com/claude-code).
2. **Install the browser tool** the skill uses. Run in a terminal:
   ```bash
   npm i -g agent-browser
   agent-browser install
   ```
3. **Download this project**:
   ```bash
   git clone https://github.com/viralypatel/SomPlanner.git
   cd SomPlanner
   ```
4. **Add your school**: copy `config.example.json` to a new file called `config.local.json` and put in your school's name as it appears on the Somtoday login page:
   ```json
   { "school": "My School - CITY" }
   ```

### Make a plan

1. In the `SomPlanner` folder, run `claude`.
2. Type **`Make the study plan`**.
3. **First time only:** a browser window opens on the Somtoday login page. Log in, and Claude takes over.
4. The plan is saved in the `plans` folder, for example `plans/2026-W44-30Oct2026.md`.

Next time you won't need to log in, unless Somtoday has logged you out.

---

## Send it on WhatsApp

- Copy everything **above the `---` line** and paste it into WhatsApp.
- Below the line are the full details, for you to check. You don't need to send them.

| Icon | Meaning |
|---|---|
| 📝 | Homework, due on the day after `→` |
| 📖 | Study for a test on the day after `→` |
| 🧪 | Test today |
| 🎒 | Bring to school |
| 🔥 | Important test |

---

## Other things you can ask

- `Make the study plan starting Monday`
- `Make it 2 hours on Saturday`
- `Move the wiskunde homework to Sunday`

---

## Problems?

| Problem | Fix |
|---|---|
| Can't find **Skills** in claude.ai settings | Under **Settings → Capabilities**, turn on **Code execution and file creation** first. |
| Claude doesn't use the skill | Start a new chat. In claude.ai, check the skill is switched on. |
| "agent-browser not found" | Run `npm i -g agent-browser` and `agent-browser install`. |
| School not found on the login page | Check the school name in `config.local.json`. |
| Asked to log in again | Somtoday logged you out. Just log in again. |
| Something is missing or wrong | Check Somtoday, and please [open an issue](../../issues). |

---

## Updating

- **Option 1:** download the [latest zip](https://github.com/viralypatel/SomPlanner/releases/latest/download/somtoday-study-plan.zip) and upload it again in claude.ai. It replaces the old one.
- **Option 2:** run `git pull` in the `SomPlanner` folder.
