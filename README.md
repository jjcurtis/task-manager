# Task Manager

## Info

Task Manager is a full stack application that utilizes a React front-end with an Express API. The application's PostgresQL database is stored in a cloud cluster provided by **[CockroachDB](https://www.cockroachlabs.com/product/)**. 

For the easiest installation and integration with your environment, set up your user account **[here](https://cockroachlabs.cloud/signup)**, create your own cluster, and choose the ***NodeJS driver***. This application uses the free tier **Serverless** Plan.   

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
cd ..;
```

**Add your own environment variables to a _.env_ file**

```env
cd server;
touch .env;
echo "DATABASE_URL=YOUR_CONNECTION_STRING_HERE
PORT=3000" >> .env;
```
> ***Make sure to update this file with your own connection string!***

**Download CA certificate**

CockroachDB will guide you on this step during the initialization of your cloud cluster. This feature is an additional layer of security that is required to access your database. The terminal command will look similar to this format

```bash
curl --create-dirs -o $HOME/.postgresql/root.crt <your-cert-url-here>
```

**Start development environments**

Run both commands from the **root directory**, each with their own dedicated terminal 

*(Terminal for server)*
```bash
cd server && npm run dev
```

*(Terminal for client)*
```bash
cd client && npm run dev
```


**Open the following URL in the browser of your choice**
```
http://localhost:5173
```
The client is built by the **[Vite](https://vitejs.dev/)** bundler which defaults to port 5173
