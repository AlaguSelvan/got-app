# Game of Thrones Full-Stack app

Full-Stack App for Game Of Thrones


# API Details

Get All Characters [http://localhost:8000/Characters](http://localhost:8000/Characters)

Get By House Name [http://localhost:8000/Characters?searchType=House&searchValue=Lannister](http://localhost:8000/Characters?searchType=House&searchValue=Lannister)

Get By Killed By [http://localhost:8000/Characters?searchType=killedBy&searchValue=jaime](http://localhost:8000/Characters?searchType=killedBy&searchValue=jaime)

Get By parent [http://localhost:8000/Characters?searchType=parent&searchValue=jaime](http://localhost:8000/Characters?searchType=parent&searchValue=jaime)

Get By Character Name [http://localhost:8000/Characters?searchType=parent&searchValue=jaime](http://localhost:8000/Characters?searchType=parent&searchValue=jaime)

#### NOTE: Add ```IsRoyal=true || IsRoyal = false``` to get characters by royal flag


## Requirements

- [node](https://nodejs.org/en) = 16.18
- [npm](https://www.npmjs.com) = 8.19.2

## Getting Started

**1. You can start by cloning the repository on your local machine by running:**

```sh
git clone https://github.com/AlaguSelvan/got-app
cd got-app
```

**2. Install all of the dependencies:**

```sh
npm install
```

**3. Start to run it:**

```sh
yarn dev or npm run dev # Running server side with Dev Config.
yarn start or npm run start # Running client side with Dev Config.
yarn build or npm run build # Building bundle
```

The Frontend App Will Run at [http://localhost:3000](http://localhost:3000)
The Backend App Will Run at [http://localhost:8000](http://localhost:8000)

> Note: You can change the port that you want from `.env`.

## Backend Script Commands

| `npm run <script>`    | Description                                                                      |
| ------------------ | -------------------------------------------------------------------------------- |
| `start`            | Runs your server at `localhost:8000`.                                            |
| `build`            | Build your typerscript app.                                                      |
| `dev`              | Build and run our app simultaneously.                                            |

## Front Script Commands

| `npm run <script>`    | Description                                                                      |
| ------------------ | -------------------------------------------------------------------------------- |
| `start`            | Runs your client at `localhost:3000`.                                            |

## Backend App Structure

Here is the structure of the app, which serves as generally accepted guidelines and patterns for building scalable apps.

```
.
├── data                          	# Express server data
│   └── character.ts                # Our Data from [https://github.com/jeffreylancaster/game-of-thrones/blob/master/data/characters.json](characters.json) is imported here
├── dist                          	# Ts code compiled as output to js.
├── Helper                          # Reusable Methods.
├── Models                          # All Interface, Could use it for db for our Application.
├── Services                        # Our Data Access & Update Layer is present here
├── Routes                          # Our Page Routes are defined here
├── .env                            # Environment variables for our app
└── index.ts                        # Express server setup
```

## Front-end Script Commands

| `npm run <script>`    | Description                                                                      |
| ------------------ | -------------------------------------------------------------------------------- |
| `start`            | Runs your client at `localhost:3000`.                                            |

## Frontend App Structure

Here is the structure of the app, which serves as generally accepted guidelines and patterns for building scalable apps.

```
.
├── public                          # Express server static path/Webpack bundled output
│   └── favicon.ico                 # Favicon is placed in the same path with the main HTML page
│   └── index.html                  # HTML File for serving Content to the Web.
│   └── logo192.png                 # logo file.
│   └── manifest.json               # Manifest file for PWA.
└── src                             # Logic goes here
│   └── Components                  # Reusable Components go here
│   └── hooks                       # Reusable hooks go here.
│   └── Models                      # Interface definition for our app goes here.
│   └── Pages                       # Pages go here.
└── App.tsx                         # Main File is here.

```

### Important Information

Please run backend & frontend together to run the application.
## TODO:

Fix Css

Update Card Layout

Add Logo on Header