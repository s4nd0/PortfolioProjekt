# Portfolio Osobiste – Piotr Piasko

Responsywna strona internetowa typu portfolio prezentująca profil zawodowy, umiejętności techniczne oraz zrealizowane projekty programistyczne.

## 🔗 Wersja demonstracyjna (GitHub Pages)

Strona jest opublikowana i dostępna pod adresem:  
👉 **[https://s4nd0.github.io/PortfolioProjekt/](https://s4nd0.github.io/PortfolioProjekt/)**

---

## 📋 Opis projektu

Serwis został zaprojektowany w nowoczesnym układzie kafelkowym (**Bento Grid**) i składa się z trzech powiązanych ze sobą widoków:
* **Strona główna (`index.html`)** - sekcja powitalna, zestawienie głównych technologii, wyróżniony projekt (*BicepsLog*) oraz sekcja kontaktowa (`#kontakt`).
* **O mnie (`o-mnie.html`)** - informacje o studiach informatycznych na Politechnice Lubelskiej, specjalizacji oraz zainteresowaniach.
* **Projekty (`projekty.html`)** - zróżnicowana wizualnie prezentacja projektów (*Clarity – EUDIS Hackathon*, *BicepsLog*, *AdvancedTodoApp*, *SkyCast*, *Cooking-Ninja*) z interaktywnymi, rozwijanymi sekcjami szczegółów technicznych.

---

## 🛠️ Wykorzystane technologie

* **HTML5** – semantyczna struktura dokumentu (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), atrybuty dostępności ARIA (`aria-label`, `aria-expanded`) oraz poprawne metadane.
* **CSS3** – zmienne CSS (`Custom Properties`) do obsługi motywów kolorystycznych, układy oparte o **CSS Grid** oraz **Flexbox**, płynne animacje (`transition`, `grid-template-rows`) oraz pełna responsywność (**RWD** z wykorzystaniem `@media queries`).
* **JavaScript (Vanilla JS / ES6+)** – manipulacja drzewem DOM, obsługa zdarzeń oraz wykorzystanie pamięci przeglądarki (`localStorage`).
* **Font Awesome 6** – zestaw ikon wektorowych dla interfejsu użytkownika i linków kontaktowych.

---

## ⚡ Zaimplementowane funkcjonalności JavaScript

1. **Przełącznik motywu (Jasny / Ciemny):**
   * Zmiana kolorystyki całej witryny w czasie rzeczywistym wraz z dynamiczną podmianą ikony
   * Zapisywanie wyboru użytkownika w `localStorage`, dzięki czemu motyw zostaje zachowany po odświeżeniu strony oraz podczas przechodzenia między podstronami.
   * Wdrożenie skryptu zapobiegającego efektowi FOUC (*Flash of Unstyled Content*) w sekcji `<head>`.
2. **Responsywne menu mobilne (Hamburger Menu):**
   * Rozwijane i zwijane menu nawigacyjne dostosowane do ekranów smartfonów (poniżej `768 px`).
   * Automatyczne zamykanie menu po wybraniu linku nawigacyjnego.
3. **Interaktywne karty projektów:**
   * Płynne rozwijanie i zwijanie szczegółów technicznych dla każdego projektu na podstronie `projekty.html`.

---

## 👤 Autor

**Piotr Piasko**  
* GitHub: [@s4nd0](https://github.com/s4nd0)  
* E-mail: [piotr.piasko09@gmail.com](mailto:piotr.piasko09@gmail.com)