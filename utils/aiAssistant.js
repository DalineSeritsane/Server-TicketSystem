const axios = require('axios');

 const getAIResponse = async (message) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo', 
        messages: [
          { role: 'user', content: message }
        ],
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );


    return response.data.choices?.[0]?.message?.content || 'No response';
  } catch (error) {
    console.error('OpenAI API Error:', error.message);
    return 'Sorry, an error occurred while generating a response.';
  }
};

module.exports = {getAIResponse}