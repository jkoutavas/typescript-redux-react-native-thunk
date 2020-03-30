# typescript-redux-react-native-thunk

*Readme last updated March 29th, 2020*

This repo has proven to run on node v13.10.1.

After cloning this repo, do the following to see the app in action:

```
$ cd {clone-repo}/myTSReduxApp
$ yarn install
$ npx react-native run-ios

```

Then press the "Get Employees" button and you'll see this displayed:


![](ScreenShot.png)


## How this app was generated

(You don't need to execute these steps)

A Typescript version of [jkoutavas/redux-react-native-thunk](https://github.com/jkoutavas/redux-react-native-thunk). 
This "myTSReduxApp" React Native App was generated using:

```
$ react-native init myTSReduxApp --template react-native-template-typescript
$ cd myTSReduxApp
$ yarn add redux react-redux @types/react-redux redux-thunk typesafe-actions
```

TypeScript static typing is then applied based on the guidelines at [react-redux-typescript-guide](https://github.com/piotrwitek/react-redux-typescript-guide)

