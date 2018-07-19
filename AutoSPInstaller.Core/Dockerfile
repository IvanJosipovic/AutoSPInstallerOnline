FROM microsoft/dotnet:2.1-sdk-alpine AS build
WORKDIR /src
COPY AutoSPInstaller.Core.csproj ./
RUN dotnet restore AutoSPInstaller.Core.csproj
COPY . .
RUN dotnet publish AutoSPInstaller.Core.csproj -c Release -o /app

FROM microsoft/dotnet:2.1-aspnetcore-runtime-alpine AS base

#Disables Disqus Chat
ENV DisableDisqus=True
#Disables Application Insight Telemetry
ENV DisableTelemetry=True

EXPOSE 80
WORKDIR /app
COPY --from=build /app .
ENTRYPOINT ["dotnet", "AutoSPInstaller.Core.dll"]