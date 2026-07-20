import type { Plugin } from "@opencode-ai/plugin"
import { readFileSync, existsSync } from "fs"
import { join, dirname } from "path"
import { homedir } from "os"
import { fileURLToPath } from "url"

// i-have-adhd OpenCode plugin — injects ADHD-friendly output rules into every chat.
// Source of truth for the rules: skills/i-have-adhd/SKILL.md

function loadSkill(): string | null {
  const here = dirname(fileURLToPath(import.meta.url))
  const candidates = [
    join(here, "../../skills/i-have-adhd/SKILL.md"),
    join(homedir(), ".config/opencode/skills/i-have-adhd/SKILL.md"),
    join(here, "../skills/i-have-adhd/SKILL.md"),
  ]

  for (const path of candidates) {
    if (!existsSync(path)) continue
    const raw = readFileSync(path, "utf-8")
    return raw.replace(/^---[\s\S]*?---\s*/, "").trim()
  }

  return null
}

const skill = loadSkill()

export const IHaveAdhdPlugin: Plugin = async () => {
  if (!skill) {
    console.warn("[i-have-adhd] SKILL.md not found — plugin disabled")
    return {}
  }

  return {
    "experimental.chat.system.transform": async (_input, output) => {
      output.system.push(skill)
    },
  }
}
