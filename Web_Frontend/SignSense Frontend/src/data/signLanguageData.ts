// American Sign Language (ASL) and Indian Sign Language (ISL) gesture data
export interface SignLanguageGesture {
  id: string;
  gesture: string;
  translation: string;
  language: 'ASL' | 'ISL';
  category: 'greeting' | 'medical' | 'emergency' | 'basic' | 'question' | 'emotion';
  confidence?: number;
}

export const aslGestures: SignLanguageGesture[] = [
  // Greetings
  { id: 'asl_1', gesture: 'hello', translation: 'Hello', language: 'ASL', category: 'greeting' },
  { id: 'asl_2', gesture: 'goodbye', translation: 'Goodbye', language: 'ASL', category: 'greeting' },
  { id: 'asl_3', gesture: 'good_morning', translation: 'Good morning', language: 'ASL', category: 'greeting' },
  { id: 'asl_4', gesture: 'good_night', translation: 'Good night', language: 'ASL', category: 'greeting' },
  
  // Medical/Healthcare
  { id: 'asl_5', gesture: 'pain', translation: 'I am in pain', language: 'ASL', category: 'medical' },
  { id: 'asl_6', gesture: 'help', translation: 'I need help', language: 'ASL', category: 'medical' },
  { id: 'asl_7', gesture: 'doctor', translation: 'I need a doctor', language: 'ASL', category: 'medical' },
  { id: 'asl_8', gesture: 'medicine', translation: 'I need my medicine', language: 'ASL', category: 'medical' },
  { id: 'asl_9', gesture: 'hospital', translation: 'Take me to the hospital', language: 'ASL', category: 'medical' },
  { id: 'asl_10', gesture: 'nurse', translation: 'Please call a nurse', language: 'ASL', category: 'medical' },
  
  // Emergency
  { id: 'asl_11', gesture: 'emergency', translation: 'This is an emergency', language: 'ASL', category: 'emergency' },
  { id: 'asl_12', gesture: 'call_911', translation: 'Call 911', language: 'ASL', category: 'emergency' },
  { id: 'asl_13', gesture: 'hurt', translation: 'I am hurt', language: 'ASL', category: 'emergency' },
  
  // Basic Communication
  { id: 'asl_14', gesture: 'yes', translation: 'Yes', language: 'ASL', category: 'basic' },
  { id: 'asl_15', gesture: 'no', translation: 'No', language: 'ASL', category: 'basic' },
  { id: 'asl_16', gesture: 'please', translation: 'Please', language: 'ASL', category: 'basic' },
  { id: 'asl_17', gesture: 'thank_you', translation: 'Thank you', language: 'ASL', category: 'basic' },
  { id: 'asl_18', gesture: 'sorry', translation: 'I am sorry', language: 'ASL', category: 'basic' },
  { id: 'asl_19', gesture: 'wait', translation: 'Please wait', language: 'ASL', category: 'basic' },
  
  // Questions
  { id: 'asl_20', gesture: 'where_bathroom', translation: 'Where is the bathroom?', language: 'ASL', category: 'question' },
  { id: 'asl_21', gesture: 'how_much', translation: 'How much does this cost?', language: 'ASL', category: 'question' },
  { id: 'asl_22', gesture: 'what_time', translation: 'What time is it?', language: 'ASL', category: 'question' },
  
  // Emotions
  { id: 'asl_23', gesture: 'happy', translation: 'I am happy', language: 'ASL', category: 'emotion' },
  { id: 'asl_24', gesture: 'sad', translation: 'I am sad', language: 'ASL', category: 'emotion' },
  { id: 'asl_25', gesture: 'angry', translation: 'I am angry', language: 'ASL', category: 'emotion' },
  { id: 'asl_26', gesture: 'scared', translation: 'I am scared', language: 'ASL', category: 'emotion' },
];

export const islGestures: SignLanguageGesture[] = [
  // Greetings
  { id: 'isl_1', gesture: 'namaste', translation: 'Namaste (Hello)', language: 'ISL', category: 'greeting' },
  { id: 'isl_2', gesture: 'dhanyawad', translation: 'Thank you', language: 'ISL', category: 'greeting' },
  { id: 'isl_3', gesture: 'alvida', translation: 'Goodbye', language: 'ISL', category: 'greeting' },
  
  // Medical/Healthcare
  { id: 'isl_4', gesture: 'dard', translation: 'मुझे दर्द है (I have pain)', language: 'ISL', category: 'medical' },
  { id: 'isl_5', gesture: 'madad', translation: 'मदद चाहिए (I need help)', language: 'ISL', category: 'medical' },
  { id: 'isl_6', gesture: 'doctor', translation: 'डॉक्टर को बुलाएं (Call a doctor)', language: 'ISL', category: 'medical' },
  { id: 'isl_7', gesture: 'dawai', translation: 'दवाई चाहिए (I need medicine)', language: 'ISL', category: 'medical' },
  { id: 'isl_8', gesture: 'aspatal', translation: 'अस्पताल ले चलो (Take me to hospital)', language: 'ISL', category: 'medical' },
  
  // Emergency
  { id: 'isl_9', gesture: 'apatkal', translation: 'आपातकाल (Emergency)', language: 'ISL', category: 'emergency' },
  { id: 'isl_10', gesture: 'police', translation: 'पुलिस को बुलाएं (Call police)', language: 'ISL', category: 'emergency' },
  
  // Basic Communication
  { id: 'isl_11', gesture: 'haan', translation: 'हाँ (Yes)', language: 'ISL', category: 'basic' },
  { id: 'isl_12', gesture: 'nahin', translation: 'नहीं (No)', language: 'ISL', category: 'basic' },
  { id: 'isl_13', gesture: 'kripaya', translation: 'कृपया (Please)', language: 'ISL', category: 'basic' },
  { id: 'isl_14', gesture: 'intezar', translation: 'इंतजार करें (Please wait)', language: 'ISL', category: 'basic' },
  { id: 'isl_15', gesture: 'maaf', translation: 'माफ करें (Sorry)', language: 'ISL', category: 'basic' },
  
  // Questions
  { id: 'isl_16', gesture: 'bathroom_kahan', translation: 'बाथरूम कहाँ है? (Where is the bathroom?)', language: 'ISL', category: 'question' },
  { id: 'isl_17', gesture: 'kitna_paisa', translation: 'कितना पैसा? (How much money?)', language: 'ISL', category: 'question' },
  { id: 'isl_18', gesture: 'kya_samay', translation: 'क्या समय है? (What time is it?)', language: 'ISL', category: 'question' },
  
  // Emotions
  { id: 'isl_19', gesture: 'khush', translation: 'मैं खुश हूँ (I am happy)', language: 'ISL', category: 'emotion' },
  { id: 'isl_20', gesture: 'udaas', translation: 'मैं उदास हूँ (I am sad)', language: 'ISL', category: 'emotion' },
  { id: 'isl_21', gesture: 'gussa', translation: 'मैं गुस्से में हूँ (I am angry)', language: 'ISL', category: 'emotion' },
];

export const allGestures = [...aslGestures, ...islGestures];

// Simulated gesture recognition function
export const recognizeGesture = (videoFrame?: ImageData): SignLanguageGesture | null => {
  // In a real implementation, this would use ML models like MediaPipe or TensorFlow.js
  // For now, we'll simulate gesture recognition by returning random gestures
  const randomGesture = allGestures[Math.floor(Math.random() * allGestures.length)];
  
  // Add confidence score simulation
  const confidence = Math.random() * 0.4 + 0.6; // Random confidence between 0.6-1.0
  
  return {
    ...randomGesture,
    confidence: Math.round(confidence * 100) / 100
  };
};

// Filter gestures by language
export const getGesturesByLanguage = (language: 'ASL' | 'ISL'): SignLanguageGesture[] => {
  return allGestures.filter(gesture => gesture.language === language);
};

// Filter gestures by category
export const getGesturesByCategory = (category: SignLanguageGesture['category']): SignLanguageGesture[] => {
  return allGestures.filter(gesture => gesture.category === category);
};