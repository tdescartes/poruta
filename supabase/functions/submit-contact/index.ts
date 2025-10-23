import { MongoClient } from "https://deno.land/x/mongo@v0.32.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, phone, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and message are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate email format
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Connect to MongoDB
    const mongoUri = Deno.env.get('MONGODB_URI');
    if (!mongoUri) {
      console.error('MONGODB_URI not configured');
      return new Response(
        JSON.stringify({ error: 'Database connection not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const client = new MongoClient();
    
    try {
      await client.connect(mongoUri);
      console.log('Connected to MongoDB');
      
      const database = client.database('Poruta');
      const collection = database.collection('Signup');
      
      // Insert contact submission
      const result = await collection.insertOne({
        name,
        email,
        company: company || null,
        phone: phone || null,
        message,
        createdAt: new Date(),
      });
      
      console.log('Contact submission inserted:', result.insertedId);
      
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Contact form submitted successfully',
          id: result.insertedId 
        }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } finally {
      await client.close();
    }
  } catch (error) {
    console.error('Error in submit-contact:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: 'Failed to submit contact form', details: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
