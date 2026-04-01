export async function POST(req: Request) {
  try {
    const body = await req.json();

    // simple check
    if (!body.name || !body.email) {
      return Response.json(
        { success: false, message: "Missing fields" },
        { status: 400 }
      );
    }

    const response = await fetch(process.env.GOOGLE_SCRIPT_URL!, {
      method: "POST",
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return Response.json({ success: true, data });

  } catch (error: any) {
    return Response.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}