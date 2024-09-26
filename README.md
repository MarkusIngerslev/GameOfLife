# Conway's Game of Life

I conway's game of life er hver celle (firkant) simuleret, sådan at hvis bestemte kraterier bliver opfyldt, så vil der ske ændringer.

[Spillet kan findes her](https://markusingerslev.github.io/GameOfLife/) 

I spillet så sker følgende:
- En celle dør hvis dens omkring læggende naboer er < 2
- En celle overlever hvis den her 2 naboer
- En ny celle bliver _født_ hvis den her 3 naboer
- En celle dør hvis den har mere > 3 naboer

## Ting implementeret

Følgende er muligt for brugeren at bestemme og definere
1. Størrelsen af spillebræt _*rækker & kolonner*_
2. Hastigheden for ny generation _*i ms*_
3. Mængden af tilfældige levene cell'er _*population*_
4. Muligt at tømme spillebræt _*Clear button*_
5. Muligt at tilføje flere tilføldige cell'er midt spil _*population og addRandomCells button*_
6. Muligt at klikke på spillebræts celler og bestemme om den skal være i _live_ eller _død_