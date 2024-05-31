const express = require('express');
const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];
const KEYFILEPATH = path.join(__dirname, 'supple-cubist-425006-d2-b4ca187f8b6d.json');

const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES,
});

app.get('/token', async (req, res) => {
  const client = await auth.getClient();
  const token = await client.getAccessToken();
  res.json(token);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
