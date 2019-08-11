# p5.js Library Template

**Currently Work in Progress**

Template with build system for developing p5.js libraries. The build system uses the same tools as the core p5.js library, in the hope this will make it easier for new users to learn these tools and experienced users will already know them.

## Step by Step Guide for Using this Template

### Setting Up Your Library

- Create Repository (Coming Soon)
- Rename (Coming Soon)
- Configure Linting (Optional) - If you're a code style nazi this is your time to shine. Look at the section on [ESLint configuration](#ESLint-Configuration). See troubleshooting section if you have a problem with [line endings](#Line-Endings).
- [Setup Travis CI](#How-to-Setup-Travis)

### Writing Your Library

### Publishing Your Library

## Task Running with Grunt

### What is Grunt?

Grunt is a javascript development tool that makes streamlines a build system into smaller tasks. These tasks can overlap and depend on each other. Learn more about it at [gruntjs.com](https://gruntjs.com/).

### Running Grunt

You may need to install grunt globally by running `npm i -g grunt`. Besides that it should just work but you can add or change tasks in `Gruntfile.js`.

## Linting with ESLint

**Command:** `npm run lint`

### What is Linting?

Linting will run a program, in this case ESLint, to check the format of project files against a set of rules. If you've used a complied language, like java or c++, this process is similar to a compile step in that development workflow. However the main difference is that linting rules often check for coding style and formatting. This step is more important in a collaborative project, because it makes source code files easier understand for everyone working on the project if it's in a consistent style. It is also a useful feature when using git because it will avoid a ton of unnecessary file changes like tab size and line ending problems.

### How to Run Linting

Linting has been setup to run through grunt. There are a number of different sub tasks of linting but the main one you need to know is `npm run lint`. Linting will also be run automatically through the `npm test` or `npm run test` command. It is included in Travis CI testing.

### ESLint Configuration

The configuration for all the linting tasks is contained within the `lint` folder. They follow an [inheritance structure](https://eslint.org/docs/user-guide/configuring#extending-configuration-files), for all rules specified in `eslint.js` will also apply to `eslint.src.js` and all other lint tasks.

| lint task | config                  | files                              | explanation          |
|-----------|-------------------------|------------------------------------|----------------------|
| src       | `lint/eslint.src.js`    | `['src/**/*.js']`                  | all .js files in src |
| build     | `lint/eslint.build.js`  | `['Gruntfile.js', 'lint/**/*.js']` | build system files   |

The default setup tries to be as minimal as possible it includes environment setup, parser options, and the recommended eslint rules. You can see the recommend rules by [visiting this page](https://eslint.org/docs/rules/) and everything with a checkmark is included.

You can add override or remove rules by following this format.

```js
module.exports = {
  // existing contents
  "rules": {
    "semi": ["error", "always"], // add semicolons rule
    "comma-dangle": ["error", "always-multiline"], // override comma dangling rule
    "no-undef": "off", // turn off a rule
  },
}
```

**Read more about:** [How to use rules](https://eslint.org/docs/developer-guide/working-with-rules#working-with-rules), [possible rules](https://eslint.org/docs/rules/), and [other configuration](https://eslint.org/docs/user-guide/configuring#configuring-eslint).

## Continuous Integration with Travis CI

### What is Travis CI?

Travis is a continuous integration tool that links to a GitHub repository and runs tests on your repository in a contained environment. This allows for consistent automated testing which is much easier than manually testing each change yourself.

### How to Setup Travis

You'll need to create a Travis account the easiest way is to link you're GitHub account. Visit their [website](https://travis-ci.org/) and hit the sign up button.

Once you've done there will be a plus sign on your dash board where you can `Add a Repository`. Click it and search for what you've named your repository. Hit the toggle and you'll then go back to your dashboard. The repository should be there now. You can click on `More options` and `trigger a build` to make sure everything is working. It will take a minute or two but you should see `Done. Your build exited with 0.` at the end.

This is optional but it's a good idea to make tests required to commit to the master branch. To do this go to the settings page for your repository back on github. Then go to the branches section and hit add a rule. Type master into the bar at the top and check and check `Require status checks to pass before merging`, `continuous-integration/travis-ci`, and `Include administrators`. Then add the rule and from now on you'll have to make all your changes on a separate branch and then make a pull request to merge it into the master.

## Troubleshooting

### Line Endings

The default linting options include a rule about line endings matching unix style endings. If you are using windows and you haven't configured git to use unix line endings you'll have problems.

There are two solutions to this problem.

1. Follow [this guide](https://help.github.com/en/articles/configuring-git-to-handle-line-endings) on configuring your windows git to use unix line endings. You may find it faster to just delete and then clone your library back down again after changing your git config file.
2. Change `"linebreak-style": ["error", "unix"],` line in `lint/lint.js` to `"linebreak-style": ["error", "windows"],`. This is the less elegant solution as you may still have problems with the existing files.
