<p align="center">
  <img src="./logo.png" alt="i-have-adhd" width="140" />
</p>
<p align="center">
  <strong align="center">ADHD-friendly outputs. No ADHD diagnosis needed!</strong>
</p>
<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/github/license/michaelruelas/i-have-adhd?style=flat" alt="License"></a>
</p>

## Install

```bash
git clone https://github.com/michaelruelas/i-have-adhd
cd i-have-adhd

ln -sf "$(pwd)/.opencode/plugins/i-have-adhd.ts" ~/.config/opencode/plugins/i-have-adhd.ts
ln -sf "$(pwd)/skills/i-have-adhd" ~/.config/opencode/skills/i-have-adhd
```

Restart OpenCode. Rules inject into every chat automatically.

More in [INSTALL.md](./INSTALL.md).

## What it does

An OpenCode plugin that stops burying the answer. Action first. Steps numbered. No "Hope this helps!"

## What changes

| Before | After |
|--------|-------|
| "Great question! Let me think about this. Your auth flow has a few moving pieces: the middleware, the token verification, and the cookie handling. Looking at `src/auth.ts`, the `verifyToken` function seems to be using an older `jsonwebtoken` API. One approach would be to update the package and rewrite that function. After making the change, you'd want to run the auth tests to confirm nothing breaks. By the way, you might also want to look at your dependency versions overall. Hope this helps!" | "Run `npm install jsonwebtoken@latest`, then edit `src/auth.ts:42`.<br><br>1. Open `src/auth.ts`<br>2. Replace `verifyToken` (lines 42–58) with the snippet below<br>3. Run `npm test -- auth.spec.ts`<br><br>Next: paste the first failing line if any test fails." |

## The rules

10 rules. Full text in [SKILL.md](./skills/i-have-adhd/SKILL.md).

1. Lead with the next action.
2. Number multi-step tasks.
3. End with one concrete next step.
4. Suppress tangents.
5. Restate state every turn.
6. Specific time estimates (minutes, not "a bit").
7. Make wins visible.
8. Matter-of-fact errors.
9. Cap lists at 5 items.
10. No preamble. No recap. No closers.

## Tune it

Edit `skills/i-have-adhd/SKILL.md`. Restart OpenCode.

## Credits

Loosely based on *The Adult ADHD Tool Kit* by J. Russell Ramsay and Anthony L. Rostain. Adapted for how an LLM should respond, not how a human should organize their day.

## License

MIT.

Star if it saved you one scroll past one "Great question!"
