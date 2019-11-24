package com.rebelliontest.SharedPreferencesModule;

import android.content.Context;
import android.content.SharedPreferences;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class SharedPreferencesModule extends ReactContextBaseJavaModule {
    private static  String MODULE_NAME = "SharedPreferencesModule";
    private static  String THEME_PREFERENCE_NAME = "THEME_PREFERENCES";
    SharedPreferences sharedPreferences;


    // Constructor
    public SharedPreferencesModule(@NonNull ReactApplicationContext reactContext) {
        super(reactContext);
        sharedPreferences = getReactApplicationContext().getSharedPreferences(THEME_PREFERENCE_NAME, Context.MODE_PRIVATE); // Only redable by our app
    }

    @NonNull
    @Override
    public String getName() {
        return MODULE_NAME;
    }


    // Get specific shared preference
    @ReactMethod
    public void getSharedPreference(String sharedPreferenceName, Callback cb){
        try {
            String theme_preference = sharedPreferences.getString(sharedPreferenceName, null);
            cb.invoke(null, theme_preference);
        }catch (Exception e){
            cb.invoke(e.toString(), null);
        }
    }

    // Set value to a shared preference
    @ReactMethod
    public void setSharedPreference(String sharedPreferenceName, String sharedPreferenceValue, Callback cb){
        try {
            SharedPreferences.Editor editor = sharedPreferences.edit();
            editor.putString(sharedPreferenceName, sharedPreferenceValue);
            editor.apply();
            cb.invoke(null, true); // Saved
        }catch (Exception e) {
            cb.invoke(e.toString(), null); // error saving
        }
    }
}
