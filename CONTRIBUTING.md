# Contributing

We welcome community support with both pull requests and reporting bugs. Please
don't hesitate to jump in.

## Review others' work

Check out the list of outstanding pull requests if there is something you might
be interested in. Maybe somebody is trying to fix that stupid bug that bothers
you. Review the PR. Do you have any better ideas how to fix this problem? Let us
know.

## Issues

The issue tracker is the preferred channel for bug reports, features requests
and submitting pull requests, but please respect the following restrictions:

- Please do not use the issue tracker for personal support requests. Stack Overflow ([react-material](http://stackoverflow.com/questions/tagged/react-material) tag), is the better places to get help.
- Please do not open issues or pull requests regarding the code in React or react-material (open them in their respective repositories).

_Note: Occasionally issues are opened that are unclear, or we cannot verify them. When the issue author has not responded to our questions for verification within 7 days then we will close the issue._

## Tests

All commits that fix bugs or add features need a test.

## Code Style

We use [ESLint][eslint] for all JavaScript Linting. There should be no linting
errors and no new warnings for new work. You are welcome to configure your
editor to use ESLint or the `npm test` command will run unit tests and the
linter.

## Visual Changes

When making a visual change, if at all feasible please provide screenshots
and/or screencasts of the proposed change. This will help us to understand the
desired change easier.

## Implement additional components and features

This project is seeking parity with the core react-material library.
Component by component to the extent it is possible.

## Breaking changes

Breaking changes should be accompanied with deprecations of removed functionality. Prior to the 1.0.0 release, we aim to follow React's example of taking two minor releases to break old functionality. As such, changes that intend to remove or change public APIs should be be submitted against the `next` branch, and should be accompanied with deprecation warnings on the old APIs. The deprecated APIs themselves should not be removed until the minor release after that.

## Notes for lodash functions usage in the code

You can use `lodash` but keep it to things where it actually needs it, i.e. don't use `lodash`'s `forEach` when `Array.prototype.forEach` is fine.

## Becoming a maintainer

Please create an issue with the label maintainer
