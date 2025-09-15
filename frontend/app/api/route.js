export async function POST(req) {
  try {
    // گرفتن داده‌های فرستاده شده از کلاینت
    const data = await req.json();

    // ارسال به سرور Express
    const res = await fetch("http://localhost:5000/api/get-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log(result);

    // برگرداندن پاسخ
    return new Response(JSON.stringify({ success: true, result }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
