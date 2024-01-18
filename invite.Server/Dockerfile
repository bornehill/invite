#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER app
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
#COPY ["invite.client/nuget.config", "invite.client/"]
COPY ["invite.Server/invite.Server.csproj", "invite.Server/"]
#COPY ["invite.client/invite.client.esproj", "invite.client/"]
RUN dotnet restore "./invite.Server/./invite.Server.csproj"
COPY . .
WORKDIR "/src/invite.Server"
RUN dotnet build "./invite.Server.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./invite.Server.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "invite.Server.dll"]