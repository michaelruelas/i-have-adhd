# Install i-have-adhd

An OpenCode plugin. One skill file + one plugin file.

## TL;DR

```bash
git clone https://github.com/michaelruelas/i-have-adhd
cd i-have-adhd

mkdir -p ~/.config/opencode/plugins ~/.config/opencode/skills

ln -sf "$(pwd)/.opencode/plugins/i-have-adhd.ts" ~/.config/opencode/plugins/i-have-adhd.ts
ln -sf "$(pwd)/skills/i-have-adhd" ~/.config/opencode/skills/i-have-adhd
```

Restart OpenCode. Rules apply to every chat.

## What gets installed

| Path | Role |
|------|------|
| `~/.config/opencode/plugins/i-have-adhd.ts` | Injects rules via `experimental.chat.system.transform` |
| `~/.config/opencode/skills/i-have-adhd/SKILL.md` | Source of truth for the rules |

## Verify

```bash
ls -la ~/.config/opencode/plugins/i-have-adhd.ts
ls -la ~/.config/opencode/skills/i-have-adhd/SKILL.md
```

Both should resolve. Then restart OpenCode and send any message — answers should lead with an action.

## Update

```bash
cd /path/to/i-have-adhd && git pull
```

Symlinks pick up changes. Restart OpenCode.

## Uninstall

```bash
rm ~/.config/opencode/plugins/i-have-adhd.ts
rm ~/.config/opencode/skills/i-have-adhd
```

## Copy instead of symlink

```bash
cp .opencode/plugins/i-have-adhd.ts ~/.config/opencode/plugins/i-have-adhd.ts
cp -R skills/i-have-adhd ~/.config/opencode/skills/i-have-adhd
```

Updates require re-copying.

## Troubleshooting

**Plugin loads but style does not change.** Restart OpenCode. Plugins are read at startup.

**`[i-have-adhd] SKILL.md not found`.** The skill path is missing. Re-run the `ln -sf` skill line above.

**Want different rules.** Edit `skills/i-have-adhd/SKILL.md`. Restart OpenCode.
