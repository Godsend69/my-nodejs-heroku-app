# my-nodejs-heroku-app

![Deploy to Heroku](https://github.com/Godsend69/my-nodejs-heroku-app/actions/workflows/deploy-to-heroku.yml/badge.svg)

## About

This is a sample Node.js application demonstrating continuous deployment to Heroku using GitHub Actions. Every push to the `main` branch automatically triggers a deployment to Heroku, making it easy to keep your app live and up to date.

## Live Demo

Check out the deployed app: [https://YOUR-HEROKU-APP-NAME.herokuapp.com](https://YOUR-HEROKU-APP-NAME.herokuapp.com)
> _Replace `YOUR-HEROKU-APP-NAME` above with your actual Heroku app's name._

## Technologies

- Node.js
- Express
- Heroku
- GitHub Actions

## Running Locally

1. **Clone this repository:**
   ```bash
   git clone https://github.com/Godsend69/my-nodejs-heroku-app.git
   cd my-nodejs-heroku-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the app:**
   ```bash
   npm start
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000) (or your configured port).

## Deployment

This project uses GitHub Actions to automatically deploy to Heroku on every push to `main`.  
Secrets required for deployment:
- `HEROKU_API_KEY`
- `HEROKU_APP_NAME`

You can set these in your repository's **Settings > Secrets and variables > Actions**.

---

Feel free to fork, modify, and use this as a template for your own Node.js + Heroku + GitHub Actions projects!
