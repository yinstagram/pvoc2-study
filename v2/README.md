# PVOC2 Static Site

This `dist/` folder is the GitHub Pages root for local review.

## Review locally

```bash
cd /Users/yin./Downloads/pvoc2-site/dist
python3 -m http.server 8000
```

Open <http://localhost:8000>.

## Deploy to GitHub Pages

1. Review the site locally first.
2. Copy the contents of `dist/` to the repository branch/folder configured as the GitHub Pages source.
3. Commit and push from your Git client.
4. In GitHub, check **Settings → Pages** and confirm the source points to the folder containing `index.html`.

Do not deploy until the staging disclaimer and `about.html` limitations have been reviewed.
