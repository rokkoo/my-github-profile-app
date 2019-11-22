package com.rebelliontest.ImageModule;

import android.widget.ImageView;
import android.widget.SimpleAdapter;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.squareup.picasso.Picasso;
import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;


public class ImageModule extends SimpleViewManager<ImageView> {
    private static  final String MODULE_NAME = "ImageModule";

    // Specifies the module name
    @NonNull
    @Override
    public String getName() {
        return MODULE_NAME;
    }

    @NonNull
    @Override
    protected ImageView createViewInstance(@NonNull ThemedReactContext reactContext) {
        return new ImageView(reactContext);
    }

    @ReactProp(name="url")
    public void setImageUrl(ImageView imageView, String url){
        Picasso.get().load(url).into(imageView);
    }


}
