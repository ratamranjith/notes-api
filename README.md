# 📝 Note Taking REST API

A simple RESTful API built using **Node.js**, **Express**, and **local JSON file storage** via the `fs` module.

> 🔁 Supports full CRUD operations: Create, Read, Update, Delete notes.

---

## 🚀 Features

- REST API endpoints to manage notes
- Stores data locally in a JSON file
- Includes Postman collection
- Swagger documentation (optional)

---

## 📁 Project Structure

```
notes-api/
├── data/
│   └── notes.json          # JSON storage for notes
├── routes/
│   └── notes.js            # Route handlers
├── server.js               # Main server file
├── README.md
└── package.json
```

---

## 🧰 Tech Stack

- **Node.js**
- **Express.js**
- **UUID** – For generating unique IDs
- **fs** – For file operations
- **Swagger UI** (optional)
- **Postman** (optional)

---

## 📦 Installation

```bash
git clone https://github.com/ratamranjith/notes-api.git
cd notes-api
npm install
```

---

## ▶️ Running the Server

```bash
node server.js
```

API will run at: `http://localhost:3000`

---

## 🛠 API Endpoints

| Method | Endpoint         | Description          |
| ------ | ---------------- | -------------------- |
| GET    | `/api/notes`     | Get all notes        |
| GET    | `/api/notes/:id` | Get note by ID       |
| POST   | `/api/notes`     | Create a new note    |
| PUT    | `/api/notes/:id` | Update existing note |
| DELETE | `/api/notes/:id` | Delete a note        |

> Example `POST` body:

```json
{
  "title": "My Note",
  "content": "This is the note content."
}
```

---

## 📬 Postman Collection

Import the Postman collection JSON to test all endpoints easily.

**Download**: [note-api.postman_collection.json](./note-api.postman_collection.json)

To use:

1. Open Postman
2. Click **Import**
3. Select the file
4. Send requests to `http://localhost:3000/api/notes`

## 📄 License

MIT License

---

## ✍️ Author

Developed by [Ranjith Kumar Venkatachalam](https://github.com/ratamranjith)
