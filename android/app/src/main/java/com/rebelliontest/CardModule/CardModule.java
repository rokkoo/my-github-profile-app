package com.rebelliontest.CardModule;

import android.graphics.Color;
import android.graphics.drawable.GradientDrawable;
import android.widget.LinearLayout;

import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.views.view.ReactViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.squareup.picasso.Picasso;
import androidx.annotation.NonNull;

public class CardModule extends ViewGroupManager<LinearLayout> {
    private static  final String MODULE_NAME = "CardModule";

    @NonNull
    @Override
    public String getName() {
        return MODULE_NAME;
    }

    @NonNull
    @Override
    protected LinearLayout createViewInstance(@NonNull ThemedReactContext reactContext) {
        LinearLayout linearLayout = new LinearLayout(reactContext);

        LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(40, 10);
        linearLayout.setLayoutParams(params);


        return new LinearLayout(reactContext);
    }

    @ReactProp(name="customColor")
    public void setBgColor(LinearLayout linearLayout, String customColor){
        linearLayout.setGravity(50);
        linearLayout.setBackgroundColor(Color.parseColor(customColor));
    }

    @ReactProp(name="borderColor")
    public void setMargingLeft(LinearLayout linearLayout, String borderColor){
        GradientDrawable gradientDrawable=new GradientDrawable();
        gradientDrawable.setStroke(10, Color.parseColor(borderColor));
        linearLayout.setBackground(gradientDrawable);
    }


}
