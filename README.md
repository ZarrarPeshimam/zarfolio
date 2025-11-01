# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.








git init
🔹 2. Clone a Remote Repository
bash
Copy
Edit
git clone <repo_url>
🔹 3. Check Repo Status
bash
Copy
Edit
git status
🔹 4. Add Files to Staging
bash
Copy
Edit
git add .             # adds all changes
git add <filename>    # adds specific file
🔹 5. Commit Changes
bash
Copy
Edit
git commit -m "Your commit message"
🔹 6. Push to GitHub
bash
Copy
Edit
git push origin main       # or master or your branch name
🔹 7. Pull Latest Changes
bash
Copy
Edit
git pull origin main       # get latest code from remote
🔹 8. Create a New Branch
bash
Copy
Edit
git checkout -b my-branch-name
🔹 9. Switch Branch
bash
Copy
Edit
git checkout main
🔹 10. Merge a Branch into Another
bash
Copy
Edit
git checkout main
git merge my-branch-name
🔹 11. See Commit History
bash
Copy
Edit
git log
🔹 12. Check Remote URL
bash
Copy
Edit
git remote -v
🛠️ Advanced Extras (optional)
Undo last commit (but keep changes):

bash
Copy
Edit
git reset --soft HEAD~1
Reset file to last commit:

bash
Copy
Edit
git checkout -- <filename>
