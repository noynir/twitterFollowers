This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


This project container both server and client.
# Server

The server is under '/server/twitterServer'.<br>
cd into that directory and run `npm install`
to start run `npm start`

Open [http://localhost:3030](http://localhost:3030) to view it in the browser. 
The server needs your twitter api credentials in order to run, you can pass them as env variables:
```env
    CONSUMER_KEY='**********'
    CONSUMER_SECRET='************',
    BEARER_TOKEN= '****************'
``` 
or place them inside a `.env` file under the server root folder.


# Client 
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

