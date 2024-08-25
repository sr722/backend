exports.handler = async function(event, context) {
    if (event.httpMethod === 'POST') {
      const data = JSON.parse(event.body).data || [];
      const numbers = data.filter(item => !isNaN(item));
      const alphabets = data.filter(item => isNaN(item));
      const lowercaseAlphabets = alphabets.filter(a => a === a.toLowerCase());
      const highestLowercaseAlphabet = lowercaseAlphabets.sort().pop();
  
      return {
        statusCode: 200,
        body: JSON.stringify({
          is_success: true,
          user_id: 'john_doe_17091999',
          email: 'john@xyz.com',
          roll_number: 'ABCD123',
          numbers: numbers,
          alphabets: alphabets,
          highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
        })
      };
    }
  
    if (event.httpMethod === 'GET') {
      return {
        statusCode: 200,
        body: JSON.stringify({ operation_code: 1 })
      };
    }
  
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  };
  