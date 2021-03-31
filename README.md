# Book Swap

Nathan's Note: This was  a colaborative effort with 4 other members of my CS program.  I was on the frontend team and was 
responsible for the book details page and the bookswap functionality.  React was an entirely new language to me, so I had to learn
everything I implemented under a pretty tight timeframe.

## Install and Run

```shell
# Assuming you are in the root of the project:

# Install dependencies for server
npm install

# Install dependencies for frontend
npm run frontend-install

# Run the frontend AND server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React frontend only
npm run frontend

# Server runs on localhost:4000 and frontend on localhost:3000
```

Be sure to download and include the .env file as this allows the site to connect to the database

The environment variables you set are being used in `lib/db.js`

### Further reading

- [https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use-them-f602f66d15fa](https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use-them-f602f66d15fa)
- [dotenv documentation](https://www.npmjs.com/package/dotenv)
