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
    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: 'Name and email are required' }),
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

    // Get MongoDB Data API credentials
    const dataApiUrl = Deno.env.get('MONGODB_DATA_API_URL');
    const dataApiKey = Deno.env.get('MONGODB_DATA_API_KEY');
    
    if (!dataApiUrl || !dataApiKey) {
      console.error('MongoDB Data API not configured');
      return new Response(
        JSON.stringify({ error: 'Database connection not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Insert via MongoDB Data API
    const response = await fetch(`${dataApiUrl}/action/insertOne`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': dataApiKey,
      },
      body: JSON.stringify({
        dataSource: 'Cluster0',
        database: 'Poruta',
        collection: 'Demo',
        document: {
          name,
          email,
          company: company || null,
          phone: phone || null,
          message: message || null,
          createdAt: new Date().toISOString(),
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('MongoDB Data API error:', errorData);
      throw new Error(`MongoDB Data API returned ${response.status}`);
    }

    const result = await response.json();
    console.log('Demo submission inserted:', result.insertedId);
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Demo booking submitted successfully',
        id: result.insertedId 
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in submit-demo:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: 'Failed to submit demo booking', details: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
