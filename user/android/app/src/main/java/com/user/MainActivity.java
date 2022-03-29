package com.user;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import com.zoontek.rnbootsplash.RNBootSplash;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "user";
  }
  @Override
  protected void onCreate(Bundle saveInstanceState){
    super.onCreate(saveInstanceState);
    RNBootSplash.init(R.drawable.bootsplash, MainActivity.this);
  }
}
