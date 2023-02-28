# TeamProfileGenerator

## Description
The application makes use of node, js and html to take information about employees on a software engineering team and then generate an html webpage that displays summaries for each person. The application makes use of jest framework for testing the application.


Link to code : https://github.com/thomasptharakan/TeamProfileGenerator



## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Mock Up](#mock_up)
- [File Structure](#file_structure)
- [Badges](#badges)
- [License](#license)
- [Credits](#credits)

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/thomasptharakan/TeamProfileGenerator.git
   
   ```


## Usage

1. Navigate to the cloned folder

2. To install dependencies run
```sh
    npm i 
```
3. To execute the code run
```sh
    node index.js
```
4. To test the application run 
```sh
    npm test 
```

## Mock_Up
The following mockup provides an overview of the output html generated:

![Sample html image of Team Profile generated](images/14-object-oriented-programming-challenge-demo.png)



## File_Structure
```
├── __tests__
│   └── Employee.test.js
│   └── Engineer.test.js
│   └── Intern.test.js
│   └── Manager.test.js
├── images
│   └── 14-object-oriented-programming-challenge-demo.png
├── lib
│   └── Employee.js
│   └── Engineer.js
│   └── Intern.js
│   └── Manager.js
├── src
│   └── page-template.js
├── output
│   └── team.html
├── .gitignore
├── index.js
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```

## Badges

[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)
[![GPL Licence](https://badges.frapsoft.com/os/gpl/gpl.svg?v=103)](https://opensource.org/licenses/GPL-3.0/)  


## License

Licensed under the [GPL](LICENSE.txt) license

## Credits
1. https://attacomsian.com/blog/nodejs-check-if-directory-exists
2. https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f
3. Page Template script provided by EDX



