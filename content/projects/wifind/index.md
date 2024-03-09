---
title: "wifind"
description: "Wifi finger-printing cli tool"
date: 2024-03-01
showSummary: true
summary: Wifi finger-printing cli tool
tags: ["wifi finger-printing", "ai"]
---

Wifind is a cli tool that performs wifi finger-printing. It uses machine learning to predict your positions given samples collected during offline stage.

```sh
# learn current location labelling it as kitchen
wifind learn -r kitchen

# print saved locations
wifind rooms
# ['kitchen', 'bedroom']

# predicts current location
wifind predict
# kitchen

wifind predict -p
# {'kitchen': 0.68, 'bedroom': 0.32}

# clears data
wifind clear
```

{{< github repo="micheledinelli/wifind" >}}
