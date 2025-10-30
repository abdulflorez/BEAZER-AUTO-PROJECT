interface NewHomeInformationForm {
  firstName: string;
  lastName: string;
  email: string;
  currentZip?: string;
  phoneNumber?: string;
  questionsComments?: string;
  locations: 'Atlanta' | 'Charleston';
  priceMin: 'No Minimum' | '$200K+';
  priceMax: 'Up to $300K' | 'Up to $400K';
}
