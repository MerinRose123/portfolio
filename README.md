# 🚀 Portfolio Website — GitHub Pages Workshop

A simple, customizable portfolio website you can deploy to GitHub Pages in minutes. **No frameworks, no build tools** — just HTML, CSS, and JavaScript.

![Portfolio Homepage](screenshot.png)

---

## 📋 Quick Start (Step-by-Step)

### Step 1: Fork This Repository

1. Click the **Fork** button at the top-right of this GitHub page
2. This creates your own copy of the project under your GitHub account

### Step 2: Clone Your Fork

Open a terminal and run:

```bash
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
```

> Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3: Customize Your Portfolio

Open **`config.js`** in any text editor — this is the **only file you need to edit**.

Update the fields with your own information:

```js
const CONFIG = {
  name: "Your Name",
  title: "Your Job Title",
  summary: "A short professional summary about yourself...",
  // ... update experience, skills, projects, education, etc.
};
```

**Replace `profile.png`** with your own photo (keep the same filename, or update `profileImage` in `config.js`).

> **💡 Tip:** Any section with an empty array (`[]`) will be automatically hidden from the page and the navigation menu. So if you don't have work experience or certifications yet, just leave those arrays empty!

### Step 4: Preview Locally (Optional)

Open `index.html` directly in your browser to see your changes.

### Step 5: Push Your Changes

```bash
git add .
git commit -m "Customize portfolio with my details"
git push origin main
```

### Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Choose **main** branch and **/ (root)** folder
5. Click **Save**

Your portfolio will be live at:

```
https://YOUR_USERNAME.github.io/portfolio/
```

> It may take 1–2 minutes for the site to appear.

---

## 📁 Project Structure

```
portfolio/
├── config.js      ← ✏️ Edit this to customize your portfolio
├── index.html     ← Page layout (no need to edit)
├── style.css      ← Styling (no need to edit)
├── profile.png    ← 📸 Replace with your photo
└── README.md      ← You're reading this!
```

---

## 🎨 What You Can Customize (in config.js)

| Field            | Description                                | Required? |
| ---------------- | ------------------------------------------ | --------- |
| `name`           | Your full name                             | ✅ Yes     |
| `title`          | Job title / tagline                        | ✅ Yes     |
| `profileImage`   | Filename of your profile photo             | ✅ Yes     |
| `socialLinks`    | LinkedIn, GitHub, LeetCode, Website, etc.  | ✅ Yes     |
| `summary`        | Professional summary paragraph             | Optional  |
| `experience`     | Work history with roles and bullet points  | Optional  |
| `skills`         | Skills grouped by category                 | Optional  |
| `projects`       | Project details with descriptions          | Optional  |
| `education`      | Degree, institution, GPA, honors           | Optional  |
| `achievements`   | Awards and recognitions                    | Optional  |
| `certifications` | Professional certifications                | Optional  |
| `hobbies`        | Hobbies and interests                      | Optional  |

> **Note:** Optional sections with empty arrays (`[]`) are automatically hidden from both the page content and the navigation menu.

---

## 💡 Tips

- **Profile photo**: Use a square image for best results. Name it `profile.png` or update the `profileImage` field in `config.js`.
- **Social links**: Add or remove entries in the `socialLinks` array. Supported icons: `linkedin`, `github`, `leetcode`, `globe`, `medium`.
- **Hide sections**: Leave any section array empty (`[]`) and it will be automatically hidden.
- **Rename the repo**: If you rename your repo to `YOUR_USERNAME.github.io`, it becomes your main GitHub Pages site at `https://YOUR_USERNAME.github.io/`.

---

## 📄 License

Free to use and modify. Happy coding! 🎉
