# TecAce Careers — Mobile UI Kit

An interactive recreation of the TecAce hiring app (the representative product surface). Built entirely from this system's primitives (`Button`, `Chip`, `Category`, `Card`, `Avatar`, `ContentBadge`, `BottomNavigation`, `IconButton`, `Tab`, `Badge`) over the token foundation.

Open `index.html`. Flow: **job feed → filter by category → tap a card → job detail → apply**, with a working bottom navigation. Data is mock; interactions are real (state, navigation, save/bookmark).

Screens are composed inline in `index.html` for a self-contained click-through; factor into separate `Screen*.jsx` files if extending.
