import React from 'react';

export type ViewState = 'home' | 'about' | 'tutors' | 'stories' | 'locations' | 'services';

export interface Tutor {
  id: string;
  name: string;
  role: string;
  description: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  text: string[];
}

export interface ServiceItem {
  title: string;
  subtitle: string;
  icon: React.ElementType;
}