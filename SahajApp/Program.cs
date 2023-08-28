var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/calculator/greeting", () => "Hello World!");
app.MapPost("/calculator/add", (Values values) => new Response(values.First + values.Second));
app.MapPost("/calculator/subtract", (Values values) => new Response(values.First - values.Second));

await app.RunAsync();

internal record Values(int First, int Second);

internal record Response(int Result);

