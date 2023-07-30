# nVision

nVision is an open-source developer tool for Next.js applications that provides users server-side network request metrics and an interactive hierarchical file tree, aiding with rapid debugging and deployment. 

_Note: nVision currently only supports App Router_

## Getting Started

Run the following commands to install nVision's npm package and add the necessary files required to implement nVision: 
```bash
npm install nvisionjs
npx nvisionjs-create
```

Add the below to your `next.config.js`

Add the following script to your `package.json`
```bash
"nvision": "node --require ./nvisionServer.js & next dev"
```

Run the following command to start the development server
```bash
npm run nvision
```

Open your dashboard by going [http://localhost:3000/nvisionDashboard](http://localhost:3000/nvisionDashboard) (or wherever your app is hosted)

Open your application in a new window to view real time updates on the dashboard


## Features
- Users can interact with their app and view server-side network activity on the dashboard table such as routes, status codes, methods and duration of network calls
- Users can view the directory structure of their app in tree form to help visualize complex applications


## Examples
### Table view
<p align="center">
  <img src="./assets/TableGifHigh.gif">
</p>

### Tree view
<p align="center">
  <img src="./assets/treeGif.gif">
</p>


## Contributors

Caitlin O'Donohue - [GitHub](https://github.com/codeFromCO) | [Linkedin](https://www.linkedin.com/in/caitlin-odonohue/)

Sunny Pacheco - [GitHub](https://github.com/xsunnibunnix) | [Linkedin](https://www.linkedin.com/in/sunnypacheco/)

Jiyoung Lee - [GitHub](https://github.com/jiyoungglee/) | [Linkedin](https://www.linkedin.com/in/jiyoung-g-lee/)

Isaac Lee - [GitHub](https://github.com/Third-Isaac) | [Linkedin](https://www.linkedin.com/in/thirdisaac/)

Bennett Ma - [GitHub](https://github.com/bmgitcode) | [Linkedin](https://www.linkedin.com/in/bennett-ma/)


## License

Distributed under the MIT License. See [License](https://choosealicense.com/licenses/mit/) for more information.

## Tech Stack
<div align='center'>

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![WebSocket](https://img.shields.io/badge/WS-Websocket-2ea44f?style=for-the-badge&logo=appveyor)
![MUI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![OpenTelemetry](https://img.shields.io/badge/OpenTelemetry-3d348b?style=for-the-badge&logo=opentelemetry&logoColor=white)
![d3js](https://img.shields.io/badge/d3-red?style=for-the-badge&logo=d3.js)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

</div>
