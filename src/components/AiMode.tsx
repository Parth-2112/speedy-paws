    // const fetchWords = async () => {
    //     try {
    //         const response = await fetch(
    //             `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    //             {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 body: JSON.stringify({
    //                     contents: [
    //                         {
    //                             parts: [
    //                                 {
    //                                     text: "Generate a coherent sentence exactly 60 words long, suitable for a typing game. Do not include any special characters or numbers, only letters and spaces. Ensure the sentence flows naturally and is grammatically correct. no need to give any explanation or additional text, just the sentence itself.",
    //                                 },
    //                             ],
    //                         },
    //                     ],
    //                     generationConfig: {
    //                         // Max output tokens for roughly 60 words. 100 tokens ~ 60-80 words.
    //                         // Setting it to 80-90 tokens should give you around 60 words,
    //                         // but you might need to adjust based on actual output.
    //                         maxOutputTokens: 90, 
    //                         temperature: 0.7, // Adjust for creativity (0.0 for more deterministic, 1.0 for more creative)
    //                     },
    //                 }),
    //             }
    //         );

    //         if (!response.ok) {
    //             const errorData = await response.json();
    //             throw new Error(`API error: ${response.status} - ${errorData.error.message}`);
    //         }

    //         const data = await response.json();
    //         const generatedText = data.candidates[0].content.parts[0].text;

    //         // You might need to do some post-processing to ensure exactly 60 words
    //         const processedWords = generatedText.split(/\s+/).filter(word => word.length > 0);
    //         let nwords = processedWords.slice(0, 60).join(" ");

    //         setWords(nwords); // Update the state with the fetched words
    //         console.log("Fetched words:", nwords);
    //         // Here you would typically update your game state with the new words
    //         // For example, if you are using React, you would set a state variable:
    //         // setWords(words); 

    //     } catch (error) {
    //         console.error("Error fetching words:", error);
    //         // Handle the error in your UI, e.g., display a message to the user
    //     }
    // };
