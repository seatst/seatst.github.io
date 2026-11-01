# SEATST website

Jekyll site deployed by GitHub Pages.

## Local preview
`github-pages` is not installed locally, so run the user-level Jekyll 3.10 without Bundler:

```
JEKYLL_NO_BUNDLER_REQUIRE=true ~/.gem/ruby/2.6.0/bin/jekyll serve --livereload -d /tmp/seatst-site
```

## Structure
- Per-year pages live in `/<year>/` (`page.year` is set via `defaults` in `_config.yml`).
- Nav links per year: `_data/years.yml`. Landing year: `current_year` in `_config.yml`.
- Tasks/team pages are generated from `_data/tasks/<year>.yml` and `_data/team/<year>.yml`.
- Ranking reads `/<year>/ranking.csv`, except 2026 which uses the legacy `/assets/data/ranking.csv` (old link shared externally).
- Test data lives in `/assets/testdata/` — filenames are year-prefixed (`seatst-<year>-<id>-testdata.zip`) and the old URLs must keep working.
- `redirects/` keeps old flat URLs (`/rules/` etc.) pointing at `/2026/...`.
