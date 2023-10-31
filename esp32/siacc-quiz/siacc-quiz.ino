#include <ezButton.h>
#include <WiFi.h>
#include <HTTPClient.h>

#define DEBOUNCE_TIME 50  // the debounce time in millisecond, increase this time if it still chatters

ezButton buttonTrue(25);  // create ezButton object that attach to pin GPIO21
ezButton buttonFalse(33);  // create ezButton object that attach to pin GPIO21


const char WIFI_SSID[] = "InfoCTBJ";      // CHANGE IT
const char WIFI_PASSWORD[] = "12345670";  // CHANGE IT


// String HOST_NAME = "http://192.168.0.103:3000/questao";  // CHANGE IT
String HOST_NAME = "http://192.168.1.17:3000/questao";  // CHANGE IT
String PATH_NAME = "";                                   // CHANGE IT


HTTPClient http;

void setup() {
  Serial.begin(9600);
  buttonTrue.setDebounceTime(DEBOUNCE_TIME);  // set debounce time to 50 milliseconds
  buttonFalse.setDebounceTime(DEBOUNCE_TIME);  // set debounce time to 50 milliseconds

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.println("Connecting");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  buttonTrue.loop();  // MUST call the loop() function first
  buttonFalse.loop();  // MUST call the loop() function first

  // if (button.isPressed())
  //   Serial.println("The button is pressed");

  if (buttonTrue.isReleased()) {
    get("/true");
  }

  if (buttonFalse.isReleased()) {
    get("/false");
  }
}

void get(String path ) {
  http.begin(HOST_NAME + path);
  http.addHeader("Content-Type", "application/json");
  int httpCode = http.GET();
  // httpCode will be negative on error
  if (httpCode > 0) {
    // file found at server
    if (httpCode == HTTP_CODE_OK) {
      String payload = http.getString();
      Serial.println(payload);
    } else {
      // HTTP header has been send and Server response header has been handled
      Serial.printf("[HTTP] GET... code: %d\n", httpCode);
    }
  } else {
    Serial.printf("[HTTP] GET... failed, error: %s\n", http.errorToString(httpCode).c_str());
  }
  http.end();
}
