"use client"

import { AwsRum, AwsRumConfig } from 'aws-rum-web';

export const RumClient = () => {
  try {
    const config: AwsRumConfig = {
      sessionSampleRate: 1,
      guestRoleArn: "arn:aws:iam::855557350391:role/RUM-Monitor-us-east-1-855557350391-0940361630961-Unauth",
      identityPoolId: "us-east-1:06cf6051-65f7-43d8-9ff3-ccec654f367e",
      endpoint: "https://dataplane.rum.us-east-1.amazonaws.com",
      telemetries: ["performance","errors","http"],
      allowCookies: true,
      enableXRay: false
    };
  
    const APPLICATION_ID: string = 'e4533760-7e37-4884-a787-60e8b85b95f1';
    const APPLICATION_VERSION: string = '1.0.0';
    const APPLICATION_REGION: string = 'us-east-1';
  
    const awsRum: AwsRum = new AwsRum(
      APPLICATION_ID,
      APPLICATION_VERSION,
      APPLICATION_REGION,
      config
    );
  } catch (error) {
    // Ignore errors thrown during CloudWatch RUM web client initialization
  }

  return <p>RUM loaded.</p>
}