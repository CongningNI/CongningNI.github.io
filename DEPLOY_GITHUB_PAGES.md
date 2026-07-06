# Publish free on GitHub Pages

GitHub account: `CongningNI`

## Recommended repository

Create a **public** repository named exactly:

```text
CongningNI.github.io
```

The published address will be:

```text
https://congningni.github.io/
```

## Upload through the GitHub website

1. Sign in to GitHub and create the repository `CongningNI.github.io`.
2. Choose **Public**. Do not initialize it with another README.
3. Open the new repository and choose **Add file → Upload files**.
4. Upload the **contents** of this folder, so `index.html` is at the repository root.
5. Commit the files to the `main` branch.
6. Open **Settings → Pages**.
7. Under **Build and deployment**, choose **Deploy from a branch**.
8. Select branch `main` and folder `/ (root)`, then save.
9. GitHub will publish the site after a short build period.

## Upload with Git

```bash
git init
git add .
git commit -m "Launch academic homepage"
git branch -M main
git remote add origin https://github.com/CongningNI/CongningNI.github.io.git
git push -u origin main
```

Then enable GitHub Pages from `main` and `/ (root)` in repository settings.

## Future updates

Edit the files locally, then run:

```bash
git add .
git commit -m "Update publications and activities"
git push
```

The site will republish automatically.
