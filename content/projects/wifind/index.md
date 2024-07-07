---
title: "wifind"
description: "Radio fingerprinting command-line application"
date: 2024-03-01
showSummary: true
summary: Radio fingerprinting command-line application
tags: ["wifi fingerprinting", "unsupervised learning", "cli"]
---

Wifind is a cli tool that performs wifi finger-printing. It uses machine learning to predict positions given some samples collected during offline stage.

Tell it wifi access points around you and it will tell yuo where you are.

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
