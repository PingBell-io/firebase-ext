# Sync Firebase Auth Users with PingBell

## What This Extension Does

This Firebase Extension automatically listens for new user registrations in Firebase Authentication and sends a notification to your PingBell service.

## Features

- Listens for new user sign-ups in Firebase Authentication.
- Sends a notification with user details to a specified PingBell.
- Works seamlessly with Firebase Cloud Functions.

## Setup Requirements

1. You must have a **PingBell Webhook URL** to receive new user data.
2. Ensure that your Firebase project has **Firebase Authentication** enabled.

## Configuration Parameters

- **PINGBELL_WEBHOOK_URL**: The URL where new user data will be sent.

## How It Works

Once installed, this extension will automatically:

- Listen for new user registrations.
- Trigger a Cloud Function that sends a webhook request to your **PingBell Webhook URL**.

## Need Help?

For troubleshooting, check the Firebase logs:

```sh
firebase functions:log
```
