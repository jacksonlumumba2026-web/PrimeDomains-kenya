#!/bin/bash
git init
git add .
git commit -m "Update site: $(date +'%Y-%m-%d %H:%M:%S')"
git branch -M main
git remote add origin https://github.com/<your-github-username>/PrimeDomains-Kenya.git
git push -u origin main
echo "✅ PrimeDomains Kenya updated and live!"
