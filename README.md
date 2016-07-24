# [WIP] WARN Boilerplate

> yet another minimal boilerplate to get things up and running fast

**W** - Webpack
**A** - Apollo
**R** - React
**N** - Node

### Installation

```
git clone https://github.com/sammkj/warn-boilerplate
cd warn-boilerplate
npm install
npm start
open http://localhost:8080
```

### Default Ports

| Ports    | Server                                     |
|----------|--------------------------------------------|
| 8080     | Front-end Server                           |
| 8082     | Back-end Server to hot reload server code  |
| 3000     | Node Server                                |

To configure ports for front-end and back-end server, go to `tools/configs` and edit respective ports.

### Commands

| Aspect             | Command                | Comments                                  |
|--------------------|------------------------|-------------------------------------------|
| Development        | `npm run start`        | Start front-end, back-end and node server |
| Client Development | `npm run start:client` | Start front-end server only               |
| Server Development | `npm run start:server` | Start back-end and node server only       |
| Build              | `npm run build`        | Build both client and server              |
| Client Build       | `npm run build:client` | Build client only                         |
| Server Build       | `npm run build:server` | Build server only                         |

**Some notes on building client**

* Any server dependencies such as `express`, `apollo-server` must not be included in the client build. To do that, go to `tools/configs/client.js` and add server dependencies to `omittedVendors`.

### Configurations

Available Client Configurations

* host
* port
* clientDirName
* indexHTMLFileName

-------------------

Available Server Configurations

* host
* port
* serverDirName

### Trouble Shooting

1. `Warning: [react-router] You cannot change <Router routes>; it will be ignored`
    According to gaearon's comment [here](Warning: [react-router] You cannot change <Router routes>; it will be ignored), we can ignore this warning.

### References

* [gaearon/react-hot-loader](https://github.com/gaearon/react-hot-boilerplate)
* [mxstbr/react-boilerplate](https://github.com/mxstbr/react-boilerplate)
* [jkudish/spark-react-starter](https://github.com/jkudish/spark-react-starter)
* [davezuko/react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit)
