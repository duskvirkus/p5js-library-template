# p5.js Library Template

Template with build system for developing p5.js libraries. The build system uses the same tools as the core p5.js library, in the hope this will make it easier for new users to learn these tools and experienced users will already know them.

## Linting with ESLint

**Command:** `npm run lint`

### What is Linting?

Linting will run a program, in this case ESLint, to check the format of project files against a set of rules. If you've used a complied language, like java or c++, this process is similar to a compile step in that development workflow. However the main difference is that linting rules often check for coding style and formatting. This step is more important in a collaborative project, because it makes source code files easier understand for everyone working on the project if it's in a consistent style. It is also a useful feature when using git because it will avoid a ton of unnecessary file changes like tab size and line ending problems.

### How to Run Linting

Linting has been setup to run through grunt. There are a number of different sub tasks of linting but the main one you need to know is `npm run lint`. Linting will also be run automatically through the `npm test` or `npm run test` command. It is included in Travis CI testing.

### Configuration

The configuration for all the linting tasks is contained within the `lint` folder. They follow an [inheritance structure](https://eslint.org/docs/user-guide/configuring#extending-configuration-files), for all rules specified in `eslint.js` will also apply to `eslint.src.js`.

| lint task | config                  | files              | explanation          |
|-----------|-------------------------|--------------------|----------------------|
| src       | `lint/eslint.src.js`    | `['src/**/*.js']`  | all .js files in src |
| build     | `lint/eslint.build.js`  | `['Gruntfile.js']` | build system files   |

The default setup tries to be as minimal as possible it includes environment setup, parser options, and the recommended eslint rules. You can see the recommend rules by [visiting this page](https://eslint.org/docs/rules/) and everything with a checkmark is included.

**Read more about:** [How to use rules](https://eslint.org/docs/developer-guide/working-with-rules#working-with-rules), [possible rules](https://eslint.org/docs/rules/), and [other configuration](https://eslint.org/docs/user-guide/configuring#configuring-eslint).
