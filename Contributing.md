```md
# 🤝 Contributing to SkinSense

Thank you for showing interest in contributing to SkinSense 🚀

This project follows a **safe contribution workflow** to ensure that no untested or breaking changes affect the main project.

---

# ⚠️ Important Rules (READ FIRST)

- ❌ Do NOT push directly to the `main` branch
- ❌ Do NOT modify production code without review
- ❌ All changes must go through Pull Requests (PR)
- ❌ Untested code will NOT be merged

---

# 🧠 Branch Strategy

We follow this structure:

```

main      → Stable production code (protected)
feature/* → New features or bug fixes

````

---

# 🚀 Contribution Workflow

## 1. Fork the Repository
Click the **Fork** button on GitHub to create your copy.

---

## 2. Clone Your Fork

```bash
git clone https://github.com/your-username/SkinSense.git
cd SkinSense
````

---

## 3. Create a Feature Branch

Always create a new branch for changes:

```bash
git checkout -b feature/your-feature-name
```

Example:

```bash
feature/add-dark-mode
```

---

## 4. Make Your Changes

You can:

* Fix bugs
* Improve UI
* Add new features
* Optimize backend or ML logic

---

## 5. Test Your Changes Locally

Before pushing:

* Run frontend (`npm run dev`)
* Run backend (`mvn spring-boot:run`)
* Run ML service (`uvicorn main:app --reload`)

Ensure nothing breaks.

---

## 6. Commit Changes

```bash
git add .
git commit -m "Added: short description of changes"
```

---

## 7. Push Your Branch

```bash
git push origin feature/your-feature-name
```

---

## 8. Create a Pull Request (PR)

Go to GitHub and:

* Open a PR from your feature branch → main branch
* Clearly describe your changes
* Add screenshots if UI is changed

---

# 🛡️ Review Process

All PRs will be:

* Reviewed manually
* Tested locally by maintainer
* Merged only if stable and safe

---

# 🚫 What Will NOT Be Accepted

* Breaking changes without explanation
* Untested code
* Direct commits to `main`
* Code that breaks existing API flow

---

# 💡 Areas You Can Contribute

* UI improvements (React)
* Backend optimization (Spring Boot)
* ML model improvements (FastAPI)
* Bug fixes
* Performance improvements

---

# ❤️ Thank You

Your contributions help improve SkinSense and make it better for all learners 🚀

```
