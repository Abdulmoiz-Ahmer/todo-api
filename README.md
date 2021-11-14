<div id="top"></div>

<!-- PROJECT LOGO -->
<br />

  <h3 align="center">TODO-API</h3>

  <p align="center">
    A todo application build with nodejs, expressJs, MongoDb, clean code architecture and tdd
    <br />
    <br />
    <a href="http://todo.api.cryptobros.site/api/ping">View Demo</a>
    ·
    <a href="https://github.com/Abdulmoiz-Ahmer/todo-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/Abdulmoiz-Ahmer/todo-api/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

These are the services based on the clean code architecture. The reason i prefer to use this architecture is because it makes change easier and in world of software only change is constant.

![](https://fullstackroyhome.files.wordpress.com/2019/03/cleanarchitecture.jpg)

Few words about the above architecture:

- Inner Layer
  Models. Handles the creation, validation and reading of our entities (todo). Note that this should be custom logic and not include the DB implementation of models (e.g. in Mongoose DB ORM, their models should be encapsulated in the DB layer below). Our model schemas live here.
  DB. Our choice of DB (in memory, MongoDB, SQL), this is independent of the model. Note that in Clean Architecture this is considered an outer layer framework, but for practical applications I find it easier to place it inner and have the data-access layer depend on it rather than injecting it in.

- Middle Layer
  Data-Access. Handles transfer between the DB (like an ORM). Depends on the model to validate and create the entity in DB. The key is to have a consistent & custom API that all outer layers communicate with. Testing here will ensure that replacing or using multiple DBs doesn't break anything further upstream.

- Outer Layer
  Drivers. Represents the UI or interface (Web or CLI). It communicates only with the data-access layer.

For Testing

- Acceptance testing
- Contracts(postman collection)
- Unit testing

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Express.js](https://expressjs.com/)
- [Nodejs](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- [Nodejs](https://nodejs.org/en/download/)

- yarn
  ```sh
  npm install -g yarn
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Abdulmoiz-Ahmer/todo-api.git
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
3. Enter your Port, mongo user and password in `.env`
   ```js
    PORT=4000
    MONGO_USER=
    MONGO_PW=
   ```
4. To seed database run
   ```js
    yarn seed
   ```
5. To seed database run
   ```js
    yarn start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

This repository has been used with a [todo app](http://todo.ui.cryptobros.site/) and it's [repository.](https://github.com/Abdulmoiz-Ahmer/todo-ui)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions of any kind are  
**greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [Abdulmoiz Ahmer]() - abdulmoiz1996@gmail.com

Project Link: [https://github.com/Abdulmoiz-Ahmer/todo-api](http://todo.api.cryptobros.site/api/ping)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Clean code architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [CircleCI](https://circleci.com/)
- [Digital Ocean Droplet](https://www.digitalocean.com/)
- [Mongoose](https://mongoosejs.com/docs/)
- [Jest](https://www.npmjs.com/package/jest)
- [Supertest](https://www.npmjs.com/package/supertest)
- [Faker](https://www.npmjs.com/package/faker)
- [Joi](https://www.npmjs.com/package/joi)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [nodemon](https://www.npmjs.com/package/nodemon)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
