<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- School contact data (phone, WhatsApp, address, social links) lives only in `src/lib/site.ts` — single source so every page stays consistent.
- Site chrome (header, footer, WhatsApp button, mobile bottom bar) is mounted once in `__root.tsx` — pages render only their own content.
- Keep the home composition limited to its photo cover and tabbed media section; detailed class content stays on the class page to avoid duplicate scrolling.
- Photos are WebP pointers in `src/assets/*.asset.json` (served from CDN) — keeps the repo light and pages fast.
- Visit requests are inserted from the browser into `visit_requests` with an anon insert-only policy — visitors can never read submissions.
