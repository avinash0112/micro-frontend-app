This is a basic micro front end POC app using vite and module federation.

- Contains two repos named 'remote' and 'host'.
- remote contains a shared component and a redux store.
- shared component and store is exposed using module federation from remote.
- host app consumes the component and store for usage.

To run app in your local machine 
1. clone repo
2. cd remote
3. npm install
4. npm run build && npm run serve
5. cd ..
6. cd host
7. npm install
8. npm run dev

Host App will start running on port 5173.
