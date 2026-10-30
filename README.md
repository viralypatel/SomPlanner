# SomPlanner

A [Claude](https://claude.ai) skill that reads your child's **[Somtoday](https://som.today/) studiewijzer** and makes a two-week study plan you can send them on WhatsApp.

> A personal project, shared for other parents. You log in to Somtoday yourself; the skill only reads the studiewijzer and writes the plan. See the [Disclaimer](#disclaimer).

## Example

Ask Claude *"Make the study plan"* and you get a message like this:

```
📚 Sam – Study plan 31 Oct → 13 Nov

📝 = homework (→ due day)
📖 = study for a test (→ test day)
🧪 = TEST today
🎒 = bring to school

⚠️ Tests coming up
• Thu 5 Nov – Engels reading test (x1)
• Wed 11 Nov – Aardrijkskunde Repetitie H2 (x4) 🔥

Wed 4 Nov · evening · 1h
📖 Engels reading: reader p.18 → test Thu 5
📝 Aardrijkskunde start 2.4 → Fri 6

Thu 5 Nov · evening · 1h
🧪 Engels reading test (x1)
📝 Frans leren étape 2 woord 1-20 → Fri 6
🎒 Fri: headphones + charged laptop

Good luck Sam! 💪
```

The plan also includes the full details of each item for you to check. See the [complete example](skills/somtoday-study-plan/references/example-plan.md).

## Get started

👉 **Step-by-step guide: [USAGE.md](USAGE.md)**

There are two ways to use it:

- **Claude in Chrome**, the easiest. [Download the skill](https://github.com/viralypatel/SomPlanner/releases/latest/download/somtoday-study-plan.zip), upload it once in claude.ai, open Somtoday, and ask Claude. The plan appears in the chat.
- **Claude Code**, for people who use a terminal. The plan is saved as a file.

## How it plans

- About **1 hour of study a day**, including weekends, and 2 hours on busy days.
- Evenings on weekdays, afternoons at weekends.
- Homework is planned before its deadline day where possible.
- Studying for a test starts at least 1–2 days before, with a quick revision the day before.
- Important tests (x2 or more, or a big test) get extra study sessions.

To change these rules, edit [`SKILL.md`](skills/somtoday-study-plan/SKILL.md).

## Privacy

- You always log in to Somtoday yourself. Claude never sees or types your password.
- Your child's name, school and plans are not stored in this repository.

## Disclaimer

I built this for my own family and am sharing it in case it helps other parents.

- It only **reads** the studiewijzer and makes a plan, to save you time.
- **Logging in is always up to you.** The skill never handles passwords.
- **You use it or contribute at your own choice and risk.** It is provided as is. Always check the plan against Somtoday.
- **Not affiliated** with [Somtoday](https://som.today/), Topicus or any school.

Improvements and pull requests are welcome.

## Files

```
USAGE.md                       step-by-step guide
skills/somtoday-study-plan/    the skill
  SKILL.md                     instructions Claude follows
  scripts/scrape.js            reads the studiewijzer items
  references/example-plan.md   a complete example plan
config.example.json            template for your school name (Claude Code only)
.github/workflows/             builds the downloadable skill zip on every change
```

## License

[MIT](LICENSE)
