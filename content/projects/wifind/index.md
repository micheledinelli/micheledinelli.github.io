---
date: "2025-08-27T01:42:08+02:00"
title: "Wifind"
summary: "Radio fingerprinting for WiFi networks"
---

Wifind is a command line application that performs radio fingerprinting on WiFi networks. It can estimate your position inside buildings using known WiFi access points and their signal strengths.

Source code available on [GitHub](https://github.com/micheledinelli/wifind).

Install available with [pip](https://pypi.org/project/wifind/):

```bash {style=base16-snazzy}
pip install wifind
```

Example usage

```bash {style=base16-snazzy}
# learn current location labelling it as kitchen
wifind learn -r kitchen

# print saved locations
wifind rooms
# ['kitchen', 'bedroom']

# predicts current location
wifind predict
# kitchen

# watch for location changes
wifind --watch
# 2024-06-08 12:31:24 - kitchen
# 2024-06-08 12:31:27 - bedroom
# 2024-06-08 12:31:31 - bedroom
# 2024-06-08 12:31:35 - bedroom

wifind predict -p
# {'kitchen': 0.68, 'bedroom': 0.32}

# clears data
wifind clear
```
