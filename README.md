# Smart-Power-Control

A React-Native app that acts as a client to fetch and update information about different home devices from Firebase. The app retrieves data of three commonly used devices:
 - BULB
 - LED
 - PLUG

The information fetched includes the current status of the device ( whether the device is in use or not ), the amount of power used by the device, the amount of the bill payable. The total amount of power consumed and the total bill payable are calculated using the above data. Any change in the values of these devices will automatically gets displayed in the app. Any corresponding change in power or amount in the database will change the total power consumed as well as the total bill payable.

You can run the app-release.apk in your device or emulator to test out the app without installing any of the dependencies.

The app-release.apk is present in /android/app/build/outputs/apk/
 
