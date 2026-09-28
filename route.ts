export async function GET() {
  try {
    const response = await fetch("https://discord.com/api/v10/invites/vbMAxspHFe?with_counts=true",{
      headers:{ "Accept":"application/json" }
    });
    if (!response.ok) return new Response(null,{status:502});
    const invite = await response.json() as { approximate_presence_count?:number; approximate_member_count?:number };
    if (!Number.isInteger(invite.approximate_presence_count) || !Number.isInteger(invite.approximate_member_count)) return new Response(null,{status:502});
    return Response.json({ online:invite.approximate_presence_count,members:invite.approximate_member_count },{
      headers:{ "Cache-Control":"public, max-age=60" }
    });
  } catch { return new Response(null,{status:502}); }
}
