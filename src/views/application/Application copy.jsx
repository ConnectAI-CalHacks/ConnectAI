import React, { useState } from 'react';
import './AppStyles.css';

export default function Component() {
  const [formData, setFormData] = useState({
    myName: '',
    myPhoneNum: '',
    callerName: '',
    callerPhoneNum: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { callerPhoneNum } = formData;

    // Ensure the phone number has a country code
    const formattedCallerPhoneNum = callerPhoneNum.startsWith('+')
      ? callerPhoneNum
      : `+1${callerPhoneNum}`; // Assuming US country code, replace if necessary

    const callPayload = {
      phoneNumberId: 'fcc60a94-7078-4d08-9084-589ae478e0c4',  // Replace with your actual phone number ID
      assistantId: '5d379499-2f41-4120-89c5-2a73abc50570',  // Your correct assistant ID
      customer: {
        number: formattedCallerPhoneNum,  // Caller phone number from the form
      },
      type: 'outboundPhoneCall'
    };

    try {
      // Make the initial call to callerPhoneNum
      const callResponse = await fetch('https://api.vapi.ai/call', { // Full API URL
        method: 'POST',
        headers: {
          Authorization: 'Bearer 2ac772ff-5902-40bd-af27-cc01063b776e',  // Replace with your actual API key
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(callPayload),
      });

      if (!callResponse.ok) {
        const errorDetails = await callResponse.json(); // Get error details
        console.error('Error Details:', errorDetails);
        throw new Error(`Error initiating the call: ${errorDetails.message}`);
      }

      const callData = await callResponse.json();
      console.log('Call initiated successfully:', callData);
      
    } catch (error) {
      console.error('Error handling the call:', error);
    }
  };

  return (
    <div>
      <h1>Welcome to the application page!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>My Name:</label>
          <input
            type="text"
            name="myName"
            value={formData.myName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>My Phone Number:</label>
          <input
            type="text"
            name="myPhoneNum"
            value={formData.myPhoneNum}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Caller Name:</label>
          <input
            type="text"
            name="callerName"
            value={formData.callerName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Caller Phone Number:</label>
          <input
            type="text"
            name="callerPhoneNum"
            value={formData.callerPhoneNum}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


const options = {
  method: 'POST',
  headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
  body: '{"transcriber":{"provider":"deepgram","model":"nova-2","language":"bg","smartFormat":false,"keywords":["<string>"],"endpointing":255},"model":{"messages":[{"content":"<string>","role":"assistant"}],"tools":[{"async":false,"messages":[{"type":"request-start","content":"<string>","conditions":[{"value":"<string>","operator":"eq","param":"<string>"}]}],"type":"dtmf","function":{"name":"<string>","description":"<string>","parameters":{"type":"object","properties":{},"required":["<string>"]}},"server":{"timeoutSeconds":20,"url":"<string>","secret":"<string>"}}],"toolIds":["<string>"],"provider":"anyscale","model":"<string>","temperature":1,"knowledgeBase":{"provider":"canonical","topK":5.5,"fileIds":["<string>"]},"maxTokens":525,"emotionRecognitionEnabled":true,"numFastTurns":1},"voice":{"fillerInjectionEnabled":false,"provider":"azure","voiceId":"andrew","speed":1.25,"chunkPlan":{"enabled":true,"minCharacters":30,"punctuationBoundaries":["。","，",".","!","?",";","،","۔","।","॥","|","||",",",":"],"formatPlan":{"enabled":true,"numberToDigitsCutoff":2025}}},"firstMessageMode":"assistant-speaks-first","recordingEnabled":true,"hipaaEnabled":false,"clientMessages":["conversation-update","function-call","hang","model-output","speech-update","status-update","transcript","tool-calls","user-interrupted","voice-input"],"serverMessages":["conversation-update","end-of-call-report","function-call","hang","speech-update","status-update","tool-calls","transfer-destination-request","user-interrupted"],"silenceTimeoutSeconds":30,"maxDurationSeconds":600,"backgroundSound":"office","backchannelingEnabled":false,"backgroundDenoisingEnabled":false,"modelOutputInMessagesEnabled":false,"transportConfigurations":[{"provider":"twilio","timeout":60,"record":false,"recordingChannels":"mono"}],"name":"<string>","firstMessage":"<string>","voicemailDetection":{"provider":"twilio","voicemailDetectionTypes":["machine_end_beep","machine_end_silence"],"enabled":true,"machineDetectionTimeout":31,"machineDetectionSpeechThreshold":3500,"machineDetectionSpeechEndThreshold":2750,"machineDetectionSilenceTimeout":6000},"voicemailMessage":"<string>","endCallMessage":"<string>","endCallPhrases":["<string>"],"metadata":{},"serverUrl":"<string>","serverUrlSecret":"<string>","analysisPlan":{"summaryPrompt":"<string>","summaryRequestTimeoutSeconds":10.5,"structuredDataRequestTimeoutSeconds":10.5,"successEvaluationPrompt":"<string>","successEvaluationRubric":"NumericScale","successEvaluationRequestTimeoutSeconds":10.5,"structuredDataPrompt":"<string>","structuredDataSchema":{"type":"string","items":{},"properties":{},"description":"<string>","required":["<string>"]}},"artifactPlan":{"videoRecordingEnabled":true,"recordingS3PathPrefix":"<string>"},"messagePlan":{"idleMessages":["<string>"],"idleMessageMaxSpokenCount":5.5,"idleTimeoutSeconds":17.5},"startSpeakingPlan":{"waitSeconds":0.4,"smartEndpointingEnabled":false,"transcriptionEndpointingPlan":{"onPunctuationSeconds":0.1,"onNoPunctuationSeconds":1.5,"onNumberSeconds":0.5}},"stopSpeakingPlan":{"numWords":0,"voiceSeconds":0.2,"backoffSeconds":1},"credentialIds":["<string>"]}'
};

fetch('https://api.vapi.ai/assistant', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));