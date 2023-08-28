FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

ENV ASPNETCORE_URLS=http://+:8080

WORKDIR /SahajApp
COPY ["SahajApp/SahajApp.csproj", ""]
RUN dotnet restore "./SahajApp.csproj"
COPY ["SahajApp/.", ""]

WORKDIR "/SahajApp/."
RUN dotnet build "SahajApp.csproj" -c Release -o /app/build

EXPOSE 8080

WORKDIR /app/build
ENTRYPOINT ["dotnet", "SahajApp.dll"]