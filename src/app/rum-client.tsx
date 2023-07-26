"use client"
import { RUM_APPLICATION_ID_CLOUDFRONT, RUM_APPLICATION_ID_ELB } from '@/config';
import { AwsRum, AwsRumConfig } from 'aws-rum-web';
import { useEffect } from 'react';

export const RumClient = () => {
  useEffect(() => { // We run this only on the client side, as it depends on global window object
    const applicationId = getRumApplicationId();
    if (applicationId) {
      enableRum(applicationId)
    }
  }, []);

  return <></> // Nothing to render
}

const getRumApplicationId = () => {
  console.log('window.location.hostname used for RUM:', window.location.hostname);
  if (window.location.hostname.includes('cloudfront')) return RUM_APPLICATION_ID_CLOUDFRONT;
  if (window.location.hostname.includes('elb.amazonaws.com')) return RUM_APPLICATION_ID_ELB;
}

const enableRum = (applicationId: string) => {
  try {
    const config: AwsRumConfig = {
      sessionSampleRate: 1,
      guestRoleArn: "arn:aws:iam::855557350391:role/RUM-Monitor-us-east-1-855557350391-0940361630961-Unauth",
      identityPoolId: "us-east-1:06cf6051-65f7-43d8-9ff3-ccec654f367e",
      endpoint: "https://dataplane.rum.us-east-1.amazonaws.com",
      telemetries: ["performance", "errors", "http"],
      allowCookies: true,
      enableXRay: false
    };

    new AwsRum(applicationId, '1.0.0', 'us-east-1', config);
  } catch (error) {
    // Ignore errors thrown during CloudWatch RUM web client initialization
    console.error(error);
  }
}
