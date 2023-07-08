# Task Manager

---

## Getting Started

**Make a directory and switch into it**
```bash
mkdir <directory-name>
cd <directory-name>
```

**Clone this repository**

```bash
git clone https://github.com/jjcurtis/task-manager .
```

**Install dependencies**

```bash
cd server && npm i;
cd ..;
cd client && npm i;
cd ..;
cd database && npm i;
```

**Add your own environment variables to a _.env_ file in the root**

```env
DATABASE_URL=YOUR_CONNECTION_STRING_HERE
PORT=3000
```

**Start development environments**

Run both commands from the root directory

```bash
cd server && npm run dev
```

```bash
cd client && npm run dev
```


**Open the following URL in the browser of your choice**
```
http://localhost:5173
```
The client is built by the **[Vite](https://vitejs.dev/)** bundler which defaults to port 5173
