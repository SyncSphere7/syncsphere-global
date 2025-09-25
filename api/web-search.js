export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { query, maxResults = 5 } = req.body;

  if (!query) {
    return res.status(400).json({ error: 'Query is required' });
  }

  try {
    // Use DuckDuckGo Instant Answer API (free)
    const searchUrl = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_html=1&skip_disambig=1`;
    
    const response = await fetch(searchUrl);
    const data = await response.json();

    // Extract useful information
    const results = {
      abstract: data.Abstract || '',
      abstractSource: data.AbstractSource || '',
      abstractUrl: data.AbstractURL || '',
      answer: data.Answer || '',
      answerType: data.AnswerType || '',
      definition: data.Definition || '',
      definitionSource: data.DefinitionSource || '',
      definitionUrl: data.DefinitionURL || '',
      relatedTopics: data.RelatedTopics?.slice(0, maxResults).map(topic => ({
        text: topic.Text || '',
        url: topic.FirstURL || ''
      })) || [],
      results: data.Results?.slice(0, maxResults).map(result => ({
        text: result.Text || '',
        url: result.FirstURL || ''
      })) || []
    };

    // If no direct results, try web scraping popular sources
    if (!results.abstract && !results.answer && results.relatedTopics.length === 0) {
      try {
        // Search for recent articles/news
        const newsSearchUrl = `https://api.duckduckgo.com/?q=${encodeURIComponent(query + ' news 2024')}&format=json&no_html=1`;
        const newsResponse = await fetch(newsSearchUrl);
        const newsData = await newsResponse.json();
        
        if (newsData.RelatedTopics?.length > 0) {
          results.relatedTopics = newsData.RelatedTopics.slice(0, maxResults).map(topic => ({
            text: topic.Text || '',
            url: topic.FirstURL || ''
          }));
        }
      } catch (newsError) {
        console.error('News search error:', newsError);
      }
    }

    res.status(200).json({
      success: true,
      query,
      results,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ 
      error: 'Search failed',
      details: error.message 
    });
  }
}