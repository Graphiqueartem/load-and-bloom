import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SITE_CONTEXT = `
You are the LoveDanceLive assistant, helping visitors learn about our global dance competition platform.

ABOUT LOVEDANCELIVE:
LoveDanceLive brings dancers from every corner of the world together through live competition energy and digital connection. We celebrate talent, culture, and creativity across regional stages and online performances.

COMPETITION OPTIONS:
1. LIVE REGIONAL EVENTS:
   - Held annually in 5 cities: Mexico City 🇲🇽, Sydney 🇦🇺, Johannesburg 🇿🇦, Seoul 🇰🇷, London 🇬🇧
   - Each event includes live battles, showcases, and workshops
   - Registration: Visit our Events or Competitions page

2. ONLINE SUBMISSIONS:
   - Submit from anywhere in the world
   - Video requirements: 2-5 minutes, MP4/MOV/AVI format, max 500MB
   - Expert judges review all performances
   - Optional: Premium critique with detailed video feedback

HOW TO ENTER:
1. Choose your path: Live regional event OR online video submission
2. Register at /registration page
3. For live events: Register your slot for your chosen city
4. For online: Upload your performance video (2-5 minutes)
5. Optional: Add premium critique for expert feedback

AGE CATEGORIES:
- Youth: 8-17 years
- Adult: 18+ years
- Solo, duet, and group performances welcome

DANCE STYLES:
Hip Hop, Contemporary, Jazz, Ballet, Street Dance, Breaking, Salsa, Bachata, Latin, Bollywood, Classical, Fusion, Modern, Tap, Ballroom, Folk, Afrobeat

JUDGES & FEEDBACK:
- Expert judges from around the world
- Standard feedback: Written evaluation
- Premium feedback: Detailed video critique from professional judges
- Platinum option: Choose your preferred judge
- All judges are experienced professionals in various dance genres

WORKSHOPS & CLASSES:
- In-person workshops in all 5 regional cities
- Online classes available year-round
- Covers all major dance styles
- Led by professional instructors and competition judges
- Check /workshops and /online-classes pages

PRIZES:
- Cash awards for top performers
- Masterclasses with professional judges
- Featured performance opportunities
- Regional winners qualify for Grand Final in Dubai
- Monthly prizes through Global Competition Program
- Recognition and spotlight on platform

GRAND FINAL:
- Held in Dubai
- Top performers from regional qualifiers and online submissions
- Ultimate celebration of dance

PRICING:
- Online submissions: Basic free entry option available
- Live event registration: Separate fees per event
- Premium critiques: Additional fee for detailed feedback
- Check /how-to-enter for specific pricing

COMMUNITY:
- Global community forums for dancers
- Exchange tips, stories, and encouragement
- Connect with dancers worldwide
- Live chat available

CONTACT:
- Email: hello@lovedancelive.com
- Phone: +1 (555) 123-DANCE
- Contact form available at /contact page
- Support available for all questions

Always encourage users to visit the registration page (/registration) to get started, browse competitions (/competitions), or explore workshops (/workshops).
`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { message, conversationHistory = [] } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Build messages array with site context
    const messages = [
      { 
        role: "system", 
        content: SITE_CONTEXT + "\n\nProvide helpful, concise answers based on the information above. If users ask about something not covered, kindly direct them to contact support at hello@lovedancelive.com." 
      },
      ...conversationHistory,
      { role: "user", content: message }
    ];

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ 
            error: "Rate limit exceeded. Please try again in a moment.",
            reply: "I'm receiving too many requests right now. Please try again in a moment!" 
          }), 
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ 
            error: "Service temporarily unavailable.",
            reply: "I'm temporarily unavailable. Please try again later or contact hello@lovedancelive.com for assistance." 
          }), 
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "I'm having trouble responding right now. Please try asking again!";

    return new Response(
      JSON.stringify({ reply }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Unknown error",
        reply: "I'm having trouble right now. Please contact hello@lovedancelive.com for assistance."
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
