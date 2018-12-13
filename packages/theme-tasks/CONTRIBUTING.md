# Contributing to kendo-theme-tasks

Thank you for your interest in contributing to Kendo Theme Tasks!

## Ways to Contribute

You can contribute by:

* Submitting bug-fixes.
* Proposing changes in the documentation or updates to existing code.
* Adding features or missing functionality.

## Steps to Contribute

To submit a pull request:

1. If this is your first contribution to Kendo UI, read and sign the [Kendo UI Contribution License Agreement (CLA)](https://docs.google.com/forms/d/e/1FAIpQLSdSzuLLij8dtytTeiXCzlHcTmHYZIxgrAa7BSaO_fno79ua1A/viewform?c=0&w=1). The CLA confirms that you acknowledge the legal aspects of your contributions.
1. Fork the repo
1. Make changes in a git branch, dedicated to the issue you are fixing:

     ```shell
     git checkout -b my-fix-branch develop
     ```

1. Add your contribution, following the [coding guidelines](#coding-guidelines) and [commit message guidelines](#commit-message-guidelines).
1. [Submit a Pull Request](https://help.github.com/articles/creating-a-pull-request/).
1. Address any feedback to the Pull Request until the PR is approved.
1. Rebase your PR onto the latest changes from the `develop` branch.

### <a name="coding-guidelines"></a> Coding Guidelines

TBA

### <a name="commit-message-guidelines"></a> Commit Message Guidelines

We have precise rules over how our git commit messages are formatted.  This leads to **readable messages** that are easy to follow when looking through the project history. These commit messages also generate the project history.

### Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

The complete first line should be less than 50 characters.

### Type

Must be one of the following:

* **docs**: Documentation only changes
* **feat**: A new feature. This will increment the theme version by 0.1
* **fix**: A bug fix. This will increment the theme version by 0.0.1
* **perf**: A code change that improves performance
* **refactor**: A code change that improves the code maintainability or internal logic, without fixing a bug or implementing a feature
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **test**: Adding missing tests cases or correcting existing tests

### Scope

The scope should be the name of the component affected.

### Subject

The subject contains a succinct description of the change:

* use the imperative present tense: "change" not "changed" nor "changes"
* don't capitalize the first letter
* no dot (.) at the end
* strive to limit the subject to 50 characters. The Github UI hides the rest of the info.

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior, any related issues or support ticket numbers.

For more information, see this [guide on how to write good commit messages](https://chris.beams.io/posts/git-commit/).
