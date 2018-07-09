FROM microsoft/dotnet:2.1-aspnetcore-runtime-alpine AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.1-sdk-alpine AS build
WORKDIR /src
COPY AutoSPInstaller.Core.csproj ./
RUN dotnet restore AutoSPInstaller.Core.csproj
COPY . .
WORKDIR /src
RUN dotnet build AutoSPInstaller.Core.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish AutoSPInstaller.Core.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "AutoSPInstaller.Core.dll"]
