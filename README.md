# Mobile App

## Initializing project

### Install dependencies

```sh
yarn install
```

Install the dependencies in the Xcode project folder:
```sh
cd ios && pod install && cd ..
```
There is no action needed here for android, but sometimes it's worth going to Android Studio and running `File -> Sync project with gradle files`, especially after installing a new library via yarn.

## Start react native app

1. Start Metro:
    ```sh
    yarn start
    ```
2. Run the application:
    ```sh
    yarn ios
    ```
    or

    Make sure you don't have your Expo version of app installed on simulator!
    ```sh
    yarn android
    ```

(See `scripts` part in `package.json` for more variants: `ios-release`, `ios-device`, `ios-device-release`)
