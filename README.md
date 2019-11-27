# My guthub profile app

My github profile app is an aplication ths is builded with [react-native](https://facebook.github.io/react-native/ "react-native link").
The aplication shows github profile picture and user name at header.
We have a list of current repositorries repositories, ordered by recent date.
Each repositori is linked to his repo url so if you tab in it will open your browser with the link.

The application use two custom native modules, this two modules only runs in android for now.

# Usage

```javascript
    npm start // start the react packager/server
    npm start:dev // start start the react packager/server & start android simulator
    npm install // Install all dependencies
```

# Added own native modules (android)

> Image Module connect with [ImageView](https://developer.android.com/reference/android/widget/ImageView, "ImageView") class in case of Android. This module accep url at props, we use a external deppendencie [Picasso](https://github.com/square/picasso "Picasso"), allows for hassle-free image loading in an application, it use a minimal memory and disk caching.

> Shared preferences module connect with a [Share preference API](https://developer.android.com/reference/android/content/SharedPreferences.html, "Shared preference api"), in case of android, this module get or storage at passed key name-value it a "THEME_PREFERENCES" shared preference.
>
> - To use get function call getSharedPreference(String sharedPreferenceName, callback(error, result)).
> - To use set function call setSharedPreference(String sharedPreferenceName, String sharedPreferenceValue, callback(error, result)).

| Module name             | Path                                                                                             |
| ----------------------- | ------------------------------------------------------------------------------------------------ |
| ImageModule             | android/app/src/main/java/com/rebelliontest/ImageModule/ImageModule.java                         |
| SharedPreferencesModule | android/app/src/main/java/com/rebelliontest/SharedPreferencesModule/SharedPreferencesModule.java |

# TODOS

- [x] At least one Native Module integration between android and Javascript.
  - [x] ImageView UI native componente
  - [x] Shared preferences system native componente
- [x] Consume github API (my profile).
- [x] Make UI.
  - [x] Show list order by time ASC
- [x] Clean code.
