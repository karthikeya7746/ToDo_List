# 📝 ToDo List App

A simple and interactive **ToDo List application** built with the MERN stack (MongoDB, Express.js, React.js, Node.js).  
This app allows users to create, read, update, and delete tasks seamlessly.

---

## 🚀 Features
- ➕ Add new tasks  
- ✏️ Edit existing tasks  
- ✅ Mark tasks as complete/incomplete  
- 🗑️ Delete tasks  
- 📦 Persistent storage using MongoDB  
- 🎨 Responsive UI for better user experience  

---

## 🛠️ Tech Stack
- **Frontend:** React.js, CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Tools:** Git, GitHub, Postman  

---

## 📂 Project Structure
ToDo_List/
│── client/ # React frontend
│── server/ # Node.js + Express backend
│── package.json # Dependencies
│── .gitignore
│── README.md


---

## ⚙️ Installation & Setup

### 1. Clone the Repository
``bash
git clone https://github.com/karthikeya7746/ToDo_List.git
cd ToDo_List
2. Install Dependencies

For backend:

cd server
npm install


For frontend:

cd ../client
npm install

3. Setup Environment Variables

Create a .env file in the server directory:

MONGO_URI=your_mongodb_connection_string
PORT=5000

4. Run the Application

Run backend:

cd server
npm start


Run frontend:

cd client
npm start
