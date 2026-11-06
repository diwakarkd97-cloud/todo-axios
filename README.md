# React CRUD Application with Axios & MockAPI

A lightweight, practical React CRUD (Create, Read, Update, Delete) application integrated with a remote **MockAPI** backend using **Axios**.

---

## Features

- **Read (GET):** Fetches all user records from the MockAPI endpoint on initial component mount via `useEffect`.
- **Create (POST):** Sends a payload to the backend to add new user records and updates the UI.
- **Update (PUT):** Updates existing user details targeting valid IDs dynamically.
- **Delete (DELETE):** Removes a specific user record by ID from MockAPI and syncs local state.
- **Global Base URL:** Preconfigured `axios.defaults.baseURL` in `main.jsx` for clean relative endpoint paths.

---

## Tech Stack

- **Frontend:** React (Hooks: `useState`, `useEffect`)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Backend / Mock Database:** [MockAPI.io](https://mockapi.io/)
- **Tooling:** Vite / npm

---

## Project Structure

```text
src/
├── App.jsx        # Core component containing CRUD functions and user list rendering
├── main.jsx       # Root mount configuration and Axios baseURL setup
├── index.css      # Base styling
└── App.css        # Component styling
