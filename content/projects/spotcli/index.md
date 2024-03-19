---
title: "spotcli"
description: "Cli tool for spotify"
date: 2024-03-19
showSummary: true
summary: "Cli tool for spotify"
tags: ["cli", "oauth2"]
---

`spotcli` is in early stage development. At the moment It supports OAuth2 authentication flow using spotipy library

```sh
# shows available commands
spotcli --help

# logs you in
spotcli login

# shows current user info
spotcli login --info
# { <a json with info> }

# logs you out
spotcli logout
```

{{< github repo="micheledinelli/spotcli" >}}
