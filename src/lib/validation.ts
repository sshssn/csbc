// Profanity filter - common words to check for
const profanityList = [
  'fuck', 'shit', 'bitch', 'ass', 'damn', 'hell', 'crap', 'piss', 'dick', 'cock', 'pussy', 'cunt',
  'fucking', 'shitting', 'bitching', 'asshole', 'dumbass', 'jackass', 'motherfucker', 'fucker',
  'shitty', 'fucked', 'shitted', 'bitchy', 'asshole', 'dumbass', 'jackass', 'motherfucker',
  // Add more variations and common profanity
];

// Email validation
export const validateEmail = (email: string): { isValid: boolean; error?: string } => {
  if (!email) {
    return { isValid: false, error: 'Email is required' };
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }
  
  return { isValid: true };
};

// Phone validation (UAE format)
export const validatePhone = (phone: string): { isValid: boolean; error?: string } => {
  if (!phone) {
    return { isValid: false, error: 'Phone number is required' };
  }
  
  // Remove all non-digit characters
  const cleanPhone = phone.replace(/\D/g, '');
  
  // UAE phone number validation (starts with 971 or 0, 9-10 digits)
  const uaePhoneRegex = /^(971|0)?[2-9]\d{8}$/;
  if (!uaePhoneRegex.test(cleanPhone)) {
    return { isValid: false, error: 'Please enter a valid UAE phone number' };
  }
  
  return { isValid: true };
};

// Message validation with profanity check
export const validateMessage = (message: string): { isValid: boolean; error?: string } => {
  if (!message) {
    return { isValid: false, error: 'Message is required' };
  }
  
  if (message.length < 10) {
    return { isValid: false, error: 'Message must be at least 10 characters long' };
  }
  
  if (message.length > 1000) {
    return { isValid: false, error: 'Message must be less than 1000 characters' };
  }
  
  // Check for profanity
  const lowerMessage = message.toLowerCase();
  const foundProfanity = profanityList.find(word => lowerMessage.includes(word));
  
  if (foundProfanity) {
    return { isValid: false, error: 'Message contains inappropriate content. Please revise your message.' };
  }
  
  return { isValid: true };
};

// Name validation
export const validateName = (name: string): { isValid: boolean; error?: string } => {
  if (!name) {
    return { isValid: false, error: 'Name is required' };
  }
  
  if (name.length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters long' };
  }
  
  if (name.length > 50) {
    return { isValid: false, error: 'Name must be less than 50 characters' };
  }
  
  // Check for profanity in name
  const lowerName = name.toLowerCase();
  const foundProfanity = profanityList.find(word => lowerName.includes(word));
  
  if (foundProfanity) {
    return { isValid: false, error: 'Name contains inappropriate content' };
  }
  
  return { isValid: true };
};

// Service selection validation
export const validateService = (service: string): { isValid: boolean; error?: string } => {
  if (!service) {
    return { isValid: false, error: 'Please select a service' };
  }
  
  const validServices = ['general', 'support', 'other'];
  if (!validServices.includes(service)) {
    return { isValid: false, error: 'Please select a valid service' };
  }
  
  return { isValid: true };
};

// Comprehensive form validation
export const validateContactForm = (data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};
  
  // Validate each field
  const firstNameValidation = validateName(data.firstName);
  if (!firstNameValidation.isValid) {
    errors.firstName = firstNameValidation.error!;
  }
  
  const lastNameValidation = validateName(data.lastName);
  if (!lastNameValidation.isValid) {
    errors.lastName = lastNameValidation.error!;
  }
  
  const emailValidation = validateEmail(data.email);
  if (!emailValidation.isValid) {
    errors.email = emailValidation.error!;
  }
  
  const phoneValidation = validatePhone(data.phone);
  if (!phoneValidation.isValid) {
    errors.phone = phoneValidation.error!;
  }
  
  const serviceValidation = validateService(data.service);
  if (!serviceValidation.isValid) {
    errors.service = serviceValidation.error!;
  }
  
  const messageValidation = validateMessage(data.message);
  if (!messageValidation.isValid) {
    errors.message = messageValidation.error!;
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}; 