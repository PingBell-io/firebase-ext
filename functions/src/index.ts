import * as functions from "firebase-functions/v1";
import * as admin from "firebase-admin";
import fetch from "node-fetch";
import * as dotenv from "dotenv";

dotenv.config();
admin.initializeApp();

export const onUserPingbellCall = functions.auth.user().onCreate(async (user) => {
  const webhookUrl = process.env.PINGBELL_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("Missing webhook URL");
    return;
  }

  if (!user) {
    console.error("No user data received");
    return;
  }

  const payload = {
    uid: user.uid,
    email: user.email || "",
    displayName: user.displayName || "",
    createdAt: new Date().toISOString(),
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error("Failed to send data to PingBell:", await response.text());
    } else {
      console.log("User data sent successfully to PingBell.");
    }
  } catch (error) {
    console.error("Error sending data to PingBell:", error);
  }
});
