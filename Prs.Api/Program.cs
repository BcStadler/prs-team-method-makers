using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using Prs.Api.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers().AddJsonOptions(options => {
    options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
});

builder.Services.AddDbContext<PrsDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("PrsTeamProject"))
);

// Open CORS policy — restrict origins, headers, and methods in production
builder.Services.AddCors();

var app = builder.Build();

app.UseCors(policy => policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

//app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
