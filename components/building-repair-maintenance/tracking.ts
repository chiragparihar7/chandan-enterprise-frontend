
"use client";

type TrackingValue = string | number | boolean | undefined;

type TrackingParams = Record<string, TrackingValue>;

type TrackingEvent = {
  event: string;
  [key: string]: TrackingValue;
};

declare global {
  interface Window {
    dataLayer?: TrackingEvent[];
  }
}

/**
 * Push a custom event to the Google Tag Manager dataLayer.
 */
export function trackEvent(
  eventName: string,
  params: TrackingParams = {}
): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  const cleanParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined)
  );

  window.dataLayer.push({
    ...cleanParams,
    event: eventName,
  });
}

/**
 * Track clicks on phone links.
 */
export function trackPhoneClick(location: string): void {
  trackEvent("phone_click", {
    event_category: "engagement",
    link_type: "phone",
    link_location: location,
  });
}

/**
 * Track clicks on WhatsApp links.
 */
export function trackWhatsAppClick(location: string): void {
  trackEvent("whatsapp_click", {
    event_category: "engagement",
    link_type: "whatsapp",
    link_location: location,
  });
}

/**
 * Track the first interaction with a lead form.
 */
export function trackFormStart(
  formName = "site_inspection_request"
): void {
  trackEvent("form_start", {
    form_name: formName,
    event_category: "engagement",
  });
}

/**
 * Track a successful lead form submission.
 * Call only after the backend confirms success.
 */
export function trackLeadSubmit(
  formName = "site_inspection_request"
): void {
  trackEvent("generate_lead", {
    event_category: "lead_generation",
    form_name: formName,
    lead_type: "site_inspection_request",
  });
}
