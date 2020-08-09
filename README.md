## Expo Start Octocat  

This project is just a starting point for a dev.to tutorial that explains how to use GitHub Codespaces to develop React Native apps using [Expo](https://expo.io).

Check the tutorial below or in the link: TBD

--- 

I'm personally really excited about GitHub Codespaces. This is coming from someone who's always been passionate about their IDEs and local setup. This past weekend, as I was hacking some really amateurish React Native (RN) using Expo, I decided that I would try to stop using VS Code on my machine and transition to use GitHub Codespaces as my main driver for the projects I'm most actively involved.

What I'm about to show, especially for folks experienced with Expo and React Native, is nothing special and might not even be new. As a matter of fact, I'm not an expert in any of those technologies. Having said that, I'm still impressed with the fact that I can just launch a codespace, init a repository and 2 minutes later I can see live changes in my iOS device without the need for any further setup.

Disclaimer: I'm going to explain how to set this up imagining my readers might not all these tools that well. So if this sounds very slow and boring, you might want to scroll faster.

## 1. What do you need before you get started

- A [GitHub](www.github.com) account (I guess everyone has one of those)
- An [Expo.io](www.expo.io) account
- Access to the [GitHub Codespaces beta](https://github.com/features/codespaces/)
- [Expo installed on your mobile device](https://expo.io/tools) (I've tested with iOS)

If you don't have access to the Codespaces beta, I still think it's worthwhile checking the rest of the tutorial for when it becomes available to everyone.

## 2. Creating an empty GitHub repo 

Go onto GitHub.com and let's create a new repository. If you're new to GitHub, just find the `+` icon on the top right hand side corner and click `New Repository`. Pick any name, and `Initialize this repository with a README`. 

![create-new-repository](https://user-images.githubusercontent.com/1192590/89447432-db4e0b00-d74d-11ea-95e9-fbf1320071ab.png)

## 3. Launching a codespace for this repo

If you have access to Codespaces you'll have a top level Codespaces menu, but the easist way to get into this repo, is to click `Code` and `Open with Codespaces`. 

![create-codespace](https://user-images.githubusercontent.com/1192590/89449808-8613f880-d751-11ea-8ce8-ecbf55189b69.png)

This will launch the dev container and you should be seeing your project in VS Code. When all done, you should be a very bare repo with just the `README.md` file, but we'll take care of that soon. If my VS Code looks a bit different, it's because I've already [setup a set of extensions and settings for all my future workspaces](https://docs.github.com/en/github/developing-online-with-codespaces/configuring-codespaces-for-your-project).

![codespace](https://user-images.githubusercontent.com/1192590/89450052-d8551980-d751-11ea-8459-2e95faf9e818.png)

## 4. Installing Expo on your Codespaces environment

Now we'll install the expo client and initialise an empty project on this repository. As a quick intro _"Expo is a framework and a platform for universal React applications (...) that help you develop, build, deploy, and quickly iterate on iOS and Android"_.

To run commands on your codespace, you just need to open the terminal. That's ``^+` `` or `View -> Terminal`. With the terminal open type in:

```
npm install -g expo-cli
```

## 5. Creating a blank expo project

With the expo client installed, let's create an empty Expo project by running the following command and then selecting the default option `blank`

```
expo init native-app
```

If you go into the `native-app` folder you'll see fully fledged Expo project with just a bit of UI on `App.js`. Feel free to have a look around.

![expo-installed](https://user-images.githubusercontent.com/1192590/89451860-bdd06f80-d754-11ea-8325-7996b577122e.png)

> Note: For those cheeky buggers that had a mini stroke when I ran `expo init` on an existing folder, I wouldn't be able to do otherwise as the repository already exists. 

## 6. Login to Expo

Before we launch the app, to be able to connect to it remotely we need to login to our expo account. Just run the following command and enter your expo username and password:

```
expo login
```

## 7. Start your app and check this beauty

Ok, so now we want to start our app and test it on our own mobile device. Let's go into our project folder and start the app:

```
cd native-app && expo start --tunnel
```

If everything worked as expected you should be seeing a QR code. Scan the QR code above with the Expo app (Android) or the Camera app (iOS). On iOS this will prompt you to open Expo on your phone which you should have installed already and logged in. 

The first time loading the app could take a bit of time, and you might have to click "Reload JS" if you get an error. In fact via this method, the codespace and your phone disconnect quite quickly so if you see a `Disconnected from the Metro server` just shake your phone to get the Expo menu and click `Reload`. When it all works you should see this screen:

![image](https://user-images.githubusercontent.com/1192590/89453645-7d262580-d757-11ea-88dc-29bbf314f880.png)

For the grand finale, go into your codespace and locate what should be line `17` where you have `backgroundColor` and change it to `pink` then save the file. If the phone is still connected you should see it change color automatically. Then change it again. If you're feeling adventurous go into Line 8 and change the text and see it change live on your phone. 

> Remember if the device disconnected from our codespace, just shake it to bring up the Expo menu and click reload.

## Parting note

I find it awesome that I could either create or clone a fully fledge app, on a fully configured cloud IDE ready to test a small change, or develop across the world in a chromebook I just borrowed. I'm not even talking about open source, which is think will be the greatest application of Codespaces. If I just need to launch a workspace to quickly fix and test a pull request versus having to clone and deal with the local setup, I believe that will make community contributions one step easier.

## Improvements

As I write this there are some things I still haven't completely figured out, but I plan to and will update the article accordingly. Those involve accessing the Expo Dev Tools on the codespace and ensuring the tunnel connection is more stable.

Stay safe.









:octocat::heart: 