// Receives the Tool URL and then uses AI Models to get the relevant info by scrapping and parsing
import axios from "axios";

export async function parseToolData(url) {
  const prompt = `
Extract structured information about the AI tool from the given URL.

Follow these rules STRICTLY:
1. Return ONLY valid JSON and Do not Return backticks before the braces of the JSON. 
2. Do NOT return any text outside the JSON (no explanations, no markdown, no comments, no backticks).
3. If information is missing and cannot be inferred from REAL data, return an empty string "", empty array [], or false. NEVER hallucinate.
4. Make sure to Provide the Company Name, if company Name does not exists Provide the Tool Name in the company name field and also if company website does not exists provide tool url in place of company_url and  for the company_logo and other fields of the company if not applicaple use relevant tool/product info.
Inference Rules:
- If a field is missing, you may infer ONLY using:
  • URL structure
  • Domain name
  • Page title
  • Meta tags (title, description)
  • Open Graph tags
  • Visible headings (H1/H2)
- If still uncertain, leave the field empty.
- Do NOT infer team members, social links, or verification unless explicitly present.

Extraction Rules:
- "name": Human-readable name of the tool.
- "tagline": One short sentence only.
- "description": Summary of what the tool does.
- "website_url": The canonical/main website URL.
- "logo_url": Logo or brand asset from page or OG tags.
- "tool_thumbnail_url": Prefer og:image; fallback to logo.
- "is_verified": true only if explicitly stated.
- "twitter_url" and "linkedin_url": Extract only if valid.
- "team_members": Only actual names from Team/About sections.
- Company fields must come from real sections (About, Company, Footer).
- No invented funding rounds, team size, or company details.

Return JSON in this EXACT structure:

{
  "name": "",
  "tagline": "",
  "description": "",
  "website_url": "",
  "logo_url": "",
  "is_verified": false,
  "twitter_url": "",
  "linkedin_url": "",
  "team_members": [],
  "tool_thumbnail_url": "",
  "company_name": "",
  "company_website": "",
  "company_logo": "",
  "company_verified": false,
  "company_team_size": "",
  "company_funding_round": "",
  "company_funding_amount": "",
  "company_funding_info": ""
}
URL: ${url}
`;
  
  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "google/gemini-2.5-flash",
        messages: [{ role: "user", content: prompt }],
        temperature: 0,
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "HTTP-Referer": "https://your-site.com",
          "X-Title": "AI Tool Scraper",
        },
      }
    );
   
    const data = cleanJsonString(response.data.choices[0].message.content);
    const parsedJSON = JSON.parse(data);
    return parsedJSON;
  } catch (error) {
    console.error("OpenRouter Error:", error.response?.data || error);
    throw new Error("AI parsing failed");
  }
}


// Helper Function to remove any extra backtics(```) begore json
function cleanJsonString(str) {
  if (!str) return str;
  str = str.replace(/```[\s\S]*?{/m, "{"); 
  str = str.replace(/```/g, "");
  return str.trim();
}