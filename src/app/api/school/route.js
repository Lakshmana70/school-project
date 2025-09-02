import prisma from "@/lib/prisma";

export async function GET(request) {
    try {
        const schoolsdata = await prisma.schools .findMany();
        return new Response(JSON.stringify(schoolsdata), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        console.error('Error fetching school data:', error);
        return new Response(JSON.stringify({ error: 'DB error' }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}